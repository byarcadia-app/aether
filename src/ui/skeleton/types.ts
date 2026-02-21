import type { ViewProps } from "react-native";

/**
 * Props for the Skeleton component.
 */
export interface SkeletonProps extends Omit<ViewProps, "style"> {
  /**
   * Custom background color for the skeleton.
   * @default theme surface color
   */
  backgroundColor?: string;

  /**
   * Tailwind class names for sizing and shape.
   */
  className?: string;
}
