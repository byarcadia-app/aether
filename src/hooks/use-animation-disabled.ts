import { use } from "react";
import { AnimationContext } from "../providers/animation-provider/use-animation-disabled";

/**
 * Returns whether animations are globally disabled.
 *
 * Animations are disabled when:
 * - `disableAnimations` prop on `AetherProvider` is `true`, OR
 * - The user has enabled "Reduce Motion" in iOS accessibility settings.
 *
 * Use this hook in any animated component to skip transitions when needed.
 *
 * @example
 * ```tsx
 * function MyAnimatedComponent() {
 *   const isAnimationDisabled = useAnimationDisabled();
 *
 *   const animatedStyle = useAnimatedStyle(() => {
 *     if (isAnimationDisabled) {
 *       return { transform: [{ scale: 1 }] };
 *     }
 *     return {
 *       transform: [{ scale: withTiming(targetScale, { duration: 100 }) }],
 *     };
 *   });
 *
 *   return <Animated.View style={animatedStyle} />;
 * }
 * ```
 */
export function useAnimationDisabled(): boolean {
  const { isAnimationDisabled } = use(AnimationContext);
  return isAnimationDisabled;
}
