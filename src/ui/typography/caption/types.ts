import type { VariantProps } from "tailwind-variants";
import type { BaseTextProps } from "../base-text";
import type { captionVariants } from "./caption";

type CaptionVariants = VariantProps<typeof captionVariants>;

export type CaptionVariant = CaptionVariants["variant"];
export type CaptionWeight = CaptionVariants["weight"];
export type CaptionColor = CaptionVariants["color"];

export type CaptionProps = Omit<BaseTextProps, keyof CaptionVariants> & CaptionVariants;
