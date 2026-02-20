// import {
// 	DarkTheme,
// 	DefaultTheme,
// 	ThemeProvider as RNThemeProvider,
// } from "@react-navigation/native";
import type React from "react";
import { View } from "react-native";

import { ColorPaletteConfig, darkNativewindVars, lightNativewindVars } from "../../theme/colors";
import { createThemeVars } from "../../theme/utils";
import { useColorScheme } from "../../hooks";

export interface ThemeProviderProps {
	children: React.ReactNode;
	/**
	 * Optional custom color palette configuration.
	 *
	 * Allows overriding default colors for both light and dark modes independently.
	 * All color properties are optional - only specified colors will be overridden.
	 *
	 * @example
	 * ```tsx
	 * <ThemeProvider
	 *   colorPalette={{
	 *     light: {
	 *       primary: "hsla(280, 70%, 58%, 1)",
	 *       success: "hsla(120, 55%, 50%, 1)",
	 *     },
	 *     dark: {
	 *       primary: "hsla(280, 60%, 65%, 1)",
	 *     },
	 *   }}
	 * >
	 *   <App />
	 * </ThemeProvider>
	 * ```
	 */
	colorPalette?: ColorPaletteConfig;
}

/**
 * Theme provider for Umbra design system.
 *
 * Provides both:
 * - NativeWind theme variables (via vars() API)
 * - React Navigation theme (for navigation components)
 *
 * Automatically detects system color scheme and applies appropriate theme.
 * Supports custom color palette overrides via the `colorPalette` prop.
 *
 * @example
 * ```tsx
 * // Default theme
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * // Custom color palette
 * <ThemeProvider
 *   colorPalette={{
 *     light: { primary: "hsla(280, 70%, 58%, 1)" },
 *     dark: { primary: "hsla(280, 60%, 65%, 1)" },
 *   }}
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({ children, colorPalette }: ThemeProviderProps) => {
	const { isDarkTheme } = useColorScheme();

	// Generate custom theme vars if colorPalette is provided
	const customThemeVars = colorPalette ? createThemeVars(colorPalette) : null;

	// Use custom vars if provided, otherwise use defaults
	const nativewindTheme = customThemeVars
		? isDarkTheme
			? customThemeVars.darkVars
			: customThemeVars.lightVars
		: isDarkTheme
			? darkNativewindVars
			: lightNativewindVars;

	// const navigationTheme = isDarkTheme ? DarkTheme : DefaultTheme;

	return (
		<View style={[{ flex: 1 }, nativewindTheme]}>
      {/*<RNThemeProvider value={navigationTheme}>*/}
        {children}
      {/*</RNThemeProvider>*/}
		</View>
	);
};
