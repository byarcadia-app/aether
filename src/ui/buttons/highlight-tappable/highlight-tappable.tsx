import type { GestureResponderEvent } from "react-native";
import { cnx, hapticsImpact } from "../../../utils";
import { AnimatedPressable, PressableHighlight, usePressableAnimation } from "../shared";
import type { HighlightTappableProps } from "./types";

/**
 * HighlightTappable — A pressable component with highlight overlay, haptic feedback, and optional scale animation.
 *
 * Combines AnimatedPressable with PressableHighlight for a polished iOS-style button interaction.
 * Supports haptic feedback on press and customizable highlight color and opacity.
 *
 * @example
 * ```tsx
 * import { HighlightTappable } from "@arcadia/aether";
 *
 * <HighlightTappable
 *   onPress={() => console.log("pressed")}
 *   highlightColor="primary"
 *   haptics="medium"
 *   enableScale
 * >
 *   <Text>Tap me</Text>
 * </HighlightTappable>
 * ```
 */
export function HighlightTappable({
  children,
  onPress,
  disabled = false,
  className,
  highlightColor = "muted",
  haptics,
  enableScale = false,
  scaleValue = 0.98,
  highlightOpacity = 1,
  ...pressableProps
}: HighlightTappableProps) {
  const handleHapticPressIn = (_event: GestureResponderEvent) => {
    if (haptics && !disabled) {
      const style = haptics === true ? undefined : haptics;
      hapticsImpact(style);
    }
  };

  const { animatedStyle, isPressed, handlePressIn, handlePressOut } = usePressableAnimation(
    {
      isDisabled: disabled,
      disableScale: !enableScale,
      scaleValue,
    },
    handleHapticPressIn,
  );

  return (
    <AnimatedPressable
      {...pressableProps}
      style={animatedStyle}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      className={cnx("overflow-hidden rounded-sm", className)}
      accessibilityRole="button"
    >
      <PressableHighlight
        isPressed={isPressed}
        colorKey={highlightColor}
        opacity={highlightOpacity}
        isDisabled={disabled}
      />
      {children}
    </AnimatedPressable>
  );
}

HighlightTappable.displayName = "Aether.Buttons.HighlightTappable";
