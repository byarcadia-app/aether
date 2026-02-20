import type React from "react";
import { createContext, useContext, useMemo } from "react";
import type { GestureResponderEvent } from "react-native";
import { ActivityIndicator } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { tv } from "tailwind-variants";
import { useThemeColor } from "../../../hooks";
import { cnx, hapticsImpact, isRenderFunction, isTextContent } from "../../../utils";
import type { HapticFeedbackStyle } from "../../../utils";
import { Text } from "../../typography/text";
import { AnimatedPressable, PressableHighlight, usePressableAnimation } from "../shared";
import {
  BUTTON_TEXT_COLOR_MAP,
  BUTTON_TEXT_SIZE_MAP,
  HIGHLIGHT_COLOR_MAP,
  SPINNER_COLOR_MAP,
} from "./constants";
import type { ButtonProps, ButtonRenderContext } from "./types";
import { ButtonShimmer } from "./button-shimmer";

export const buttonVariants = tv({
  base: "flex-row items-center justify-center overflow-hidden rounded-xl",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary border border-border",
      outline: "bg-surface/90 border border-border",
      ghost: "bg-transparent",
      destructive: "bg-danger",
    },
    size: {
      sm: "px-4 py-2 min-h-[36px] gap-1.5",
      md: "px-6 py-3 min-h-[44px] gap-2",
      lg: "px-8 py-4 min-h-[52px] gap-2.5",
    },
    isIconOnly: {
      true: "aspect-square px-0",
    },
    isRounded: {
      true: "rounded-full",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    isIconOnly: false,
    isRounded: false,
    isDisabled: false,
  },
});

export const ButtonContext = createContext<ButtonRenderContext | null>(null);

export function useButtonContext(): ButtonRenderContext {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("useButtonContext must be used within a Button component");
  }

  return context;
}

export interface ButtonLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonLabel({ children, className }: ButtonLabelProps) {
  const { variant, size } = useButtonContext();

  const textColor = BUTTON_TEXT_COLOR_MAP[variant];
  const textVariant = BUTTON_TEXT_SIZE_MAP[size];

  return (
    <Text variant={textVariant} color={textColor} weight="medium" className={className}>
      {children}
    </Text>
  );
}

ButtonLabel.displayName = "Aether.Buttons.ButtonLabel";

export function Button({
  variant = "primary",
  size = "md",
  isIconOnly = false,
  isRounded = false,
  disabled = false,
  isLoading = false,
  animationConfig,
  haptics,
  withShimmer = false,
  children,
  className,
  onPress,
  onPressIn,
  onPressOut,
  accessibilityLabel,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const containerWidth = useSharedValue(0);

  const handleHapticPressIn = (event: GestureResponderEvent) => {
    if (haptics && !isDisabled) {
      const style = haptics === true ? undefined : (haptics as HapticFeedbackStyle);
      hapticsImpact(style);
    }
    onPressIn?.(event);
  };

  const { animatedStyle, isPressed, handlePressIn, handlePressOut } = usePressableAnimation(
    {
      isDisabled,
      duration: animationConfig?.scale?.duration,
      scaleValue: animationConfig?.scale?.scaleValue,
      disableScale: animationConfig?.scale?.isDisabled,
    },
    handleHapticPressIn,
    onPressOut ?? undefined,
  );

  const spinnerColor = useThemeColor(SPINNER_COLOR_MAP[variant]);

  const contextValue = useMemo<ButtonRenderContext>(
    () => ({
      variant,
      size,
      isDisabled,
      isLoading,
    }),
    [variant, size, isDisabled, isLoading],
  );

  const computedAccessibilityLabel = useMemo(() => {
    if (accessibilityLabel) return accessibilityLabel;
    if (isTextContent(children)) return children;
    return undefined;
  }, [accessibilityLabel, children]);

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={spinnerColor} />;
    }

    if (isRenderFunction(children)) {
      return children(contextValue);
    }

    if (isTextContent(children)) {
      const textColor = BUTTON_TEXT_COLOR_MAP[variant];
      const textVariant = BUTTON_TEXT_SIZE_MAP[size];

      return (
        <Text variant={textVariant} color={textColor} weight="medium">
          {children}
        </Text>
      );
    }

    return children as React.ReactNode;
  };

  return (
    <ButtonContext.Provider value={contextValue}>
      <AnimatedPressable
        style={animatedStyle}
        className={cnx(
          buttonVariants({
            variant,
            size,
            isIconOnly,
            isRounded,
            isDisabled,
          }),
          className,
        )}
        disabled={isDisabled}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLayout={(e) => containerWidth.set(e.nativeEvent.layout.width)}
        accessibilityRole="button"
        accessibilityLabel={computedAccessibilityLabel}
        accessibilityState={{
          disabled: isDisabled,
          busy: isLoading,
        }}
        {...props}
      >
        <PressableHighlight
          isPressed={isPressed}
          colorKey={animationConfig?.highlight?.color ?? HIGHLIGHT_COLOR_MAP[variant]}
          opacity={animationConfig?.highlight?.opacity}
          duration={animationConfig?.highlight?.duration}
          isDisabled={isDisabled || animationConfig?.highlight?.isDisabled}
        />
        {withShimmer && <ButtonShimmer containerWidth={containerWidth} variant={variant} />}
        {renderContent()}
      </AnimatedPressable>
    </ButtonContext.Provider>
  );
}

Button.displayName = "Aether.Buttons.Button";
