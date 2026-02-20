import { cssInterop } from "nativewind";
import type { GestureResponderEvent, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import { cnx, hapticsImpact, isTextContent } from "../../../utils";
import type { HapticFeedbackStyle } from "../../../utils";
import { Text } from "../../typography/text";
import { AnimatedPressable, PressableHighlight, usePressableAnimation } from "../shared";
import {
	GLASS_BUTTON_ANIMATION_DURATION,
	GLASS_BUTTON_DEFAULT_EFFECT,
	GLASS_BUTTON_HEIGHT_MAP,
	GLASS_BUTTON_RADIUS_MAP,
	GLASS_BUTTON_SCALE,
	GLASS_BUTTON_TEXT_SIZE_MAP,
	GLASS_BUTTON_WIDTH_MAP,
} from "./constants";
import { GLASS_BUTTON_FALLBACK_SHADOW, glassButtonVariants } from "./styles";
import type { GlassButtonProps } from "./types";

// oxlint-disable-next-line @typescript-eslint/no-explicit-any
let LiquidGlassViewComponent: any = null;
let isLiquidGlassAvailable = false;
try {
	const lg = require("@callstack/liquid-glass");
	LiquidGlassViewComponent = lg.LiquidGlassView;
	isLiquidGlassAvailable = lg.isLiquidGlassSupported;
	if (LiquidGlassViewComponent) {
		cssInterop(LiquidGlassViewComponent, { className: "style" });
	}
} catch {
	// @callstack/liquid-glass not installed — use fallback styling
}

/**
 * GlassButton — Liquid Glass button for iOS 26+, falls back to themed glass styling.
 *
 * @example
 * ```tsx
 * <GlassButton size="icon" onPress={handleGoBack} accessibilityLabel="Go back">
 *   <IconSymbol name="chevron.left" size={22} colorScheme="foreground" />
 * </GlassButton>
 *
 * <GlassButton size="fab" onPress={handleAdd} accessibilityLabel="Add new entry">
 *   +
 * </GlassButton>
 * ```
 */
export function GlassButton({
	size = "icon",
	effect,
	colorScheme = "system",
	tintColor,
	disabled = false,
	useLiquidGlass = true,
	children,
	accessibilityLabel,
	haptics = true,
	onPress,
	onPressIn,
	onPressOut,
	className,
	style,
	...props
}: GlassButtonProps) {
	const shouldUseLiquidGlass = isLiquidGlassAvailable && useLiquidGlass;
	const resolvedEffect = effect ?? GLASS_BUTTON_DEFAULT_EFFECT[size];
	const isBadge = size === "badge";
	const buttonWidth = GLASS_BUTTON_WIDTH_MAP[size];
	const buttonHeight = GLASS_BUTTON_HEIGHT_MAP[size];
	const borderRadius = GLASS_BUTTON_RADIUS_MAP[size];
	const scaleValue = GLASS_BUTTON_SCALE[size];

	const handleHapticPressIn = (event: GestureResponderEvent) => {
		if (haptics && !disabled) {
			const feedbackStyle = haptics === true ? undefined : (haptics as HapticFeedbackStyle);
			hapticsImpact(feedbackStyle);
		}
		onPressIn?.(event);
	};

	const { animatedStyle, isPressed, handlePressIn, handlePressOut } = usePressableAnimation(
		{
			isDisabled: disabled,
			scaleValue,
			duration: GLASS_BUTTON_ANIMATION_DURATION,
			disableScale: shouldUseLiquidGlass,
		},
		handleHapticPressIn,
		onPressOut ?? undefined
	);

	const glassStyle: ViewStyle = isBadge
		? { height: buttonHeight, borderRadius }
		: { width: buttonWidth as number, height: buttonHeight, borderRadius };

	const renderContent = () => {
		if (isTextContent(children)) {
			const textVariant = GLASS_BUTTON_TEXT_SIZE_MAP[size];
			return (
				<Text variant={textVariant} color="default" weight="medium">
					{children}
				</Text>
			);
		}
		return children;
	};

	const renderButtonContent = () => (
		<AnimatedPressable
			style={[
				shouldUseLiquidGlass ? styles.nativeButton : animatedStyle,
				shouldUseLiquidGlass ? glassStyle : undefined,
			]}
			className={cnx(
				"items-center justify-center rounded-full",
				isBadge && "flex-row gap-1 px-3",
				!shouldUseLiquidGlass && glassButtonVariants({ size, isDisabled: disabled })
			)}
			disabled={disabled}
			onPress={onPress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			accessibilityRole="button"
			accessibilityLabel={accessibilityLabel}
			accessibilityState={{ disabled }}
			{...props}>
			{!shouldUseLiquidGlass && (
				<PressableHighlight
					isPressed={isPressed}
					colorKey="glass-highlight"
					isDisabled={disabled}
				/>
			)}
			{renderContent()}
		</AnimatedPressable>
	);

	if (shouldUseLiquidGlass) {
		return (
			<LiquidGlassViewComponent
				className={className}
				style={[glassStyle, style]}
				interactive={!disabled}
				effect={resolvedEffect}
				colorScheme={colorScheme}
				tintColor={tintColor}>
				{renderButtonContent()}
			</LiquidGlassViewComponent>
		);
	}

	return (
		<View className={className} style={[glassStyle, GLASS_BUTTON_FALLBACK_SHADOW, style]}>
			{renderButtonContent()}
		</View>
	);
}

const styles = StyleSheet.create({
	nativeButton: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

GlassButton.displayName = "Aether.Buttons.GlassButton";
