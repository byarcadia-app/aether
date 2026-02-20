import type { VariantProps } from "tailwind-variants";
import type { BaseTextProps } from "../base-text";
import type { headingVariants } from "./heading";

type HeadingVariants = VariantProps<typeof headingVariants>;

export type HeadingVariant = HeadingVariants["variant"];
export type HeadingWeight = HeadingVariants["weight"];
export type HeadingColor = HeadingVariants["color"];

export type HeadingProps = Omit<BaseTextProps, keyof HeadingVariants> & HeadingVariants;
