import { vars } from "nativewind";
import type { ColorPaletteConfig, DarkColors, LightColors } from "./colors";
import { colors } from "./colors";

/**
 * Merges custom color overrides with default color palette.
 *
 * @param defaultColors - Default color palette (light or dark)
 * @param customColors - Custom color overrides (partial palette)
 * @returns Merged color palette with custom colors taking precedence
 *
 * @example
 * ```tsx
 * const merged = mergeColorPalette(colors.light, {
 *   primary: "hsla(280, 70%, 58%, 1)",
 *   success: "hsla(120, 55%, 50%, 1)",
 * });
 * ```
 */
export function mergeColorPalette<T extends LightColors | DarkColors>(
  defaultColors: T,
  customColors?: Partial<T>,
): T {
  return Object.assign({}, defaultColors, customColors) as T;
}

/**
 * Generates NativeWind vars() object from a color palette.
 *
 * Converts color palette to CSS variables with `--color-` prefix.
 * All color tokens are mapped to their corresponding CSS variable names.
 *
 * @param colorPalette - Complete color palette (light or dark)
 * @returns NativeWind vars() style object ready for View component
 *
 * @example
 * ```tsx
 * const vars = generateThemeVars(mergedColors);
 * <View style={[{ flex: 1 }, vars]}>
 *   <Text className="text-primary">Uses custom primary color</Text>
 * </View>
 * ```
 */
export function generateThemeVars(colorPalette: LightColors | DarkColors): ReturnType<typeof vars> {
  return vars({
    "--color-background": colorPalette.background,
    "--color-foreground": colorPalette.foreground,

    "--color-surface": colorPalette.surface,
    "--color-surface-foreground": colorPalette["surface-foreground"],
    "--color-overlay": colorPalette.overlay,
    "--color-overlay-foreground": colorPalette["overlay-foreground"],

    "--color-primary": colorPalette.primary,
    "--color-primary-foreground": colorPalette["primary-foreground"],
    "--color-secondary": colorPalette.secondary,
    "--color-secondary-foreground": colorPalette["secondary-foreground"],
    "--color-success": colorPalette.success,
    "--color-success-foreground": colorPalette["success-foreground"],
    "--color-warning": colorPalette.warning,
    "--color-warning-foreground": colorPalette["warning-foreground"],
    "--color-danger": colorPalette.danger,
    "--color-danger-foreground": colorPalette["danger-foreground"],
    "--color-info": colorPalette.info,
    "--color-info-foreground": colorPalette["info-foreground"],

    "--color-muted": colorPalette.muted,
    "--color-muted-foreground": colorPalette["muted-foreground"],
    "--color-border": colorPalette.border,
    "--color-input": colorPalette.input,
    "--color-ring": colorPalette.ring,

    "--color-glass": colorPalette.glass,
    "--color-glass-border": colorPalette["glass-border"],
    "--color-glass-highlight": colorPalette["glass-highlight"],
  });
}

/**
 * Creates NativeWind theme vars for both light and dark modes.
 *
 * Accepts optional custom color palettes and merges them with defaults.
 * Returns ready-to-use vars() objects for both modes.
 *
 * @param config - Optional color palette configuration
 * @returns Object with lightVars and darkVars
 *
 * @example
 * ```tsx
 * const { lightVars, darkVars } = createThemeVars({
 *   light: { primary: "hsla(280, 70%, 58%, 1)" },
 *   dark: { primary: "hsla(280, 60%, 65%, 1)" },
 * });
 * ```
 */
export function createThemeVars(config?: ColorPaletteConfig) {
  const lightColors = mergeColorPalette(colors.light, config?.light);
  const darkColors = mergeColorPalette(colors.dark, config?.dark);

  return {
    lightVars: generateThemeVars(lightColors),
    darkVars: generateThemeVars(darkColors),
  };
}
