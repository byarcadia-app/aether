import { colors, type ColorPaletteConfig } from "../theme/colors";
import { mergeColorPalette } from "../theme/utils";
import { useColorScheme } from "./use-color-scheme";

/**
 * Navigation theme shape compatible with React Navigation's Theme type.
 * Defined locally to avoid `@react-navigation/native` as a dependency.
 */
export interface NavigationTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  fonts: {
    regular: { fontFamily: string; fontWeight: "normal" };
    medium: { fontFamily: string; fontWeight: "500" };
    bold: { fontFamily: string; fontWeight: "bold" };
    heavy: { fontFamily: string; fontWeight: "900" };
  };
}

/**
 * React hook that returns a React Navigation compatible theme object
 * derived from Aether's color tokens.
 *
 * Does NOT require `@react-navigation/native` as a dependency —
 * returns a plain object matching the Theme shape. The consumer
 * passes it to their own `<ThemeProvider>`.
 *
 * @param colorPalette - Optional custom color overrides (same as AetherProvider)
 * @returns NavigationTheme object compatible with React Navigation's ThemeProvider
 *
 * @example
 * ```tsx
 * import { useNavigationTheme } from "@byarcadia/aether";
 * import { ThemeProvider } from "@react-navigation/native";
 *
 * export default function RootLayout() {
 *   const navigationTheme = useNavigationTheme();
 *
 *   return (
 *     <AetherProvider>
 *       <ThemeProvider value={navigationTheme}>
 *         <Stack />
 *       </ThemeProvider>
 *     </AetherProvider>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // With custom color palette
 * const navigationTheme = useNavigationTheme({
 *   light: { primary: "hsla(280, 70%, 58%, 1)" },
 *   dark: { primary: "hsla(280, 60%, 65%, 1)" },
 * });
 * ```
 */
export const useNavigationTheme = (colorPalette?: ColorPaletteConfig): NavigationTheme => {
  const { isDarkTheme } = useColorScheme();

  const palette = isDarkTheme
    ? mergeColorPalette(colors.dark, colorPalette?.dark)
    : mergeColorPalette(colors.light, colorPalette?.light);

  return {
    dark: isDarkTheme,
    colors: {
      primary: palette.primary,
      background: palette.background,
      card: palette.surface,
      text: palette.foreground,
      border: palette.border,
      notification: palette.danger,
    },
    fonts: {
      regular: { fontFamily: "Inter_400Regular", fontWeight: "normal" },
      medium: { fontFamily: "Inter_500Medium", fontWeight: "500" },
      bold: { fontFamily: "Inter_700Bold", fontWeight: "bold" },
      heavy: { fontFamily: "Inter_700Bold", fontWeight: "900" },
    },
  };
};
