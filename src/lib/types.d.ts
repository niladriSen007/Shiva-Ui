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

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}