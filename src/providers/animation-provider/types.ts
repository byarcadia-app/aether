import type { ReactNode } from "react";

export interface AnimationProviderProps {
  children: ReactNode;
  /**
   * Explicitly disable all animations globally.
   * When true, all built-in component animations are skipped.
   * Also automatically disabled when iOS "Reduce Motion" accessibility setting is enabled.
   * @default false
   */
  disableAnimations?: boolean;
}

export interface AnimationContextValue {
  /**
   * Whether animations should be disabled.
   * True when disableAnimations prop is set OR when iOS Reduce Motion is enabled.
   */
  isAnimationDisabled: boolean;
}
