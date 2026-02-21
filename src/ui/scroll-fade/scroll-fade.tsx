import { LinearGradient } from "expo-linear-gradient";
import type { ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import { withAlpha } from "../../utils";
import type { ScrollFadeProps } from "./types";

const DEFAULT_VERTICAL_SIZE = 120;
const DEFAULT_HORIZONTAL_SIZE = 24;

/**
 * Gradient fade overlay to indicate scrollable content.
 * Commonly placed at edges of scroll containers using absolute positioning.
 *
 * Uses the theme background color by default, with customizable intensity
 * and size. Supports both vertical (top/bottom) and horizontal (left/right)
 * scroll directions.
 *
 * @example
 * ```tsx
 * // Bottom fade for vertical scroll
 * <View className="relative flex-1">
 *   <ScrollView>...</ScrollView>
 *   <ScrollFade position="bottom" />
 * </View>
 *
 * // Horizontal scroll with left/right fades
 * <View className="relative">
 *   <ScrollView horizontal>...</ScrollView>
 *   <ScrollFade position="left" size={16} intensity={0.5} />
 *   <ScrollFade position="right" size={16} intensity={0.5} />
 * </View>
 * ```
 */
export function ScrollFade({
  position,
  size,
  color,
  intensity = 1,
  style: styleProp,
  ...rest
}: ScrollFadeProps) {
  const backgroundColor = useThemeColor("background");
  const baseColor = color ?? backgroundColor;

  const isVertical = position === "top" || position === "bottom";
  const finalSize = size ?? (isVertical ? DEFAULT_VERTICAL_SIZE : DEFAULT_HORIZONTAL_SIZE);

  const transparentColor = withAlpha(baseColor, 0);
  const solidColor = withAlpha(baseColor, intensity);

  const getColors = () => {
    switch (position) {
      case "top":
        return [
          solidColor,
          withAlpha(baseColor, intensity * 0.8),
          withAlpha(baseColor, intensity * 0.4),
          transparentColor,
        ] as const;
      case "bottom":
        return [
          transparentColor,
          withAlpha(baseColor, intensity * 0.4),
          withAlpha(baseColor, intensity * 0.8),
          solidColor,
        ] as const;
      case "left":
        return [solidColor, transparentColor] as const;
      case "right":
        return [transparentColor, solidColor] as const;
    }
  };

  const colors = getColors();

  const baseStyle: ViewStyle = {
    position: "absolute",
    ...(isVertical
      ? { left: 0, right: 0, [position]: 0, height: finalSize }
      : { top: 0, bottom: 0, [position]: 0, width: finalSize }),
  };

  if (isVertical) {
    return (
      <LinearGradient
        {...rest}
        colors={colors}
        locations={[0, 0.3, 0.7, 1]}
        style={[baseStyle, styleProp]}
        pointerEvents="none"
      />
    );
  }

  return (
    <LinearGradient
      {...rest}
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[baseStyle, styleProp]}
      pointerEvents="none"
    />
  );
}

ScrollFade.displayName = "Aether.ScrollFade.ScrollFade";
