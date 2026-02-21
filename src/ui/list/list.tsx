import type { HapticFeedbackStyle } from "../../utils";
import React, { useCallback, useMemo, useState } from "react";
import type { GestureResponderEvent } from "react-native";
import { View } from "react-native";
import { cnx, hapticsImpact, isRenderFunction, isTextContent } from "../../utils";
import { AnimatedPressable, PressableHighlight, usePressableAnimation } from "../buttons/shared";
import { HStack, VStack } from "../layout";
import { Surface } from "../surface";
import { Caption } from "../typography/caption";
import { Text } from "../typography/text";
import {
	LIST_ANIMATION,
	LIST_DEFAULTS,
	LIST_DISPLAY_NAMES,
	LIST_HIGHLIGHT_COLOR_MAP,
	LIST_ITEM_DEFAULTS,
} from "./constants";
import { ListContext, ListItemContext, useListContext, useListItemContext } from "./context";
import type {
	ListContextValue,
	ListItemAccessoryProps,
	ListItemContentProps,
	ListItemContextValue,
	ListItemIconProps,
	ListItemProps,
	ListItemRenderProps,
	ListProps,
	ListSectionHeaderProps,
} from "./types";

// ============================================================================
// ListDivider (Internal)
// ============================================================================

/**
 * Internal divider component for list items.
 * Uses iOS Settings-style inset dividers.
 */
function ListDivider({ className }: { className?: string }) {
	return <View className={cnx("mx-4 border-border border-t", className)} />;
}

// ============================================================================
// List
// ============================================================================

/**
 * iOS-style list component with optional surface wrapping.
 *
 * Supports two variants:
 * - **default**: Transparent background, items on whatever surface is behind
 * - **surface**: Auto-wraps content in rounded Surface component
 *
 * Automatically injects dividers between items (controlled via `showDividers` prop).
 *
 * **Note**: `ListSectionHeader` should be placed OUTSIDE the List component.
 *
 * @example
 * ```tsx
 * // iOS Settings style - ListSectionHeader OUTSIDE List
 * <VStack className="gap-2">
 *   <ListSectionHeader>Account</ListSectionHeader>
 *   <List variant="surface" surfaceLevel="secondary">
 *     <ListItem onPress={handleProfile} haptics>
 *       <ListItemIcon>
 *         <IconSymbol name="person.fill" colorScheme="primary" />
 *       </ListItemIcon>
 *       <ListItemContent>Profile</ListItemContent>
 *       <ListItemChevron />
 *     </ListItem>
 *     <ListItem onPress={handleSettings}>
 *       <ListItemContent>Settings</ListItemContent>
 *       <ListItemChevron />
 *     </ListItem>
 *   </List>
 * </VStack>
 *
 * // Without dividers
 * <List variant="surface" showDividers={false}>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * ```
 */
export function List({
	variant = LIST_DEFAULTS.variant,
	surfaceLevel = LIST_DEFAULTS.surfaceLevel,
	showDividers = LIST_DEFAULTS.showDividers,
	children,
	className,
	...viewProps
}: ListProps) {
	const contextValue = useMemo<ListContextValue>(
		() => ({
			variant,
			surfaceLevel,
			showDividers,
		}),
		[variant, surfaceLevel, showDividers]
	);

	// Inject iOS-style dividers between children
	const childrenWithDividers = useMemo(() => {
		if (!showDividers) return children;

		const childArray = React.Children.toArray(children);
		return childArray.flatMap((child, index) => {
			// Don't add divider after last child
			if (index === childArray.length - 1) {
				return [child];
			}
			// Add child + divider with iOS-style insets
			const childKey = React.isValidElement(child) ? child.key : index;
			return [child, <ListDivider key={`divider-${childKey ?? index}`} />];
		});
	}, [children, showDividers]);

	const content = (
		<VStack className={variant === "default" ? className : undefined} {...viewProps}>
			{childrenWithDividers}
		</VStack>
	);

	if (variant === "surface") {
		return (
			<ListContext.Provider value={contextValue}>
				<Surface level={surfaceLevel} className={cnx("overflow-hidden rounded-xl", className)}>
					{content}
				</Surface>
			</ListContext.Provider>
		);
	}

	return <ListContext.Provider value={contextValue}>{content}</ListContext.Provider>;
}

List.displayName = LIST_DISPLAY_NAMES.LIST;

// ============================================================================
// Helper: Check if child is ListItemCollapse
// ============================================================================

function isCollapseChild(child: React.ReactNode): boolean {
	if (!React.isValidElement(child)) return false;
	if (typeof child.type === "string") return false;
	if (typeof child.type === "function") {
		return (
			(child.type as { displayName?: string }).displayName === LIST_DISPLAY_NAMES.LIST_ITEM_COLLAPSE
		);
	}
	return false;
}

// ============================================================================
// ListItem
// ============================================================================

