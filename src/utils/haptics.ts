import { Platform } from "react-native";

/**
 * Haptic feedback style options.
 * Matches expo-haptics ImpactFeedbackStyle values.
 */
export type HapticFeedbackStyle = "light" | "medium" | "heavy" | "rigid" | "soft";

// Runtime optional require() — expo-haptics may not be installed
// oxlint-disable-next-line @typescript-eslint/no-explicit-any
let Haptics: any = null;
try {
  Haptics = require("expo-haptics");
} catch {
  // expo-haptics not installed — haptics will be no-ops
}

/**
 * Triggers haptic impact feedback on iOS.
 * Safely no-ops if expo-haptics is not installed or on non-iOS platforms.
 *
 * @example
 * ```ts
 * // Light feedback (default)
 * hapticsImpact();
 *
 * // Medium feedback
 * hapticsImpact("medium");
 * ```
 */
export function hapticsImpact(feedbackStyle?: HapticFeedbackStyle): void {
  if (Platform.OS !== "ios") return;
  if (!Haptics) return;

  const styleMap: Record<HapticFeedbackStyle, string> = {
    light: "Light",
    medium: "Medium",
    heavy: "Heavy",
    rigid: "Rigid",
    soft: "Soft",
  };

  const impactStyle = feedbackStyle
    ? Haptics.ImpactFeedbackStyle[styleMap[feedbackStyle]]
    : Haptics.ImpactFeedbackStyle.Light;

  Haptics.impactAsync(impactStyle);
}
