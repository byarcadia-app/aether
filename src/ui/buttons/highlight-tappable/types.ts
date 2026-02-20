import type { PressableProps } from "react-native";
import type { HapticFeedbackStyle } from "../../../utils";
import type { ThemeColor } from "../../../theme/colors";

type OmittedPressableProps =
  | "onPressIn"
  | "onPressOut"
  | "accessibilityRole"
  | "style"
  | "children"
  | "disabled";

/**
 * Props for the HighlightTappable pressable component.
 *
 * Extends Pressable with highlight overlay, haptic feedback, and scale animation options.
 */
export interface HighlightTappableProps extends Omit<PressableProps, OmittedPressableProps> {
  /** Content to render inside the pressable */
  children: React.ReactNode;

  /** Whether the button is disabled */
  disabled?: boolean;

  /** Tailwind classes to apply to the container */
  className?: string;

  /** Theme color for the highlight overlay */
  highlightColor?: ThemeColor;

  /** Enable haptic feedback on press. `true` = light feedback, or specify a style */
  haptics?: boolean | HapticFeedbackStyle;

  /** Enable scale animation on press */
  enableScale?: boolean;

  /** Scale value when pressed (0-1) */
  scaleValue?: number;

  /** Opacity of the highlight overlay (0-1) */
  highlightOpacity?: number;
}
