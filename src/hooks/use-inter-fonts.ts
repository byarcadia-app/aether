import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

/**
 * React hook for loading Inter font family.
 *
 * Loads 4 variants of Inter font:
 * - Inter_400Regular (font-inter)
 * - Inter_500Medium (font-interMedium)
 * - Inter_600SemiBold (font-interSemiBold)
 * - Inter_700Bold (font-interBold)
 *
 * @returns Object with fontsLoaded boolean and optional fontError
 *
 * @example
 * ```tsx
 * const { fontsLoaded, fontError } = useInterFonts();
 *
 * if (!fontsLoaded && !fontError) {
 *   return null; // or splash screen
 * }
 * ```
 */
export const useInterFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return { fontsLoaded, fontError };
};
