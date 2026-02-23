import Animated from "react-native-reanimated";
import type { AnimationWrapperProps } from "./types";

/**
 * Convenience wrapper around `Animated.View` for declarative enter/exit/layout animations.
 *
 * Provides a semantic component name instead of using `Animated.View` directly,
 * making animation intent clearer in component trees.
 *
 * @example
 * ```tsx
 * import { AnimationWrapper } from "@byarcadia-app/aether";
 * import { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";
 *
 * <AnimationWrapper entering={FadeIn} exiting={FadeOut} layout={LinearTransition}>
 *   <Text>Animated content</Text>
 * </AnimationWrapper>
 * ```
 */
export function AnimationWrapper({
  children,
  entering,
  exiting,
  layout,
  ...props
}: AnimationWrapperProps) {
  return (
    <Animated.View entering={entering} exiting={exiting} layout={layout} {...props}>
      {children}
    </Animated.View>
  );
}

AnimationWrapper.displayName = "Aether.Animation.AnimationWrapper";
