import type { ThemeColor } from "../../theme/colors";
import type { SurfaceLevel } from "../surface";
import type { CardFooterJustify, CardImageAspectRatio } from "./types";

export const CARD_SPACING = {
  header: "p-4 pb-2",
  body: "p-4",
  footer: "p-4 pt-2",
} as const;

export const CARD_LAYOUT = {
  header: "flex flex-col",
  body: "flex flex-col",
  footer: "flex flex-row gap-2",
} as const;

export const CARD_HIGHLIGHT_COLOR_MAP: Record<SurfaceLevel, ThemeColor> = {
  default: "glass-highlight",
  secondary: "muted",
  tertiary: "muted",
  quaternary: "muted",
  transparent: "glass-highlight",
} as const;

export const IMAGE_ASPECT_RATIOS: Record<CardImageAspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  auto: "",
} as const;

export const FOOTER_JUSTIFY_CLASSES: Record<CardFooterJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;
