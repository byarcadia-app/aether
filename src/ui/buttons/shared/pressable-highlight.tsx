import { StyleSheet } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { ThemeColor } from "../../../theme/colors";
import { useThemeColor, useAnimationDisabled } from "../../../hooks";

/**
 * Default animation duration in milliseconds.
 */
const ANIMATION_DURATION = 100;

/**
 * Default highlight opacity.
 */
const HIGHLIGHT_OPACITY = 1;

/**
 * Custom easing curve for smooth, iOS-like animations.
 */
const ANIMATION_EASING = Easing.bezier(0.25, 0.1, 0.25, 1);

export interface PressableHighlightProps {
  /**
   * SharedValue indicating pressed state (0 or 1).
   * Typically from usePressableAnimation hook.
   */
  isPressed: SharedValue<number>;

  /**
   * Theme color key for the highlight background.
   * Resolved via useThemeColor hook.
   */
  colorKey: ThemeColor;

  /**
   * Maximum opacity when pressed.
   * @default 1
   */
  opacity?: number;

  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Whether the highlight animation is disabled.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Overlay component that provides visual feedback on press.
 *
 * Renders as an absolute-positioned overlay that animates opacity
 * based on the pressed state. Uses theme colors for consistent styling.
 *
 * @example
 * ```tsx
 * const { isPressed } = usePressableAnimation()
 *
 * <AnimatedPressable>
 *   <PressableHighlight
 *     isPressed={isPressed}
 *     colorKey="glass-highlight"
 *   />
 *   {children}
 * </AnimatedPressable>
 * ```
 */
export function PressableHighlight({
  isPressed,
  colorKey,
  opacity = HIGHLIGHT_OPACITY,
  duration = ANIMATION_DURATION,
  isDisabled = false,
}: PressableHighlightProps) {
  const color = useThemeColor(colorKey);
  const isAnimationDisabled = useAnimationDisabled();
  
  // Bridge to worklet-readable value
  const animDisabledRef = useSharedValue(isAnimationDisabled);
  animDisabledRef.value = isAnimationDisabled; // sync on each render

  const animatedStyle = useAnimatedStyle(() => {
    if (isDisabled) {
      return { opacity: 0 };
    }
    
    if (animDisabledRef.value) {
      // Instant opacity — no withTiming, but highlight still appears on press
      return {
        backgroundColor: color,
        opacity: isPressed.value ? opacity : 0,
      };
    }

    return {
      backgroundColor: color,
      opacity: withTiming(isPressed.value ? opacity : 0, {
        duration,
        easing: ANIMATION_EASING,
      }),
    };
  });

  return <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, animatedStyle]} />;
}
