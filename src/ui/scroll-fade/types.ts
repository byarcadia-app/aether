import type { LinearGradientProps } from "expo-linear-gradient";

/**
 * Position of the fade gradient relative to the scroll container.
 */
export type ScrollFadePosition = "top" | "bottom" | "left" | "right";

/**
 * Props for the ScrollFade component.
 */
export interface ScrollFadeProps extends Omit<
  LinearGradientProps,
  "colors" | "locations" | "start" | "end"
> {
  /**
   * Position of the gradient fade.
   * - `top` / `bottom` for vertical scroll containers
   * - `left` / `right` for horizontal scroll containers
   */
  position: ScrollFadePosition;

  /**
   * Size of the gradient in points.
   * For vertical: height. For horizontal: width.
   * @default 120 (vertical) or 24 (horizontal)
   */
  size?: number;

  /**
   * Custom base color for the gradient.
   * @default theme background color
   */
  color?: string;

  /**
   * Opacity intensity of the fade (0-1).
   * @default 1
   */
  intensity?: number;
}
