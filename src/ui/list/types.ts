import type { HapticFeedbackStyle } from "../../utils";
import type { GestureResponderEvent, PressableProps, ViewProps } from "react-native";
import type { SurfaceLevel } from "../surface";

// ============================================================================
// Core Types
// ============================================================================

/**
 * List variant - controls background styling
 */
export type ListVariant = "default" | "surface";

/**
 * Icon position in ListItem
 */
export type ListItemIconPosition = "left" | "right";

// ============================================================================
// Render Props
// ============================================================================

/**
 * Props exposed to render function children at item level
 */
export interface ListItemRenderProps {
	/** Whether this item is expanded (if collapsible) */
	isExpanded: boolean;
	/** Whether this item is disabled */
	isDisabled: boolean;
}

/**
 * Render function signature for list item children
 */
export type ListItemRenderFunction = (props: ListItemRenderProps) => React.ReactNode;

/**
 * Children type - either static ReactNode or render function
 */
export type ListItemChildren = React.ReactNode | ListItemRenderFunction;

// ============================================================================
// Animation Config
// ============================================================================

export interface ListItemHighlightConfig {
	/**
	 * Animation duration in milliseconds.
	 * @default 100
	 */
	duration?: number;

	/**
	 * Maximum opacity when pressed.
	 * @default 0.1
	 */
	opacity?: number;

	/**
	 * Whether to disable the highlight animation.
	 * @default false
	 */
	isDisabled?: boolean;
}

export interface ListItemAnimationConfig {
	highlight?: ListItemHighlightConfig;
}

// ============================================================================
// Context Types
// ============================================================================

/**
 * List context value - shared from List to all children
 */
export interface ListContextValue {
	/** List variant */
	variant: ListVariant;
	/** Surface level (if variant='surface') */
	surfaceLevel: SurfaceLevel;
	/** Whether to show dividers between items */
	showDividers: boolean;
}

/**
 * ListItem context value - shared from ListItem to compound components
 */
export interface ListItemContextValue {
	/** Whether this item is expanded */
	isExpanded: boolean;
	/** Whether this item is disabled */
	isDisabled: boolean;
	/** Toggle expanded state */
	toggleExpanded: () => void;
}

// ============================================================================
// Component Props
// ============================================================================

/**
 * List root component props
 */
export interface ListProps extends ViewProps {
	/**
	 * Visual variant
	 * - default: transparent background
	 * - surface: wraps items in Surface with specified level
	 * @default 'default'
	 */
	variant?: ListVariant;

	/**
	 * Surface level (only used if variant='surface')
	 * @default 'secondary'
	 */
	surfaceLevel?: SurfaceLevel;

	/**
	 * Whether to show dividers between items
	 * @default true
	 */
	showDividers?: boolean;

	children?: React.ReactNode;
	className?: string;
}

/**
 * ListItem component props
 */
export interface ListItemProps extends Omit<PressableProps, "children" | "disabled"> {
	/**
	 * Callback when item is pressed
	 */
	onPress?: () => void;

	/**
	 * Whether the item is interactive (pressable).
	 * When false, renders as a static View without press handlers.
	 * @default true
	 */
	interactive?: boolean;

	/**
	 * Whether this item is collapsible (accordion mode)
	 * @default false
	 */
	isCollapsible?: boolean;

	/**
	 * Controlled expanded state (only used if isCollapsible=true)
	 */
	isExpanded?: boolean;

	/**
	 * Default expanded state for uncontrolled usage
	 * @default false
	 */
	defaultExpanded?: boolean;

	/**
	 * Callback when expanded state changes
	 */
	onExpandedChange?: (expanded: boolean) => void;

	/**
	 * Whether interactions are disabled
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Enable haptic feedback on press.
	 * true = Light impact, or specify a style.
	 */
	haptics?: boolean | HapticFeedbackStyle;

	/**
	 * Animation configuration for highlight
	 */
	animationConfig?: ListItemAnimationConfig;

	/**
	 * Callback when press begins
	 */
	onPressIn?: (event: GestureResponderEvent) => void;

	/**
	 * Callback when press ends
	 */
	onPressOut?: (event: GestureResponderEvent) => void;

	/**
	 * Item content
	 *
	 * @example
	 * ```tsx
	 * // Explicit composition
	 * <ListItem>
	 *   <ListItemIcon>
	 *     <IconSymbol name="gear" />
	 *   </ListItemIcon>
	 *   <ListItemContent>Settings</ListItemContent>
	 *   <ListItemChevron />
	 * </ListItem>
	 *
	 * // Render function
	 * <ListItem>
	 *   {({ isExpanded }) => (
	 *     <ListItemContent>
	 *       Settings {isExpanded && "(Expanded)"}
	 *     </ListItemContent>
	 *   )}
	 * </ListItem>
	 * ```
	 */
	children: ListItemChildren;

	className?: string;
}

/**
 * ListItemContent component props
 */
export interface ListItemContentProps {
	/**
	 * Content - strings are auto-wrapped with Text component
	 */
	children: React.ReactNode;
	className?: string;
}

/**
 * ListItemIcon component props
 */
export interface ListItemIconProps extends ViewProps {
	/**
	 * Icon position
	 * @default 'left'
	 */
	position?: ListItemIconPosition;

	/**
	 * Icon content (typically IconSymbol component)
	 */
	children: React.ReactNode;

	className?: string;
}

/**
 * ListItemChevron component props
 */
export interface ListItemChevronProps {
	/**
	 * Custom animation duration in ms
	 * @default 150
	 */
	duration?: number;

	className?: string;
}

/**
 * ListItemCollapse component props
 */
export interface ListItemCollapseProps extends ViewProps {
	/**
	 * Custom animation duration in ms
	 * @default 250
	 */
	duration?: number;

	children?: React.ReactNode;
	className?: string;
}

/**
 * ListItemAccessory component props
 */
export interface ListItemAccessoryProps {
	/**
	 * Accessory content (Switch, Text, Badge, etc.)
	 */
	children: React.ReactNode;
	className?: string;
}

/**
 * ListSectionHeader component props
 */
export interface ListSectionHeaderProps {
	/**
	 * Section header text - auto-uppercased for iOS Settings style
	 */
	children: React.ReactNode;
	className?: string;
}
