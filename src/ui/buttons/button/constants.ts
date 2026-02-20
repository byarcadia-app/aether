import type { ThemeColor } from "../../../theme/colors";
import type { TextColor, TextVariant } from "../../typography/text/types";
import type { ButtonSize, ButtonVariant } from "./types";

export const BUTTON_TEXT_COLOR_MAP: Record<ButtonVariant, TextColor> = {
	primary: "primary-foreground",
	secondary: "secondary-foreground",
	outline: "default",
	ghost: "default",
	destructive: "danger-foreground",
} as const;

export const HIGHLIGHT_COLOR_MAP: Record<ButtonVariant, ThemeColor> = {
	primary: "glass-highlight",
	secondary: "muted",
	outline: "muted",
	ghost: "surface",
	destructive: "glass-highlight",
} as const;

export const BUTTON_TEXT_SIZE_MAP: Record<ButtonSize, TextVariant> = {
	sm: "subhead",
	md: "body",
	lg: "headline",
} as const;

export const SPINNER_COLOR_MAP: Record<ButtonVariant, ThemeColor> = {
	primary: "primary-foreground",
	secondary: "secondary-foreground",
	outline: "foreground",
	ghost: "foreground",
	destructive: "danger-foreground",
} as const;

export const SHIMMER_COLOR_MAP: Record<ButtonVariant, ThemeColor> = {
	primary: "primary-foreground",
	secondary: "secondary-foreground",
	outline: "foreground",
	ghost: "foreground",
	destructive: "danger-foreground",
} as const;
