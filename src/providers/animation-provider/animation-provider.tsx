import { useReducedMotion } from "react-native-reanimated";
import { AnimationContext } from "./use-animation-disabled";
import type { AnimationProviderProps } from "./types";

/**
 * Provider that controls global animation settings.
 *
 * Disables all built-in component animations when:
 * - `disableAnimations` prop is `true`, OR
 * - iOS "Reduce Motion" accessibility setting is enabled
 *
 * @example
 * ```tsx
 * // In your app root:
 * <AetherProvider disableAnimations={true}>
 *   <App />
 * </AetherProvider>
 *
 * // AnimationProvider is composed inside AetherProvider automatically.
 * // Use AetherProvider's disableAnimations prop, not AnimationProvider directly.
 * ```
 */
export const AnimationProvider = ({
  children,
  disableAnimations = false,
}: AnimationProviderProps) => {
  const reducedMotion = useReducedMotion();
  const isAnimationDisabled = disableAnimations || reducedMotion;

  return (
    <AnimationContext.Provider value={{ isAnimationDisabled }}>
      {children}
    </AnimationContext.Provider>
  );
};
