import type { StyleProp, ViewStyle } from "react-native";
import type { ThemeColor } from "../../theme/colors";

export type ColorScheme = ThemeColor;

export interface BaseIconProps {
  /** @default 24 */
  size?: number;
  colorScheme?: ColorScheme;
  className?: string;
  style?: StyleProp<ViewStyle>;
}
