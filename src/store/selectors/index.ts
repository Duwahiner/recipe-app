import { RootState } from '../../types/store';

export const getDataMenuSelector = (state: RootState) => state.menu.data;
export const getDataMenuFloatSelector = (state: RootState) => state.menuFloat.data;
export const getDataBannerSelector = (state: RootState) => state.headerState.banner;
export const getDataResipes = (state: RootState) => state.recipes.data?.hits;
export const getSearch = (state: RootState) => state.recipes.search;
