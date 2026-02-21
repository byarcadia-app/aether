import type { ViewProps } from "react-native";
import type { AnimatedProps } from "react-native-reanimated";

/**
 * Props for the AnimationWrapper component.
 *
 * Extends all Animated.View props including `entering`, `exiting`,
 * and `layout` animation configurations from react-native-reanimated.
 */
export type AnimationWrapperProps = AnimatedProps<ViewProps>;
