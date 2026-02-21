import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useThemeColor } from "../../hooks";
import { cnx } from "../../utils";
import type { SkeletonProps } from "./types";

const ANIMATION_DURATION = 750;

/**
 * Skeleton loading placeholder with pulsing opacity animation.
 *
 * Uses the theme surface color by default. Size and shape are controlled
 * entirely through Tailwind classes.
 *
 * @example
 * ```tsx
 * // Basic skeleton placeholder
 * <Skeleton className="h-32 w-full rounded-2xl" />
 *
 * // Text-like skeleton rows
 * <VStack className="gap-2">
 *   <Skeleton className="h-4 w-full rounded-lg" />
 *   <Skeleton className="h-4 w-3/4 rounded-lg" />
 *   <Skeleton className="h-4 w-1/2 rounded-lg" />
 * </VStack>
 *
 * // Avatar placeholder
 * <Skeleton className="h-12 w-12 rounded-full" />
 * ```
 */
export function Skeleton({ backgroundColor, className, ...props }: SkeletonProps) {
  const surfaceColor = useThemeColor("surface");
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.5, { duration: ANIMATION_DURATION }),
        withTiming(1, { duration: ANIMATION_DURATION }),
      ),
      -1,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: backgroundColor ?? surfaceColor,
  }));

  return (
    <Animated.View style={animatedStyle} className={cnx("rounded-2xl", className)} {...props} />
  );
}

Skeleton.displayName = "Aether.Skeleton.Skeleton";
