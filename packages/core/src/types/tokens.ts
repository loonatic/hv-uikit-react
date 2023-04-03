// COLORS
export type HvAccentColorKeys =
  | "primary"
  | "primary_80"
  | "primary_20"
  | "brand"
  | "secondary"
  | "secondary_60"
  | "secondary_80";
export type HvAtmosphereColorKeys = "atmo1" | "atmo2" | "atmo3" | "atmo4";
export type HvBaseColorKeys = "base_light" | "base_dark";
export type HvSemanticColorKeys =
  | "positive"
  | "neutral"
  | "warning"
  | "negative"
  | "catastrophic"
  | "sema6"
  | "neutral_20"
  | "positive_80"
  | "positive_120"
  | "positive_20"
  | "negative_20"
  | "negative_120"
  | "negative_80"
  | "sema10"
  | "sema11"
  | "sema12"
  | "sema13"
  | "sema14"
  | "sema15"
  | "sema16"
  | "sema17"
  | "sema18"
  | "sema19"
  | "warning_20"
  | "warning_140"
  | "warning_120";
export type HvSupportColorKeys =
  | "supp1"
  | "supp2"
  | "supp3"
  | "supp4"
  | "supp5";
export type HvUndefinedStateColorKeys = "atmo4";
export type HvCategoricalColorKeys =
  | "cat1"
  | "cat1_180"
  | "cat1_160"
  | "cat1_140"
  | "cat1_120"
  | "cat1_80"
  | "cat1_60"
  | "cat1_40"
  | "cat1_20"
  | "cat2"
  | "cat2_180"
  | "cat2_160"
  | "cat2_140"
  | "cat2_120"
  | "cat2_80"
  | "cat2_60"
  | "cat2_40"
  | "cat2_20"
  | "cat3"
  | "cat3_180"
  | "cat3_160"
  | "cat3_140"
  | "cat3_120"
  | "cat3_80"
  | "cat3_60"
  | "cat3_40"
  | "cat3_20"
  | "cat4"
  | "cat4_180"
  | "cat4_160"
  | "cat4_140"
  | "cat4_120"
  | "cat4_80"
  | "cat4_60"
  | "cat4_40"
  | "cat4_20"
  | "cat5"
  | "cat5_180"
  | "cat5_160"
  | "cat5_140"
  | "cat5_120"
  | "cat5_80"
  | "cat5_60"
  | "cat5_40"
  | "cat5_20"
  | "cat6"
  | "cat6_180"
  | "cat6_160"
  | "cat6_140"
  | "cat6_120"
  | "cat6_80"
  | "cat6_60"
  | "cat6_40"
  | "cat6_20"
  | "cat7"
  | "cat7_180"
  | "cat7_160"
  | "cat7_140"
  | "cat7_120"
  | "cat7_80"
  | "cat7_60"
  | "cat7_40"
  | "cat7_20"
  | "cat8"
  | "cat8_180"
  | "cat8_160"
  | "cat8_140"
  | "cat8_120"
  | "cat8_80"
  | "cat8_60"
  | "cat8_40"
  | "cat8_20"
  | "cat9"
  | "cat9_180"
  | "cat9_160"
  | "cat9_140"
  | "cat9_120"
  | "cat9_80"
  | "cat9_60"
  | "cat9_40"
  | "cat9_20"
  | "cat10"
  | "cat10_180"
  | "cat10_160"
  | "cat10_140"
  | "cat10_120"
  | "cat10_80"
  | "cat10_60"
  | "cat10_40"
  | "cat10_20"
  | "cat11"
  | "cat11_180"
  | "cat11_160"
  | "cat11_140"
  | "cat11_120"
  | "cat11_80"
  | "cat11_60"
  | "cat11_40"
  | "cat11_20"
  | "cat12"
  | "cat12_180"
  | "cat12_160"
  | "cat12_140"
  | "cat12_120"
  | "cat12_80"
  | "cat12_60"
  | "cat12_40"
  | "cat12_20"
  | "cat13"
  | "cat14"
  | "cat15"
  | "cat16"
  | "cat17"
  | "cat18"
  | "cat19"
  | "cat20";
export type HvSequentialColorKeys =
  | "cat1"
  | "cat1_100"
  | "cat1_200"
  | "cat1_300"
  | "cat1_400"
  | "cat1_500"
  | "cat1_600"
  | "cat1_700"
  | "cat1_800"
  | "cat1_900";
export type HvPolarizedColorKeys =
  | "positive"
  | "positive_120"
  | "positive_80"
  | "warning"
  | "warning_120"
  | "warning_140"
  | "negative"
  | "cat21"
  | "cat22"
  | "cat23"
  | "cat24"
  | "cat25"
  | "cat26"
  | "cat27"
  | "cat28"
  | "catastrophic";

export type HvAccentColors = Record<HvAccentColorKeys, string>;

export type HvAtmosphereColors = Record<HvAtmosphereColorKeys, string>;

export type HvBaseColors = Record<HvBaseColorKeys, string>;

export type HvSemanticColors = Record<HvSemanticColorKeys, string>;

export type HvSupportColors = Record<HvSupportColorKeys, string>;

export interface HvThemePalette {
  accent: HvAccentColors;
  atmosphere: HvAtmosphereColors;
  base: HvBaseColors;
  semantic: HvSemanticColors;
  support: HvSupportColors;
}

// BREAKPOINTS
export type HvBreakpoints = "xs" | "sm" | "md" | "lg" | "xl";
