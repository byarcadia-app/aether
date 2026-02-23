import React from "react";

/**
 * Gets child element by its displayName property.
 *
 * Used by compound components to find specific slots (e.g., TextField finding
 * TextFieldInputStartContent or TextFieldInputEndContent).
 *
 * @param children - React children to search through
 * @param displayName - The displayName property to match
 * @returns The matching React element or undefined if not found
 *
 * @example
 * ```tsx
 * const startContent = getElementByDisplayName(children, "TextFieldInputStartContent");
 * ```
 */
export function getElementByDisplayName(
  children: React.ReactNode,
  displayName: string,
): React.ReactElement | undefined {
  const element = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) &&
      // oxlint-ignore no-explicit-any
      (child.type as any)?.displayName === displayName,
  );

  return element as React.ReactElement | undefined;
}
