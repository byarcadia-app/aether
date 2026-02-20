import { tv } from "tailwind-variants";
import { BaseText } from "../base-text";
import type { CaptionProps } from "./types";

/**
 * Caption component following iOS Typography System
 *
 * Maps to iOS Text Styles:
 * - md (Caption 1): 12pt Regular
 * - sm (Caption 2): 11pt Regular (smallest)
 *
 * Used for metadata, timestamps, status indicators, and supplementary information.
 *
 * Color Variants:
 * - Base: default | primary | secondary | muted | success | warning | danger | info | inherit
 * - Foreground: primary-foreground | secondary-foreground | success-foreground | warning-foreground | danger-foreground | info-foreground
 *
 * @see https://developer.apple.com/design/human-interface-guidelines/typography
 *
 * @example
 * ```tsx
 * <Caption color="muted">Posted 2 hours ago</Caption>
 * <Caption color="success">✓ Active</Caption>
 *
 * // Badge text on colored backgrounds
 * <View className="bg-success">
 *   <Caption color="success-foreground">Active</Caption>
 * </View>
 * ```
 */

export const captionVariants = tv({
	variants: {
		variant: {
			md: "text-[12px] leading-tight", // 12pt - Caption 1
			sm: "text-[11px] leading-tight", // 11pt - Caption 2 (smallest)
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
	defaultVariants: {
		variant: "md",
		weight: "regular",
		color: "default",
	},
});

export function Caption({
	variant = "md",
	weight = "regular",
	color,
	children,
	...props
}: CaptionProps) {
	return (
		<BaseText
			{...props}
			className={captionVariants({
				variant,
				weight,
				color,
				className: props.className,
			})}>
			{children}
		</BaseText>
	);
}

Caption.displayName = "Aether.Typography.Caption";
