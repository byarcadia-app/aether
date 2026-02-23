import { createContext, use, useId, useRef, useState } from "react";
import { Pressable, type TextInput as RNTextInput, TextInput, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Caption } from "../../typography/caption";
import { IconSymbol } from "../../icons";
import { Text } from "../../typography/text";
import { VStack } from "../../layout";
import { useThemeColor } from "../../../hooks";
import { cnx, getElementByDisplayName } from "../../../utils";
import { ErrorView } from "../error-view";
import { textFieldStyles } from "./styles";
import {
  DISPLAY_NAME,
  type TextFieldContextValue,
  type TextFieldDescriptionProps,
  type TextFieldErrorMessageProps,
  type TextFieldInputEndContentProps,
  type TextFieldInputProps,
  type TextFieldInputStartContentProps,
  type TextFieldLabelProps,
  type TextFieldProps,
} from "./types";

const TextFieldContext = createContext<TextFieldContextValue | null>(null);
const TextFieldProvider = TextFieldContext.Provider;

/**
 * Hook to access TextField context.
 * Throws if used outside of TextField.
 */
function useTextFieldContext() {
  const context = use(TextFieldContext);
  if (!context) {
    throw new Error("TextField compound components must be used within TextField");
  }
  return context;
}

// Animation config
const TIMING_CONFIG = { duration: 150, easing: Easing.out(Easing.ease) };

/**
 * Root TextField component. Provides context for compound components.
 *
 * @example
 * ```tsx
 * <TextField isInvalid={!!error}>
 *   <TextFieldLabel>Email</TextFieldLabel>
 *   <TextFieldInput placeholder="Enter email" isClearable />
 *   <TextFieldErrorMessage>{error}</TextFieldErrorMessage>
 * </TextField>
 * ```
 */
export function TextField({
  children,
  isEditable = true,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  className,
}: TextFieldProps) {
  const labelId = useId();
  const errorId = useId();
  const descriptionId = useId();

  const styles = textFieldStyles({ isDisabled });

  const contextValue: TextFieldContextValue = {
    isEditable,
    isDisabled,
    isInvalid,
    isRequired,
    labelId,
    errorId,
    descriptionId,
  };

  return (
    <TextFieldProvider value={contextValue}>
      <VStack className={cnx(styles.root(), className)}>{children}</VStack>
    </TextFieldProvider>
  );
}

TextField.displayName = `Aether.Forms.${DISPLAY_NAME.ROOT}`;

/**
 * Label component for TextField.
 * Shows asterisk when field is required.
 *
 * @example
 * ```tsx
 * <TextFieldLabel>Email Address</TextFieldLabel>
 * ```
 */
export function TextFieldLabel({ children, className }: TextFieldLabelProps) {
  const { isRequired, isInvalid, labelId } = useTextFieldContext();
  const styles = textFieldStyles({ isInvalid });

  return (
    <Text nativeID={labelId} className={cnx(styles.label(), className)}>
      {children}
      {isRequired ? (
        <Caption color="danger" className="ml-1">
          {" "}
          *
        </Caption>
      ) : null}
    </Text>
  );
}

TextFieldLabel.displayName = `Aether.Forms.${DISPLAY_NAME.LABEL}`;

/**
 * Main input component for TextField.
 * Supports clearable, multiline, and animated border on focus.
 *
 * @example
 * ```tsx
 * <TextFieldInput placeholder="Enter text" isClearable />
 * ```
 */
