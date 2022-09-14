export interface ThemeApp {
  breakpointsApp: string[];
  colors: Colors;
  fonts: Fonts;
  viewport: Viewport;
  fontSizes: number[];
  space: number[];
  fontWeights: FontWeights;
  borderRadius: BorderRadius;
  boxShadow: BoxShadow;
}

export interface Colors {
  prymary: string;
  bgPrymary100: string;
  bgPrymary200: string;
  bgPrymary300: string;
  secondary: string;
  secondary100: string;
  secondary200: string;
  gray100: string;
  gray200: string;
  gray300: string;
  black: string;
  favorite100: string;
  favorite200: string;
  bgCards: string;
  bgFooter: string;
}

export interface Fonts {
  monsterClubhouse: string;
  poppins: string;
}

export interface FontWeights {
  fontWeight200: number;
  fontWeight400: number;
  fontWeight500: number;
  fontWeight600: number;
}

export interface Viewport {
  width: string;
  height: string;
}

export interface BorderRadius {
  border1: string;
  border2: string;
  border3: string;
  border4: string;
  border5: string;
}

export interface BoxShadow {
  shadow: string;
}
