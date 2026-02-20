import type { TextProps } from "react-native";

/**
 * Global text provider configuration props.
 *
 * Controls how text responds to iOS accessibility settings and layout constraints.
 * Works with your Tailwind classes (text-sm, text-lg) to provide both design consistency and accessibility.
 *
 * Final text size = (Tailwind rem) × (iOS accessibility multiplier)
 */
export type TextProviderProps = {
  /**
   * Whether fonts scale with iOS "Larger Text" accessibility settings.
   *
   * **Recommended:** `true` (respect user preferences)
   *
   * **Set `false` only for:** badges, counters, icon labels, logos
   *
   * @default true
   */
  allowFontScaling?: TextProps["allowFontScaling"];

  /**
   * Maximum text scaling multiplier. Prevents text from breaking layouts.
   *
   * **Recommended values:**
   * - `1.3` - UI elements (buttons, tabs, navigation)
   * - `1.5` - **Default** - general UI, cards, titles
   * - `2.0` - Long-form content (articles)
   *
   * @default undefined
   */
  maxFontSizeMultiplier?: TextProps["maxFontSizeMultiplier"];

  /**
   * Auto-shrinks font to fit container. Requires `numberOfLines`.
   *
   * **Use cases:** badges, timers, dynamic button labels
   *
   * **NOT recommended for global config** - use per component only
   *
   * @default false
   */
  adjustsFontSizeToFit?: TextProps["adjustsFontSizeToFit"];

  /**
   * Minimum scale when `adjustsFontSizeToFit` is enabled. iOS only.
   *
   * **Values:** `0.5` (badges), `0.7` (labels), never below `0.5`
   *
   * **NOT recommended for global config** - use per component only
   *
   * @default undefined
   */
  minimumFontScale?: TextProps["minimumFontScale"];
};
