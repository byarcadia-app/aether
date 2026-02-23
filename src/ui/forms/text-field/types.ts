import type { StyleProp, TextInputProps, ViewStyle } from "react-native";

/**
 * Display name constants for compound component detection.
 */
export const DISPLAY_NAME = {
  ROOT: "TextField",
  LABEL: "TextFieldLabel",
  INPUT: "TextFieldInput",
  INPUT_START_CONTENT: "TextFieldInputStartContent",
  INPUT_END_CONTENT: "TextFieldInputEndContent",
  DESCRIPTION: "TextFieldDescription",
  ERROR_MESSAGE: "TextFieldErrorMessage",
} as const;

/**
 * Context value shared across TextField compound components.
 */
export interface TextFieldContextValue {
  isEditable: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  labelId: string;
  errorId: string;
  descriptionId: string;
}

/**
 * Props for the root TextField component.
 *
 * @example
 * ```tsx
 * <TextField isInvalid={!!error} isRequired>
 *   <TextFieldLabel>Email</TextFieldLabel>
 *   <TextFieldInput placeholder="Enter email" />
 *   <TextFieldErrorMessage>{error}</TextFieldErrorMessage>
 * </TextField>
 * ```
 */
export interface TextFieldProps {
  /**
   * TextField compound components.
   */
  children: React.ReactNode;

  /**
   * Whether the input is editable.
   * @default true
   */
  isEditable?: boolean;

  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether the input is in an invalid state.
   * @default false
   */
  isInvalid?: boolean;

  /**
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean;

  /**
   * Additional class names for the root container.
   */
  className?: string;
}

/**
 * Props for TextFieldLabel component.
 */
export interface TextFieldLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for TextFieldInput component.
 */
export interface TextFieldInputProps extends Omit<
  TextInputProps,
  "value" | "defaultValue" | "editable"
> {
  /**
   * Controlled value.
   */
  value?: string;

  /**
   * Default value for uncontrolled mode.
   */
  defaultValue?: string;

  /**
   * Whether to show a clear button when input has value.
   * @default false
   */
  isClearable?: boolean;

  /**
   * Callback when clear button is pressed.
   */
  onClear?: () => void;

  /**
   * Whether this is a multiline input (textarea).
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of lines for multiline input.
   * @default 4
   */
  numberOfLines?: number;

  /**
   * Children for start/end content slots.
   */
  children?: React.ReactNode;

  /**
   * Additional styles for the input wrapper.
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Additional class names for the input wrapper.
   */
  wrapperClassName?: string;
}

/**
 * Props for TextFieldInputStartContent component.
 */
export interface TextFieldInputStartContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for TextFieldInputEndContent component.
 */
export interface TextFieldInputEndContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for TextFieldDescription component.
 */
export interface TextFieldDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for TextFieldErrorMessage component.
 */
export interface TextFieldErrorMessageProps {
  children: React.ReactNode;
  className?: string;
}
