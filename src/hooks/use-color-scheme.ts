import { useColorScheme as useNativewindColorScheme } from "nativewind";

/**
 * React hook for accessing the current color scheme (light/dark mode).
 *
 * Wraps NativeWind's useColorScheme and adds convenience boolean helpers
 * for checking the current theme state.
 *
 * @returns Object containing colorScheme, isDarkTheme, isLightTheme, and other NativeWind properties
 * @see {@link https://www.nativewind.dev/docs/api/use-color-scheme NativeWind useColorScheme}
 */
export const useColorScheme = () => {
	const { colorScheme, ...rest } = useNativewindColorScheme();

	const isDarkTheme = colorScheme === "dark";
	const isLightTheme = colorScheme === "light";

	return { ...rest, colorScheme, isDarkTheme, isLightTheme };
};
