/**
 * Type guard utilities for React children.
 * Used for auto-wrapping text content in button components.
 */

/**
 * Checks if children is a string that should be auto-wrapped.
 *
 * @example
 * ```tsx
 * if (isTextContent(children)) {
 *   return <Text>{children}</Text>;
 * }
 * ```
 */
export function isTextContent(children: unknown): children is string {
	return typeof children === "string";
}

/**
 * Checks if children is a render function.
 *
 * @example
 * ```tsx
 * if (isRenderFunction<ButtonContext>(children)) {
 *   return children(context);
 * }
 * ```
 */
export function isRenderFunction<TContext>(
	children: unknown
): children is (context: TContext) => React.ReactNode {
	return typeof children === "function";
}
