interface ThemeContextValue {
  themes?: string[];
  theme?: string;
  setTheme?: (theme: string) => void;
  colorModes?: string[];
  colorMode?: string;
  setColorMode?: (mode: string) => void;
  spacing: (factor: number) => number;
}