/**
 * Interactive list item with optional accordion functionality.
 *
 * Features:
 * - Press highlight animation (Aether pattern)
 * - Haptic feedback support
 * - Collapsible/accordion mode
 * - Dividers between items
 *
 * @example
 * ```tsx
 * // Simple pressable item
 * <ListItem onPress={handlePress} haptics>
 *   <ListItemIcon>
 *     <IconSymbol name="gear" colorScheme="muted" />
 *   </ListItemIcon>
 *   <ListItemContent>Settings</ListItemContent>
 *   <ListItemChevron />
 * </ListItem>
 *
 * // Collapsible item
 * <ListItem isCollapsible defaultExpanded={false}>
 *   <ListItemContent>Notifications</ListItemContent>
 *   <ListItemChevron />
 *   <ListItemCollapse>
 *     <Text color="muted">Configure notification preferences</Text>
 *   </ListItemCollapse>
 * </ListItem>
 * ```
 */
export function ListItem({
	onPress,
	interactive = true,
	isCollapsible = LIST_ITEM_DEFAULTS.isCollapsible,
	isExpanded: controlledExpanded,
	defaultExpanded = LIST_ITEM_DEFAULTS.defaultExpanded,
	onExpandedChange,
	disabled = LIST_ITEM_DEFAULTS.disabled,
	haptics,
	animationConfig,
	onPressIn,
	onPressOut,
	children,
	className,
	...pressableProps
}: ListItemProps) {
	const listContext = useListContext();

	// Internal expanded state for uncontrolled usage
	const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
	const isControlled = controlledExpanded !== undefined;
	const isExpanded = isControlled ? controlledExpanded : internalExpanded;

	const isDisabled = disabled;

	const toggleExpanded = useCallback(() => {
		const newValue = !isExpanded;
		if (!isControlled) {
			setInternalExpanded(newValue);
		}
		onExpandedChange?.(newValue);
	}, [isExpanded, isControlled, onExpandedChange]);

	// Haptics on press
	const handleHapticPressIn = useCallback(
		(event: GestureResponderEvent) => {
			if (haptics && !isDisabled) {
				const feedbackStyle = haptics === true ? undefined : (haptics as HapticFeedbackStyle);
				hapticsImpact(feedbackStyle);
			}
			onPressIn?.(event);
		},
		[haptics, isDisabled, onPressIn]
	);

	// Uses pressable animation hook (highlight only, no scale)
	const { animatedStyle, isPressed, handlePressIn, handlePressOut } = usePressableAnimation(
		{
			isDisabled,
			disableScale: true,
		},
		handleHapticPressIn,
		onPressOut
	);

	const handlePress = useCallback(() => {
		if (isCollapsible) {
			toggleExpanded();
		}
		onPress?.();
	}, [isCollapsible, toggleExpanded, onPress]);

	// Context for child components
	const itemContext = useMemo<ListItemContextValue>(
		() => ({
			isExpanded,
			isDisabled,
			toggleExpanded,
		}),
		[isExpanded, isDisabled, toggleExpanded]
	);

	// Render children and separate collapse from main content
	const renderedChildren = useMemo(() => {
		if (isRenderFunction<ListItemRenderProps>(children)) {
			return children({ isExpanded, isDisabled });
		}
		return children;
	}, [children, isExpanded, isDisabled]);

	// Separate ListItemCollapse from other children
	const childArray = React.Children.toArray(renderedChildren);
	const collapseChildren = childArray.filter(isCollapseChild);
	const mainChildren = childArray.filter((child) => !isCollapseChild(child));

	const highlightColor = LIST_HIGHLIGHT_COLOR_MAP[listContext.surfaceLevel];
	const highlightOpacity = animationConfig?.highlight?.opacity ?? LIST_ANIMATION.highlightOpacity;

	if (!interactive) {
		return (
			<ListItemContext.Provider value={itemContext}>
				<VStack className="w-full">
					<View className={cnx("relative overflow-hidden", isDisabled && "opacity-50", className)}>
						<HStack className="min-h-[44px] w-full items-center gap-4 px-4 py-3">
							{mainChildren}
						</HStack>
					</View>
					{collapseChildren.length > 0 && <>{collapseChildren}</>}
				</VStack>
			</ListItemContext.Provider>
		);
	}

	return (
		<ListItemContext.Provider value={itemContext}>
			<VStack className="w-full">
				<AnimatedPressable
					style={animatedStyle}
					className={cnx("relative overflow-hidden", isDisabled && "opacity-50", className)}
					disabled={isDisabled}
					onPress={handlePress}
					onPressIn={handlePressIn}
					onPressOut={handlePressOut}
					accessibilityRole="button"
					accessibilityState={{
						disabled: isDisabled,
						expanded: isCollapsible ? isExpanded : undefined,
					}}
					{...pressableProps}>
					<PressableHighlight
						isPressed={isPressed}
						colorKey={highlightColor}
						opacity={highlightOpacity}
						duration={animationConfig?.highlight?.duration}
						isDisabled={animationConfig?.highlight?.isDisabled ?? isDisabled}
					/>
					<HStack className="min-h-[44px] w-full items-center gap-4 px-4 py-3">
						{mainChildren}
					</HStack>
				</AnimatedPressable>

				{/* Render collapse sections outside pressable */}
				{collapseChildren.length > 0 && <>{collapseChildren}</>}
			</VStack>
		</ListItemContext.Provider>
	);
}

