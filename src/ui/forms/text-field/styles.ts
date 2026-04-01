import { tv } from "tailwind-variants";

/**
 * Tailwind variants for TextField compound components.
 *
 * @example
 * ```tsx
 * const styles = textFieldStyles({ isDisabled: true, isInvalid: false });
 * <View className={styles.root()}>...</View>
 * ```
 */
export const textFieldStyles = tv({
  slots: {
    root: "flex flex-col gap-2",
    label: "text-[17px] leading-[22px] font-semibold text-foreground",
    inputWrapper: "flex-row items-center px-4 rounded-xl bg-surface border-2 min-h-[50px]",
    input: "flex-1 text-[17px] leading-[22px] text-foreground py-3",
    description: "text-[13px] leading-[18px] text-muted-foreground",
    startContent: "mr-2",
    endContent: "ml-2",
    clearButton: "ml-2 h-6 w-6 items-center justify-center",
  },
  variants: {
    isDisabled: {
      true: {
        root: "opacity-50",
      },
    },
    isInvalid: {
      true: {
        label: "text-danger",
      },
    },
    isMultiline: {
      true: {
        inputWrapper: "items-start px-0",
				input: "min-h-[100px] py-2 px-4",
      },
    },
  },
});
