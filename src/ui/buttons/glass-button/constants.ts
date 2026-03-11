import type { TextVariant, TextColor } from "../../typography/text/types";
import type { GlassButtonEffect, GlassButtonSize, GlassButtonVariant } from "./types";
import type { ThemeColor } from "../../../theme/colors";

export const GLASS_BUTTON_WIDTH_MAP: Record<GlassButtonSize, number | "auto"> = {
  icon: 44,
  fab: 56,
  badge: "auto",
} as const;

export const GLASS_BUTTON_HEIGHT_MAP: Record<GlassButtonSize, number> = {
  icon: 44,
  fab: 56,
  badge: 44,
} as const;

export const GLASS_BUTTON_RADIUS_MAP: Record<GlassButtonSize, number> = {
  icon: 22,
  fab: 28,
  badge: 22,
} as const;

export const GLASS_BUTTON_DEFAULT_EFFECT: Record<GlassButtonSize, GlassButtonEffect> = {
  icon: "regular",
  fab: "clear",
  badge: "regular",
} as const;

export const GLASS_BUTTON_SCALE: Record<GlassButtonSize, number> = {
  icon: 0.95,
  fab: 0.92,
  badge: 0.95,
} as const;

export const GLASS_BUTTON_ANIMATION_DURATION = 100;

export const GLASS_BUTTON_DISABLED_OPACITY = 0.5;

export const GLASS_BUTTON_TEXT_SIZE_MAP: Record<GlassButtonSize, TextVariant> = {
  icon: "footnote",
  fab: "subhead",
  badge: "footnote",
} as const;

/**
 * Text color mapping per variant for auto-wrapped string children.
 * Ensures readable contrast on colored backgrounds in fallback mode.
 */
export const GLASS_BUTTON_TEXT_COLOR_MAP: Record<GlassButtonVariant, TextColor> = {
  default: "default",
  primary: "primary-foreground",
  secondary: "secondary-foreground",
} as const;

/**
 * PressableHighlight colorKey mapping per variant.
 * Controls the highlight overlay color on press.
 */
export const GLASS_BUTTON_HIGHLIGHT_COLOR_MAP: Record<GlassButtonVariant, ThemeColor> = {
  default: "glass-highlight",
  primary: "primary-foreground",
  secondary: "secondary-foreground",
} as const;
