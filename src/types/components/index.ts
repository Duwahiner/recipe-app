import { ReactNode } from 'react';
import { Banner, DataMenu, DataMenuFloat } from 'types/assets';
import { Recipe } from 'types/services';

import { ThemeApp } from 'types/theme';

export interface ThemeProps {
  theme?: ThemeApp;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ContainersAppProps {
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

export interface MenuProps {
  dataMenu: DataMenu[];
  handleCurrentActiveItem: (nameItem: string) => void;
}

export interface MenuFloatProps {
  dataMenuFloat: DataMenuFloat[];
  handleCurrentActiveItemFloat: (nameItem: string) => void;
}

export interface CurrentBannerProps {
  dataBanner: Banner;
}

export interface RecipeCardProps {
  data: Recipe;
  numberStart: number;
}

export interface ItemsSpecializationsProps extends Omit<RecipeCardProps, 'numberStart'> {}

export interface NFoundProps {
  title: string;
  showButton: boolean;
}
