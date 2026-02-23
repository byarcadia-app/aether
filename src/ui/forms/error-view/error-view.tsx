import { Text } from "../../typography/text";
import type { ErrorViewProps } from "./types";

/**
 * Conditional error message component.
 * Renders error text only when isInvalid is true.
 *
 * @example
 * ```tsx
 * <ErrorView isInvalid={!!error}>
 *   {error}
 * </ErrorView>
 * ```
 */
export function ErrorView({ isInvalid, children, className, ...props }: ErrorViewProps) {
  if (!isInvalid) return null;

  return (
    <Text variant="footnote" color="danger" className={className} {...props}>
      {children}
    </Text>
  );
}

ErrorView.displayName = "Aether.Forms.ErrorView";
