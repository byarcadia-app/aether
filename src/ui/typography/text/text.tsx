import { tv } from "tailwind-variants";
import { BaseText } from "../base-text";
import type { TextProps } from "./types";

/**
 * Text component following iOS Typography System
 *
 * Maps to iOS Text Styles:
 * - Headline: 17pt Semibold
 * - Body: 17pt Regular (default)
 * - Callout: 16pt Regular
 * - Subhead: 15pt Regular
 * - Footnote: 13pt Regular
 *
 * Color Variants:
 * - Base: default | primary | secondary | muted | success | warning | danger | info | inherit
 * - Foreground: primary-foreground | secondary-foreground | success-foreground | warning-foreground | danger-foreground | info-foreground
 *
 * @see https://developer.apple.com/design/human-interface-guidelines/typography
 *
 * @example
 * ```tsx
 * <Text>Default body text</Text>
 * <Text color="primary">Learn more</Text>
 * <Text color="success">Success</Text>
 *
 * // Foreground on colored backgrounds
 * <View className="bg-primary">
 *   <Text color="primary-foreground">White text</Text>
 * </View>
 * ```
 */

export const textVariants = tv({
  variants: {
    variant: {
      headline: "text-[17px] leading-normal", // 17pt Semibold
      body: "text-[17px] leading-normal", // 17pt Regular
      callout: "text-[16px] leading-relaxed", // 16pt Regular
      subhead: "text-[15px] leading-tight", // 15pt Regular
      footnote: "text-[13px] leading-tight", // 13pt Regular
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
      "primary-foreground": "text-primary-foreground",
      "secondary-foreground": "text-secondary-foreground",
      "success-foreground": "text-success-foreground",
      "warning-foreground": "text-warning-foreground",
      "danger-foreground": "text-danger-foreground",
      "info-foreground": "text-info-foreground",
    },
  },
  compoundVariants: [
    // Default weights per iOS spec
    { variant: "headline", weight: undefined, class: "font-interSemiBold" },
    { variant: "body", weight: undefined, class: "font-inter" },
    { variant: "callout", weight: undefined, class: "font-inter" },
    { variant: "subhead", weight: undefined, class: "font-inter" },
    { variant: "footnote", weight: undefined, class: "font-inter" },
  ],
  defaultVariants: {
    variant: "body",
    color: "default",
  },
});

export function Text({ variant = "body", weight, color, children, ...props }: TextProps) {
  return (
    <BaseText
      {...props}
      className={textVariants({
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

Text.displayName = "Aether.Typography.Text";
