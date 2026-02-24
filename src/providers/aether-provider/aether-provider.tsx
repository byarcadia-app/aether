import type React from "react";

import type { TextProviderProps } from "../text-provider";
import { TextComponentProvider } from "../text-provider";
import { AnimationProvider } from "../animation-provider";
import { ThemeProvider } from "../theme-provider";
import { ColorPaletteConfig } from "../../theme/colors";


export interface AetherProviderProps {
  children: React.ReactNode;
  /**
   * Global text configuration for all text components.
   *
   * @example
   * ```tsx
   * <AetherProvider textConfig={{ maxFontSizeMultiplier: 2.0 }}>
   *   <App />
   * </AetherProvider>
   * ```
   */
  textConfig?: TextProviderProps;
  /**
   * Optional custom color palette configuration.
   *
   * Allows overriding default colors for both light and dark modes independently.
   * All color properties are optional - only specified colors will be overridden.
   *
   * @example
   * ```tsx
   * <AetherProvider
   *   colorPalette={{
   *     light: {
   *       primary: "hsla(280, 70%, 58%, 1)",
   *       success: "hsla(120, 55%, 50%, 1)",
   *       background: "hsla(45, 20%, 98%, 1)",
   *     },
   *     dark: {
   *       primary: "hsla(280, 60%, 65%, 1)",
   *       background: "hsla(240, 5%, 8%, 1)",
   *     },
   *   }}
   * >
   *   <App />
   * </AetherProvider>
   * ```
   */
  colorPalette?: ColorPaletteConfig;
  /**
   * Disable all animations globally.
   *
   * When true, all built-in component animations are skipped.
   * Also automatically disabled when iOS "Reduce Motion" accessibility setting is enabled.
   *
   * @default false
   *
   * @example
   * ```tsx
   * <AetherProvider disableAnimations={true}>
   *   <App />
   * </AetherProvider>
   * ```
   */
  disableAnimations?: boolean;
}

/**
 * Root provider for App.
 *
 * **Usage:**
 * Wrap your app's root component with this provider to enable all Umbra features.
 *
 * @example
 * ```tsx
 * import { AetherProvider } from "shared-components/providers";
 *
 * export default function RootLayout() {
 *   return (
 *     <AetherProvider>
 *       <App />
 *     </AetherProvider>
 *   );
 * }
 * ```
 */
export const AetherProvider = ({ children, textConfig, colorPalette, disableAnimations }: AetherProviderProps) => {
  return (
    <ThemeProvider colorPalette={colorPalette}>
      <AnimationProvider disableAnimations={disableAnimations}>
        <TextComponentProvider value={textConfig}>{children}</TextComponentProvider>
      </AnimationProvider>
    </ThemeProvider>
  );
};
