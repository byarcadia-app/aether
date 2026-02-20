import type { ViewStyle } from "react-native";
import { tv } from "tailwind-variants";

export const glassButtonVariants = tv({
  base: [
    "items-center justify-center overflow-hidden rounded-full",
    "bg-glass border border-glass-border",
  ],
  variants: {
    size: {
      icon: "w-11 h-11",
      fab: "w-14 h-14",
      badge: "h-11 px-3",
    },
    isDisabled: {
      true: "opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    size: "icon",
    isDisabled: false,
  },
});

export const GLASS_BUTTON_FALLBACK_SHADOW: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
} as const;
