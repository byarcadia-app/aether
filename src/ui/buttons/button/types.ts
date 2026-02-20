import type React from "react";
import type { PressableProps } from "react-native";
import type { HapticFeedbackStyle } from "../../../utils";
import type { ThemeColor } from "../../../theme/colors";

/**
 * Available button visual variants.
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";

/**
 * Available button sizes following iOS touch target guidelines.
 * - sm: 36px min height (compact)
 * - md: 44px min height (default, iOS recommended)
 * - lg: 52px min height (prominent)
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Configuration for scale animation on press.
 */
export interface ButtonScaleAnimationConfig {
  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Scale value when pressed (0-1 range).
   * @default 0.98
   */
  scaleValue?: number;

  /**
   * Disable scale animation.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Configuration for highlight overlay animation on press.
 */
export interface ButtonHighlightAnimationConfig {
  /**
   * Override theme color for highlight.
   */
  color?: ThemeColor;

  /**
   * Maximum opacity when pressed.
   * @default 1
   */
  opacity?: number;

  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Disable highlight animation.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Combined animation configuration for button press effects.
 */
export interface ButtonAnimationConfig {
  scale?: ButtonScaleAnimationConfig;
  highlight?: ButtonHighlightAnimationConfig;
}

/**
 * Context passed to render function children.
 * Allows children to access button state for conditional rendering.
 */
export interface ButtonRenderContext {
  variant: ButtonVariant;
  size: ButtonSize;
  isDisabled: boolean;
  isLoading: boolean;
}

/**
 * Props for the Button component.
 */
export interface ButtonProps extends Omit<PressableProps, "disabled" | "children"> {
  /**
   * Visual style variant.
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size variant.
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Makes the button square (for icon-only buttons).
   * @default false
   */
  isIconOnly?: boolean;

  /**
   * Makes the button fully rounded (pill shape or circle).
   * @default false
   */
  isRounded?: boolean;

  /**
   * Disables the button and reduces opacity.
   * @default false
   */
  disabled?: boolean;

  /**
   * Shows loading spinner and disables interaction.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Custom animation configuration.
   */
  animationConfig?: ButtonAnimationConfig;

  /**
   * Enable haptic feedback on press.
   * - true: Light impact feedback (default style)
   * - HapticFeedbackStyle: Custom feedback style (light, medium, heavy, rigid, soft)
   * - false/undefined: No haptics
   * @default undefined
   */
  haptics?: boolean | HapticFeedbackStyle;

  /**
   * Enable continuous shimmer animation overlay.
   * Creates a light sweep effect across the button.
   * @default false
   */
  withShimmer?: boolean;

  /**
   * Button content.
   * - String: Auto-wrapped with ButtonLabel styling
   * - ReactNode: Rendered as-is
   * - Function: Receives context for conditional rendering
   */
  children: React.ReactNode | ((context: ButtonRenderContext) => React.ReactNode);
}
