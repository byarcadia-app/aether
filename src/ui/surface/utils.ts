import { adjustLightness } from "../../utils/color";
import type { SurfaceLevel } from "./types";

/**
 * Lightness adjustment step per hierarchy level (in percentage points)
 */
const LIGHTNESS_STEP = 3;

/**
 * Generate surface color hierarchy from a base surface color.
 *
 * Creates 4 levels of progressively deeper/lighter colors based on the theme:
 * - Light mode: progressively darker (e.g., 97% → 94% → 91% → 88%)
 * - Dark mode: progressively lighter (e.g., 18% → 21% → 24% → 27%)
 *
 * @param baseHsla - Base surface HSLA color string
 * @param isDark - Whether dark theme is active
 * @returns Record of surface levels to HSLA colors, or null if invalid input
 *
 * @example
 * ```ts
 * const hierarchy = generateSurfaceHierarchy("hsla(240, 4%, 97%, 1)", false);
 * // {
 * //   default: "hsla(240, 4%, 97%, 1)",
 * //   secondary: "hsla(240, 4%, 94%, 1)",
 * //   tertiary: "hsla(240, 4%, 91%, 1)",
 * //   quaternary: "hsla(240, 4%, 88%, 1)",
 * //   transparent: "transparent",
 * // }
 * ```
 */
export function generateSurfaceHierarchy(
  baseHsla: string,
  isDark: boolean,
): Record<SurfaceLevel, string> | null {
  // Direction: light mode gets darker (-), dark mode gets lighter (+)
  const direction = isDark ? 1 : -1;

  const secondary = adjustLightness(baseHsla, direction * LIGHTNESS_STEP);
  const tertiary = adjustLightness(baseHsla, direction * LIGHTNESS_STEP * 2);
  const quaternary = adjustLightness(baseHsla, direction * LIGHTNESS_STEP * 3);

  // If any adjustment fails, return null
  if (!secondary || !tertiary || !quaternary) {
    return null;
  }

  return {
    default: baseHsla,
    secondary,
    tertiary,
    quaternary,
    transparent: "transparent",
  };
}
