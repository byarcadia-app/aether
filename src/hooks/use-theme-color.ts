import { useUnstableNativeVariable } from "nativewind";
import { ThemeColor } from "../theme/colors";
import { hslaToRgba } from "../utils";

export interface UseThemeColorConfig {
	/**
	 * Output format for the color
	 * @default 'hsla'
	 */
	format?: "hsla" | "rgb";
}

/**
 * React hook for resolving theme color CSS variables to their actual color values.
 *
 * Takes a theme color key and resolves the corresponding CSS variable
 * (e.g., "primary" → "--color-primary") to its current color value based on the active theme.
 *
 * @param colorKey - Theme color key from the Umbra color palette
 * @param config - Optional configuration for color format
 * @returns Resolved color value in requested format or fallback to the colorKey if resolution fails
 *
 * @example
 * ```tsx
 * // Get HSLA color (default)
 * const primaryHsla = useThemeColor("primary");
 * // "hsla(245, 70%, 58%, 1)"
 *
 * // Get RGB color (for Swift native elements)
 * const primaryRgb = useThemeColor("primary", { format: "rgb" });
 * // "rgba(98, 71, 198, 1)"
 * ```
 */
export const useThemeColor = (colorKey: ThemeColor, config?: UseThemeColorConfig) => {
	const cssVariable = `--color-${colorKey}`;
	const resolvedColor = useUnstableNativeVariable(cssVariable);
	const color = resolvedColor ?? colorKey;

	// Convert to RGB if requested
	if (config?.format === "rgb") {
		const rgbaColor = hslaToRgba(color);
		return rgbaColor ?? color;
	}

	return color;
};
