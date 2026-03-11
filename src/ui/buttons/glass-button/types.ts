import type { ColorValue, PressableProps, ViewStyle } from "react-native";

import type { HapticFeedbackStyle } from "../../../utils";

// ============================================================================
// Size & Effect Types
// ============================================================================

/**
 * Size variants for GlassButton following Apple HIG touch targets.
 * - icon: 44x44 pt - Standard back/close buttons (Apple minimum touch target)
 * - fab: 56x56 pt - Floating Action Button for primary actions
 * - badge: 44pt height, auto width - Pill-shaped badge for icon + text (e.g., streak counter)
 */
export type GlassButtonSize = "icon" | "fab" | "badge";

/**
 * Liquid Glass effect modes from @callstack/liquid-glass.
 * - regular: Standard frosted blur effect (default for icon size)
 * - clear: More transparent effect (default for fab size)
 */
export type GlassButtonEffect = "regular" | "clear";

/**
 * Color scheme options for the liquid glass effect.
 * - system: Automatically adapts to device light/dark mode (recommended)
 * - light: Force light appearance
 * - dark: Force dark appearance
 */
export type GlassButtonColorScheme = "light" | "dark" | "system";

/**
 * Visual variant for GlassButton.
 * - default: Neutral glass appearance
 * - primary: Bold primary-colored glass for prominent actions
 * - secondary: Subtle secondary-colored glass
 */
export type GlassButtonVariant = "default" | "primary" | "secondary";

// ============================================================================
// Props Interface
// ============================================================================

/**
 * Props for the GlassButton component.
 * A specialized button designed for Liquid Glass effects on iOS 26+.
 */
export interface GlassButtonProps extends Omit<PressableProps, "disabled" | "children" | "style"> {
  /**
   * Size variant determining dimensions and default behavior.
   * - "icon": 44x44 pt for back/close buttons
   * - "fab": 56x56 pt for floating action buttons
   * @default "icon"
   */
  size?: GlassButtonSize;

  /**
   * Visual variant for the button.
   * - "default": Neutral glass appearance
   * - "primary": Bold primary-colored glass for prominent actions
   * - "secondary": Subtle secondary-colored glass
   * @default "default"
   */
  variant?: GlassButtonVariant;

  /**
   * Liquid glass material variant.
   * When not specified, defaults based on size:
   * - icon: "regular" (frosted blur)
   * - fab: "clear" (more transparent)
   */
  effect?: GlassButtonEffect;

  /**
   * Color scheme for the glass effect.
   * @default "system"
   */
  colorScheme?: GlassButtonColorScheme;

  /**
   * Optional tint color overlay for branding.
   * Applied as a subtle overlay on the glass effect.
   * Use sparingly - 10-20% opacity recommended.
   */
  tintColor?: ColorValue;

  /**
   * Disables the button and reduces opacity.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to use native Liquid Glass effect (iOS 26+).
   * Set to false to force fallback glass styling.
   * @default true
   */
  useLiquidGlass?: boolean;

  /**
   * Button content - IconSymbol or text string.
   * Text strings are auto-wrapped with appropriate styling based on size.
   *
   * For icon size: 20-24 pt icons recommended, or short text (footnote 13pt)
   * For fab size: 24-28 pt icons recommended, or text like "+" (subhead 15pt)
   *
   * @example
   * ```tsx
   * // With icon
   * <GlassButton size="icon">
   *   <IconSymbol name="chevron.left" size={22} colorScheme="foreground" />
   * </GlassButton>
   *
   * // With text (auto-wrapped)
   * <GlassButton size="fab">+</GlassButton>
   * ```
   */
  children: React.ReactNode;

  /**
   * Accessibility label (required for icon buttons).
   * Examples: "Go back", "Close", "Add new entry"
   */
  accessibilityLabel: string;

  /**
   * Enable haptic feedback on press.
   * - true: Light impact feedback (default style)
   * - HapticFeedbackStyle: Custom feedback style
   * - false/undefined: No haptics
   * @default true (for better tactile feedback with glass buttons)
   */
  haptics?: boolean | HapticFeedbackStyle;

  /**
   * Style for the button container (outer wrapper).
   * Use for positioning, margins, etc.
   * Note: Width and height are controlled by `size` prop.
   */
  style?: ViewStyle;

  /**
   * NativeWind className for the button container (outer wrapper).
   * Supports Tailwind classes for positioning, margins, etc.
   * Works with both LiquidGlassView (iOS 26+) and fallback View.
   *
   * @example
   * ```tsx
   * <GlassButton className="mt-4 absolute top-4 left-4" ... />
   * ```
   */
  className?: string;
}
