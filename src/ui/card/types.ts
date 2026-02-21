import type { GestureResponderEvent, ViewProps } from "react-native";
import type { HapticFeedbackStyle } from "../../utils";
import type { FogDirection, GlassEffect, SurfaceLevel, SurfaceVariant } from "../surface";
import type { HeadingProps } from "../typography/heading";
import type { TextProps } from "../typography/text";

// ============================================================================
// Animation Config
// ============================================================================

export interface CardScaleAnimationConfig {
  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Scale value when pressed (0-1 range, where 1 is no scale).
   * @default 0.98
   */
  scaleValue?: number;
}

export interface CardHighlightAnimationConfig {
  /**
   * Animation duration in milliseconds.
   * @default 100
   */
  duration?: number;

  /**
   * Maximum opacity when pressed.
   * @default 1
   */
  opacity?: number;

  /**
   * Whether to disable the highlight animation.
   * @default false
   */
  isDisabled?: boolean;
}

export interface CardAnimationConfig {
  scale?: CardScaleAnimationConfig;
  highlight?: CardHighlightAnimationConfig;
}

// ============================================================================
// Card Props (Discriminated Union)
// ============================================================================

interface CardBaseProps extends ViewProps {
  /**
   * Background level in visual hierarchy
   * @default 'default'
   */
  level?: SurfaceLevel;

  /**
   * Surface variant
   * - 'solid' - Standard opaque background (default)
   * - 'glass' - Liquid Glass effect (iOS 26+, falls back to solid)
   * @default 'solid'
   */
  variant?: SurfaceVariant;

  /**
   * Glass effect type (only when variant="glass")
   * - 'regular' - Frosted blur effect
   * - 'clear' - More transparent
   * @default 'regular'
   */
  glassEffect?: GlassEffect;

  /**
   * Fog gradient direction (only when variant="fog")
   * - 'top' - Darker at top, fading downward
   * - 'bottom' - Darker at bottom, fading upward
   * - 'both' - Darker at both edges, lighter in middle
   * @default 'top'
   */
  fogDirection?: FogDirection;

  /**
   * Fog gradient intensity (only when variant="fog")
   * Controls gradient opacity from 0 (invisible) to 1 (full opacity)
   * @default 0.15
   */
  fogIntensity?: number;

  /**
   * Whether to show a border
   * @default false
   */
  isBordered?: boolean;

  /**
   * Whether to apply elevation shadow
   * @default false
   */
  isElevated?: boolean;

  children?: React.ReactNode;
  className?: string;
}

/**
 * Static Card props - no interaction
 */
interface CardStaticProps extends CardBaseProps {
  onPress?: never;
  onLongPress?: never;
  onPressIn?: never;
  onPressOut?: never;
  disabled?: never;
  haptics?: never;
  animationConfig?: never;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Pressable Card props - requires onPress
 */
interface CardPressableProps extends CardBaseProps {
  /**
   * Callback when card is pressed. Required for pressable variant.
   */
  onPress: () => void;

  /**
   * Callback for long press
   */
  onLongPress?: () => void;

  /**
   * Callback when press begins
   */
  onPressIn?: (event: GestureResponderEvent) => void;

  /**
   * Callback when press ends
   */
  onPressOut?: (event: GestureResponderEvent) => void;

  /**
   * Whether interactions are disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Enable haptic feedback on press.
   * true = Light impact, or specify a style.
   */
  haptics?: boolean | HapticFeedbackStyle;

  /**
   * Animation configuration
   */
  animationConfig?: CardAnimationConfig;

  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Card component props - discriminated union of static and pressable variants.
 * Static cards cannot have press handlers. Pressable cards require onPress.
 */
export type CardProps = CardStaticProps | CardPressableProps;

// ============================================================================
// Compound Component Props
// ============================================================================

export interface CardHeaderProps extends ViewProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardTitleProps extends Omit<HeadingProps, "children"> {
  children?: React.ReactNode;
}

export interface CardDescriptionProps extends Omit<TextProps, "children"> {
  children?: React.ReactNode;
}

export interface CardBodyProps extends ViewProps {
  /**
   * Whether to show a top border separator
   * @default false
   */
  isBordered?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export type CardImageAspectRatio = "square" | "video" | "portrait" | "auto";
export type CardImagePosition = "top" | "middle";

export interface CardImageProps extends ViewProps {
  /**
   * Aspect ratio constraint
   * @default 'video'
   */
  aspectRatio?: CardImageAspectRatio;

  /**
   * Position in card - 'top' adds rounded corners
   * @default 'top'
   */
  position?: CardImagePosition;

  children?: React.ReactNode;
  className?: string;
}

export type CardFooterJustify = "start" | "center" | "end" | "between";

export interface CardFooterProps extends ViewProps {
  /**
   * Whether to show a top border separator
   * @default false
   */
  isBordered?: boolean;

  /**
   * Horizontal alignment of footer content
   * @default 'start'
   */
  justify?: CardFooterJustify;

  children?: React.ReactNode;
  className?: string;
}
