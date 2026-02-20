/**
 * Tailwind CSS class name utilities for merging and joining classes.
 *
 * This module provides two utilities for working with Tailwind classes:
 * - `cn` (cnBase) - Fast class joining, removes falsy values
 * - `cnx` (cn/merge) - Intelligent merging with conflict resolution
 *
 * **Default recommendation: Use `cnx`** for most cases as it safely handles
 * conflicting Tailwind classes (e.g., `text-sm` + `text-lg` → `text-lg`).
 */

import { type CnOptions, cx, cn as cnMerge } from "tailwind-variants";

/**
 * Joins class names, filtering out falsy values.
 * Use when you know there are no conflicting Tailwind classes.
 *
 * @example
 * cn("flex gap-4", isActive && "opacity-100")
 * // → "flex gap-4 opacity-100"
 */
export const cn = <T extends CnOptions>(...classes: T) => cx(...classes) ?? "";

/**
 * Merges Tailwind classes, resolving conflicts by keeping the last value.
 * Use as default - safer when combining classes from multiple sources.
 *
 * @example
 * cnx("text-sm p-4", "text-lg p-8")
 * // → "text-lg p-8"
 *
 * @example
 * // Overridable component styles
 * <View className={cnx("bg-blue-500 rounded", props.className)} />
 */
export const cnx = <T extends CnOptions>(...classes: T) => cnMerge(...classes) ?? "";
