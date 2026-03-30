import { useEffect } from "react";
import type { GestureResponderEvent } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAnimationDisabled } from "../../../hooks";

// ============================================================================
// Types
// ============================================================================

/**
 * Configuration for the pressable scale animation.
 */
export interface UsePressableAnimationConfig {
  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Scale value when pressed (0-1 range, where 1 is no scale).
   * @default 0.98
   */
  scaleValue?: number;

  /**
   * Whether the animation is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether to disable only the scale animation
   * (useful when you want highlight but no scale).
   * @default false
   */
  disableScale?: boolean;
}

/**
 * Return value from usePressableAnimation hook.
 */
export interface UsePressableAnimationReturn {
  /**
   * SharedValue indicating pressed state (0 or 1).
   * Can be used by PressableHighlight or other subscribers.
   */
  isPressed: SharedValue<number>;

  /**
   * Animated style object containing the scale transform.
   * Apply this to the style prop of AnimatedPressable.
   */
  animatedStyle: { transform: { scale: number }[] };

  /**
   * Handler for onPressIn event.
   * Triggers the scale-down animation.
   */
  handlePressIn: (event: GestureResponderEvent) => void;

  /**
   * Handler for onPressOut event.
   * Triggers the scale-up animation.
   */
  handlePressOut: (event: GestureResponderEvent) => void;
}

// ============================================================================
// Constants
// ============================================================================

/**
 * Default animation duration in milliseconds.
 */
const ANIMATION_DURATION = 100;

/**
 * Default scale value when pressed.
 * 0.98 = 2% reduction for subtle but noticeable feedback.
 */
const SCALE_VALUE = 0.98;

/**
 * Custom easing curve for smooth, iOS-like animations.
 * Bezier curve (0.25, 0.1, 0.25, 1) provides natural feel.
 */
const ANIMATION_EASING = Easing.bezier(0.25, 0.1, 0.25, 1);

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook for managing pressable scale animations.
 *
 * Provides smooth scale animation on press with configurable duration and scale value.
 * Returns handlers and animated style to be applied to AnimatedPressable.
 *
 * @example
 * ```tsx
 * const { animatedStyle, isPressed, handlePressIn, handlePressOut } =
 *   usePressableAnimation({ duration: 100, scaleValue: 0.98 })
 *
 * <AnimatedPressable
 *   style={animatedStyle}
 *   onPressIn={handlePressIn}
 *   onPressOut={handlePressOut}
 * >
 *   <PressableHighlight isPressed={isPressed} />
 *   {children}
 * </AnimatedPressable>
 * ```
 */
export function usePressableAnimation(
  config?: UsePressableAnimationConfig,
  onPressIn?: (event: GestureResponderEvent) => void,
  onPressOut?: (event: GestureResponderEvent) => void,
): UsePressableAnimationReturn {
  const duration = config?.duration ?? ANIMATION_DURATION;
  const scaleValue = config?.scaleValue ?? SCALE_VALUE;
  const isDisabled = config?.isDisabled ?? false;
  const disableScale = config?.disableScale ?? false;
  const isAnimationDisabled = useAnimationDisabled();

  // Bridge animation-disabled state to worklet-readable shared value
  const animDisabledRef = useSharedValue(isAnimationDisabled);
  useEffect(() => {
    animDisabledRef.value = isAnimationDisabled;
  }, [isAnimationDisabled]);

  const scale = useSharedValue(0);
  const isPressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (isDisabled || disableScale || animDisabledRef.value) {
      return { transform: [{ scale: 1 }] };
    }

    return {
      transform: [
        {
          scale: interpolate(scale.value, [0, 1], [1, scaleValue]),
        },
      ],
    };
  });

  const handlePressIn = (event: GestureResponderEvent) => {
    if (!isDisabled) {
      isPressed.value = 1;
      if (!isAnimationDisabled) {
        scale.value = withTiming(1, { duration, easing: ANIMATION_EASING });
      } else {
        scale.value = 1;
      }
    }
    onPressIn?.(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    if (!isDisabled) {
      isPressed.value = 0;
      if (!isAnimationDisabled) {
        scale.value = withTiming(0, { duration, easing: ANIMATION_EASING });
      } else {
        scale.value = 0;
      }
    }
    onPressOut?.(event);
  };

  return {
    isPressed,
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
}
