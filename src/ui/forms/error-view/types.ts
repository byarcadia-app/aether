import type { TextProps } from "../../typography/text";

/**
 * Props for ErrorView component.
 *
 * @example
 * ```tsx
 * <ErrorView isInvalid={!!error}>
 *   {error?.message}
 * </ErrorView>
 * ```
 */
export interface ErrorViewProps extends TextProps {
  /**
   * Whether to show the error message.
   * When false, the component renders nothing.
   */
  isInvalid: boolean;

  /**
   * The error message content.
   */
  children: React.ReactNode;
}
