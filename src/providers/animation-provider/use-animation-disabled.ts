import { createContext } from "react";
import type { AnimationContextValue } from "./types";

/**
 * Context for the global animation-disabled state.
 *
 * Used internally by `useAnimationDisabled()`. Provided by `AnimationProvider`.
 *
 * @example
 * ```tsx
 * import { use } from "react";
 * import { AnimationContext } from "@byarcadia-app/aether";
 *
 * const { isAnimationDisabled } = use(AnimationContext);
 * ```
 */
export const AnimationContext = createContext<AnimationContextValue>({
  isAnimationDisabled: false,
});
