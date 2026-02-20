import { tv } from "tailwind-variants";
import { BaseText } from "../base-text";
import type { HeadingProps } from "./types";

/**
 * Heading component following iOS Typography System
 *
 * Maps to iOS Text Styles:
 * - Level 1: Large Title (34pt Bold)
 * - Level 2: Title 1 (28pt Bold)
 * - Level 3: Title 2 (22pt Bold)
 * - Level 4: Title 3 (20pt Semibold)
 *
 * Color Variants:
 * - default | primary | secondary | muted | success | warning | danger | info | inherit
 *
 * @see https://developer.apple.com/design/human-interface-guidelines/typography
 *
 * @example
 * ```tsx
 * <Heading variant={1}>Page Title</Heading>
 * <Heading variant={2} color="primary">Brand Heading</Heading>
 * <Heading variant={3} color="muted">Subtle Heading</Heading>
 * ```
 */

export const headingVariants = tv({
  variants: {
    variant: {
      1: "text-[34px] leading-tight", // 34pt - Large Title
      2: "text-[28px] leading-tight", // 28pt - Title 1
      3: "text-[22px] leading-snug", // 22pt - Title 2
      4: "text-[20px] leading-snug", // 20pt - Title 3
    },
    weight: {
      regular: "font-inter",
      medium: "font-interMedium",
      semibold: "font-interSemiBold",
      bold: "font-interBold",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
      info: "text-info",
      inherit: "text-inherit",
    },
  },
  compoundVariants: [
    // Default weights per iOS spec
    { variant: 1, weight: undefined, class: "font-interBold" },
    { variant: 2, weight: undefined, class: "font-interBold" },
    { variant: 3, weight: undefined, class: "font-interBold" },
    { variant: 4, weight: undefined, class: "font-interSemiBold" },
  ],
  defaultVariants: {
    variant: 1,
    color: "default",
  },
});

export function Heading({ variant = 1, weight, color, children, ...props }: HeadingProps) {
  return (
    <BaseText
      {...props}
      accessibilityRole="header"
      className={headingVariants({
        variant,
        weight,
        color,
        className: props.className,
      })}
    >
      {children}
    </BaseText>
  );
}

Heading.displayName = "Aether.Typography.Heading";
