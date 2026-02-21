import { isLiquidGlassSupported, LiquidGlassView } from "@callstack/liquid-glass";
import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";
import { useColorScheme, useThemeColor } from "../../hooks";
import { cnx } from "../../utils";
import { withAlpha } from "../../utils/color";
import { VStack } from "../layout";
import { surfaceStyles } from "./styles";
import { generateSurfaceHierarchy } from "./utils";
import type { SurfaceProps } from "./types";

// Enable NativeWind className support for LiquidGlassView (native iOS component)
cssInterop(LiquidGlassView, { className: "style" });

/**
 * Surface component for creating layered backgrounds with visual hierarchy.
 *
 * Provides 4 levels of depth through progressive color adjustments,
 * with optional border and elevation for additional visual separation.
 *
 * Supports Liquid Glass variant (iOS 26+) with automatic fallback to solid.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Surface>
 *   <Text>Content on default background</Text>
 * </Surface>
 *
 * // With hierarchy level
 * <Surface level="secondary" className="p-4">
 *   <Text>One level deeper</Text>
 * </Surface>
 *
 * // With border and elevation
 * <Surface level="tertiary" isBordered isElevated className="p-6">
 *   <Text>Card-like surface</Text>
 * </Surface>
 *
 * // Glass variant (iOS 26+, auto-fallback)
 * <Surface variant="glass" className="p-4 mt-4">
 *   <Text>Glass effect or solid fallback</Text>
 * </Surface>
 *
 * // Glass with specific effect
 * <Surface variant="glass" glassEffect="clear" isBordered>
 *   <Text>Clear glass</Text>
 * </Surface>
 * ```
 */
export function Surface({
  level = "default",
  variant = "solid",
  glassEffect = "regular",
  fogDirection = "top",
  fogIntensity = 0.15,
  isBordered = false,
  isElevated = false,
  children,
  className,
  style,
  ...viewProps
}: SurfaceProps) {
  const { isDarkTheme, colorScheme } = useColorScheme();
  const baseSurface = useThemeColor("surface");
  const fogBaseColor = useThemeColor(isDarkTheme ? "background" : "foreground");

  // Generate surface hierarchy dynamically from base color
  const hierarchy = generateSurfaceHierarchy(baseSurface, isDarkTheme);

  // Get background color for current level
  const backgroundColor = hierarchy?.[level] ?? baseSurface;

  // Glass variant with automatic fallback
  if (variant === "glass" && isLiquidGlassSupported) {
    return (
      <LiquidGlassView
        className={className}
        effect={glassEffect}
        colorScheme={colorScheme}
        style={[{ borderRadius: 24 }, isElevated && surfaceStyles.elevated, style]}
        {...viewProps}
      >
        <VStack className={cnx(isBordered && "border border-border")}>{children}</VStack>
      </LiquidGlassView>
    );
  }

  // Fog variant
  if (variant === "fog") {
    const themeIntensity = isDarkTheme ? fogIntensity : fogIntensity * 0.4;
    const clampedIntensity = Math.max(0, Math.min(1, themeIntensity));

    // Skip gradient if intensity is 0
    if (clampedIntensity === 0) {
      return (
        <VStack
          className={cnx("rounded-3xl", isBordered && "border border-border", className)}
          style={[{ backgroundColor }, isElevated && surfaceStyles.elevated, style]}
          {...viewProps}
        >
          {children}
        </VStack>
      );
    }

    const fogColor = withAlpha(fogBaseColor, clampedIntensity);
    const transparentColor = withAlpha(fogBaseColor, 0);

    const getGradientColors = () => {
      switch (fogDirection) {
        case "top":
          return [fogColor, transparentColor] as const;
        case "bottom":
          return [transparentColor, fogColor] as const;
        case "both":
          return [fogColor, transparentColor, fogColor] as const;
      }
    };

    const gradientColors = getGradientColors();

    return (
      <VStack
        className={cnx(
          "overflow-hidden rounded-3xl",
          isBordered && "border border-border",
          className,
        )}
        style={[{ backgroundColor }, isElevated && surfaceStyles.elevated, style]}
        {...viewProps}
      >
        <LinearGradient
          colors={gradientColors}
          style={surfaceStyles.fogOverlay}
          pointerEvents="none"
        />
        <VStack style={surfaceStyles.content}>{children}</VStack>
      </VStack>
    );
  }

  // Solid variant (default) or glass fallback
  return (
    <VStack
      className={cnx("rounded-3xl", isBordered && "border border-border", className)}
      style={[{ backgroundColor }, isElevated && surfaceStyles.elevated, style]}
      {...viewProps}
    >
      {children}
    </VStack>
  );
}

Surface.displayName = "Aether.Surface.Surface";
