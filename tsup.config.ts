import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tailwind/index.ts", "src/icons/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-native", "nativewind", "expo-symbols", "react-native-reanimated", "expo-haptics", "@callstack/liquid-glass"],
  treeshake: true,
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "nativewind";
  },
});