export function TextFieldInput({
  value: controlledValue,
  defaultValue = "",
  isClearable = false,
  onClear,
  multiline = false,
  numberOfLines = 4,
  children,
  onFocus,
  onBlur,
  onChangeText,
  placeholder,
  wrapperStyle,
  wrapperClassName,
  className,
  ...restProps
}: TextFieldInputProps) {
  const { isEditable, isDisabled, isInvalid, labelId, errorId, descriptionId } =
    useTextFieldContext();

  // Controlled vs uncontrolled
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Focus state
  const [isFocused, setIsFocused] = useState(false);
  const isFocusedShared = useSharedValue(0);
  const inputRef = useRef<RNTextInput>(null);

  // Theme colors for animation
  const borderColor = useThemeColor("border", { format: "rgb" });
  const primaryColor = useThemeColor("primary", { format: "rgb" });
  const dangerColor = useThemeColor("danger", { format: "rgb" });
  const foregroundColor = useThemeColor("foreground", { format: "rgb" });
  const mutedForegroundColor = useThemeColor("muted-foreground", {
    format: "rgb",
  });

  // Animated border color
  const animatedStyle = useAnimatedStyle(() => ({
    borderColor: isInvalid
      ? dangerColor
      : interpolateColor(isFocusedShared.get(), [0, 1], [borderColor, primaryColor]),
  }));

  const styles = textFieldStyles({ isDisabled, isInvalid, isMultiline: multiline });

  // Find slot content
  const startContent = getElementByDisplayName(
    children,
    `Aether.Forms.${DISPLAY_NAME.INPUT_START_CONTENT}`,
  );
  const endContent = getElementByDisplayName(
    children,
    `Aether.Forms.${DISPLAY_NAME.INPUT_END_CONTENT}`,
  );

  const handleFocus: TextFieldInputProps["onFocus"] = (e) => {
    setIsFocused(true);
    isFocusedShared.set(withTiming(1, TIMING_CONFIG));
    onFocus?.(e);
  };

  const handleBlur: TextFieldInputProps["onBlur"] = (e) => {
    setIsFocused(false);
    isFocusedShared.set(withTiming(0, TIMING_CONFIG));
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    if (!isControlled) {
      setInternalValue(text);
    }
    onChangeText?.(text);
  };

  const handleClear = () => {
    const emptyValue = "";
    if (!isControlled) {
      setInternalValue(emptyValue);
    }
    onChangeText?.(emptyValue);
    onClear?.();
    inputRef.current?.focus();
  };

  const shouldShowClearButton = isClearable && currentValue && currentValue.length > 0;

  return (
    <Animated.View
      style={[animatedStyle, wrapperStyle]}
      className={cnx(styles.inputWrapper(), wrapperClassName)}
    >
      {startContent}

      <TextInput
        ref={inputRef}
        value={currentValue}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor={mutedForegroundColor}
        editable={isEditable && !isDisabled}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        textAlignVertical={multiline ? "top" : "center"}
        aria-labelledby={labelId}
        aria-describedby={[descriptionId, errorId].filter(Boolean).join(" ")}
        aria-invalid={isInvalid}
        accessibilityState={{ disabled: isDisabled }}
        className={cnx(styles.input(), className)}
        style={{ color: foregroundColor }}
        {...restProps}
      />

      {shouldShowClearButton ? (
        <Pressable
          onPress={handleClear}
          accessibilityLabel="Clear input"
          accessibilityRole="button"
          className={styles.clearButton()}
        >
          <IconSymbol
            name="xmark.circle.fill"
            colorScheme={isFocused ? "primary" : "muted"}
            size={20}
          />
        </Pressable>
      ) : null}

      {endContent}
    </Animated.View>
  );
}

TextFieldInput.displayName = `Aether.Forms.${DISPLAY_NAME.INPUT}`;

/**
 * Start content slot for TextFieldInput (e.g., icon).
 *
 * @example
 * ```tsx
 * <TextFieldInput placeholder="Search">
 *   <TextFieldInputStartContent>
 *     <IconSymbol name="magnifyingglass" size={20} />
 *   </TextFieldInputStartContent>
 * </TextFieldInput>
 * ```
 */
export function TextFieldInputStartContent({
  children,
  className,
}: TextFieldInputStartContentProps) {
  const styles = textFieldStyles();
  return <View className={cnx(styles.startContent(), className)}>{children}</View>;
}

TextFieldInputStartContent.displayName = `Aether.Forms.${DISPLAY_NAME.INPUT_START_CONTENT}`;

/**
 * End content slot for TextFieldInput (e.g., icon).
 *
 * @example
 * ```tsx
 * <TextFieldInput placeholder="Amount">
 *   <TextFieldInputEndContent>
 *     <Text color="muted">USD</Text>
 *   </TextFieldInputEndContent>
 * </TextFieldInput>
 * ```
 */
export function TextFieldInputEndContent({ children, className }: TextFieldInputEndContentProps) {
  const styles = textFieldStyles();
  return <View className={cnx(styles.endContent(), className)}>{children}</View>;
}

TextFieldInputEndContent.displayName = `Aether.Forms.${DISPLAY_NAME.INPUT_END_CONTENT}`;

/**
 * Description text for TextField.
 * Hidden when field is invalid.
 *
 * @example
 * ```tsx
 * <TextFieldDescription>We'll never share your email.</TextFieldDescription>
 * ```
 */
export function TextFieldDescription({ children, className }: TextFieldDescriptionProps) {
  const { isInvalid, descriptionId } = useTextFieldContext();
  const styles = textFieldStyles();

  if (isInvalid) return null;

  return (
    <Text
      variant="footnote"
      color="muted"
      nativeID={descriptionId}
      className={cnx(styles.description(), className)}
    >
      {children}
    </Text>
  );
}

TextFieldDescription.displayName = `Aether.Forms.${DISPLAY_NAME.DESCRIPTION}`;

/**
 * Error message for TextField.
 * Only visible when field is invalid.
 *
 * @example
 * ```tsx
 * <TextFieldErrorMessage>This field is required.</TextFieldErrorMessage>
 * ```
 */
export function TextFieldErrorMessage({ children, className }: TextFieldErrorMessageProps) {
  const { isInvalid, errorId } = useTextFieldContext();

  return (
    <ErrorView isInvalid={isInvalid} nativeID={errorId} className={cnx("mt-1", className)}>
      {children}
    </ErrorView>
  );
}

TextFieldErrorMessage.displayName = `Aether.Forms.${DISPLAY_NAME.ERROR_MESSAGE}`;
