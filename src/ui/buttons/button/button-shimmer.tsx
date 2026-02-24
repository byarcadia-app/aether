import type { FC } from "react";
import { View } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useAnimationDisabled, useThemeColor } from "../../../hooks";
import { SHIMMER_COLOR_MAP } from "./constants";
import type { ButtonVariant } from "./types";

const BASE_DURATION = 1600;
const REFERENCE_WIDTH = 200;
const CYCLE_DELAY = 2500;

export interface ButtonShimmerProps {
  containerWidth: SharedValue<number>;
  variant: ButtonVariant;
}

export const ButtonShimmer: FC<ButtonShimmerProps> = ({ containerWidth, variant }) => {
  const isAnimationDisabled = useAnimationDisabled();
  const shimmerWidth = useSharedValue(0);
  const shimmerColor = useThemeColor(SHIMMER_COLOR_MAP[variant]);

  const animatedStyle = useAnimatedStyle(() => {
    if (shimmerWidth.value === 0) {
      return { opacity: 0 };
    }

    const duration = BASE_DURATION * (containerWidth.value / REFERENCE_WIDTH);

    return {
      opacity: 1,
      transform: [
        {
          translateX: withRepeat(
            withSequence(
              withDelay(CYCLE_DELAY, withTiming(-shimmerWidth.value * 1.2, { duration: 0 })),
              withTiming(containerWidth.value * 1.2, {
                duration: Math.max(duration, BASE_DURATION),
                easing: Easing.in(Easing.ease),
              }),
            ),
            -1,
            false,
          ),
        },
        { rotate: "30deg" },
      ],
    };
  });

  if (isAnimationDisabled) return null;

  return (
    <Animated.View
      pointerEvents="none"
      className="absolute -top-[200%] -bottom-[200%] left-0 flex-row"
      style={animatedStyle}
      onLayout={(e) => shimmerWidth.set(e.nativeEvent.layout.width)}
    >
      <View className="w-6" style={{ backgroundColor: shimmerColor, opacity: 0.03 }} />
      <View className="w-5" style={{ backgroundColor: shimmerColor, opacity: 0.06 }} />
      <View className="w-6" style={{ backgroundColor: shimmerColor, opacity: 0.03 }} />
    </Animated.View>
  );
};

ButtonShimmer.displayName = "Aether.Buttons.ButtonShimmer";
