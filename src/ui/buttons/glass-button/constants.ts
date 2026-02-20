import type { TextVariant } from "../../typography/text/types";
import type { GlassButtonEffect, GlassButtonSize } from "./types";

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
