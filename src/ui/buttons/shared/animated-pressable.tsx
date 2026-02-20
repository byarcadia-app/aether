import type { PressableProps } from "react-native";
import { Pressable } from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

/**
 * Pre-created animated Pressable component wrapper.
 *
 * Using Animated.createAnimatedComponent() allows the Pressable to accept
 * animated style props from Reanimated, enabling smooth press animations.
 *
 * This separation is critical for NativeWind compatibility:
 * - className → NativeWind static styles (colors, layout)
 * - style → Reanimated animated styles (transforms)
 */
export const AnimatedPressable = Animated.createAnimatedComponent(Pressable) as React.ComponentType<
  AnimatedProps<PressableProps>
>;
