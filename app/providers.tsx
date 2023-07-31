"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564
// needs to be called NextThemesProvider not ThemesProvider
// not sure why
export function Providers(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
