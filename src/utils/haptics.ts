import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

/**
 * Haptic feedback style options.
 * Matches expo-haptics ImpactFeedbackStyle values.
 */
export type HapticFeedbackStyle = "light" | "medium" | "heavy" | "rigid" | "soft";

const styleMap: Record<HapticFeedbackStyle, Haptics.ImpactFeedbackStyle> = {
  light: Haptics.ImpactFeedbackStyle.Light,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
  rigid: Haptics.ImpactFeedbackStyle.Rigid,
  soft: Haptics.ImpactFeedbackStyle.Soft,
};

/**
 * Triggers haptic impact feedback on iOS.
 * No-ops on non-iOS platforms.
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

  const impactStyle = feedbackStyle ? styleMap[feedbackStyle] : Haptics.ImpactFeedbackStyle.Light;

  Haptics.impactAsync(impactStyle);
}
