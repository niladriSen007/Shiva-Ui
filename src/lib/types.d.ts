import { ComponentPropsWithoutRef } from "react";

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  DEFAULT = 'default',
}

export interface ActiveThemeProviderProps{
  children: ReactNode
  initialTheme?: Theme | string
}

export interface ThemeContextType {
  activeTheme: string
  setActiveTheme: (theme: string) => void
}

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}