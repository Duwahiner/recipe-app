import { ReactNode } from 'react';

import { ThemeApp } from 'types/theme';

export interface ThemeProps {
  theme?: ThemeApp;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ProviderPagesProps {
  children: ReactNode;
  title: string;
}

export interface LogoProps {
  width?: number;
  height?: number;
}
