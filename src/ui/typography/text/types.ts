import type { VariantProps } from "tailwind-variants";
import type { BaseTextProps } from "../base-text";
import type { textVariants } from "./text";

type TextVariants = VariantProps<typeof textVariants>;

export type TextVariant = TextVariants["variant"];
export type TextWeight = TextVariants["weight"];
export type TextColor = TextVariants["color"];

export type TextProps = Omit<BaseTextProps, keyof TextVariants> & TextVariants;
