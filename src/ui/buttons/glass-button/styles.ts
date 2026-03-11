import type { ViewStyle } from "react-native";
import { tv } from "tailwind-variants";

export const glassButtonVariants = tv({
  base: ["items-center justify-center overflow-hidden rounded-full", "border"],
  variants: {
    size: {
      icon: "w-11 h-11",
      fab: "w-14 h-14",
      badge: "h-11 px-3",
    },
    variant: {
      default: "bg-glass border-glass-border",
      primary: "bg-primary border-primary",
      secondary: "bg-secondary border-secondary",
    },
    isDisabled: {
      true: "opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    size: "icon",
    variant: "default",
    isDisabled: false,
  },
});

export const GLASS_BUTTON_FALLBACK_SHADOW: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
} as const;

export const GLASS_BUTTON_PRIMARY_SHADOW: ViewStyle = {
  shadowColor: "hsla(245, 70%, 58%, 1)",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.35,
  shadowRadius: 12,
} as const;
