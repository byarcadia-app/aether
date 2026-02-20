import type React from "react";
import type { TextProviderProps } from "./types";
import { TextComponentContext, useProvideDefaultTextComponent } from "./use-text-component";

export const TextComponentProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: TextProviderProps;
}) => {
  const defaultValue = useProvideDefaultTextComponent();

  return (
    <TextComponentContext.Provider value={value ?? defaultValue}>
      {children}
    </TextComponentContext.Provider>
  );
};