ListItem.displayName = LIST_DISPLAY_NAMES.LIST_ITEM;

// ============================================================================
// ListItemContent
// ============================================================================

/**
 * Content wrapper for list items. Strings are auto-wrapped with Text component.
 *
 * @example
 * ```tsx
 * // Auto-styled string
 * <ListItemContent>Settings</ListItemContent>
 *
 * // Custom composition
 * <ListItemContent>
 *   <VStack>
 *     <Text weight="medium">Title</Text>
 *     <Text variant="subhead" color="muted">Subtitle</Text>
 *   </VStack>
 * </ListItemContent>
 * ```
 */
export function ListItemContent({ children, className }: ListItemContentProps) {
	const { isDisabled } = useListItemContext();

	// Auto-wrap strings in Text
	if (isTextContent(children)) {
		return (
			<Text
				variant="body"
				color={isDisabled ? "muted" : "default"}
				className={cnx("flex-1", className)}>
				{children}
			</Text>
		);
	}

	return <VStack className={cnx("flex-1", className)}>{children}</VStack>;
}

ListItemContent.displayName = LIST_DISPLAY_NAMES.LIST_ITEM_CONTENT;

// ============================================================================
// ListItemIcon
// ============================================================================

/**
 * Icon container for list items with position control.
 *
 * @example
 * ```tsx
 * <ListItemIcon position="left">
 *   <IconSymbol name="person.fill" colorScheme="primary" size={22} />
 * </ListItemIcon>
 * ```
 */
export function ListItemIcon({
	position = "left",
	children,
	className,
	...viewProps
}: ListItemIconProps) {
	const positionClass = position === "right" ? "ml-auto" : "";

	return (
		<View className={cnx("items-center justify-center", positionClass, className)} {...viewProps}>
			{children}
		</View>
	);
}

ListItemIcon.displayName = LIST_DISPLAY_NAMES.LIST_ITEM_ICON;

// ============================================================================
// ListItemAccessory
// ============================================================================

/**
 * Container for right-side accessories like switches, text values, or badges.
 *
 * Positioned to the right of list item content. Does not include any implicit
 * behavior - child components manage their own state and interactions.
 *
 * @example
 * ```tsx
 * // Switch accessory
 * <ListItem>
 *   <ListItemContent>Notifications</ListItemContent>
 *   <ListItemAccessory>
 *     <Switch value={enabled} onValueChange={setEnabled} />
 *   </ListItemAccessory>
 * </ListItem>
 *
 * // Text/Value accessory with chevron
 * <ListItem onPress={handleLanguagePress}>
 *   <ListItemContent>Language</ListItemContent>
 *   <ListItemAccessory>
 *     <Text color="muted">English</Text>
 *   </ListItemAccessory>
 *   <ListItemChevron />
 * </ListItem>
 *
 * // Badge accessory
 * <ListItem onPress={handleNotifications}>
 *   <ListItemContent>Messages</ListItemContent>
 *   <ListItemAccessory>
 *     <Badge>3</Badge>
 *   </ListItemAccessory>
 *   <ListItemChevron />
 * </ListItem>
 * ```
 */
export function ListItemAccessory({ children, className }: ListItemAccessoryProps) {
	return <View className={cnx("ml-auto items-center justify-center", className)}>{children}</View>;
}

ListItemAccessory.displayName = LIST_DISPLAY_NAMES.LIST_ITEM_ACCESSORY;

// ============================================================================
// ListSectionHeader
// ============================================================================

/**
 * Section header for grouped lists. Text is automatically uppercased.
 *
 * **Note**: Should be placed OUTSIDE the List component, not inside.
 *
 * @example
 * ```tsx
 * // Correct usage - header OUTSIDE List
 * <VStack className="gap-2">
 *   <ListSectionHeader>Account</ListSectionHeader>
 *   <List variant="surface">
 *     <ListItem>Profile</ListItem>
 *     <ListItem>Settings</ListItem>
 *   </List>
 * </VStack>
 * ```
 */
export function ListSectionHeader({ children, className }: ListSectionHeaderProps) {
	return (
		<Caption
			variant="md"
			weight="medium"
			color="muted"
			className={cnx("px-4 pt-4 pb-1 uppercase", className)}>
			{children}
		</Caption>
	);
}

ListSectionHeader.displayName = LIST_DISPLAY_NAMES.LIST_SECTION_HEADER;
