import store from 'store';
import { Banner, DataMenu, DataMenuFloat } from 'types/assets';
import { GetResipesResponse } from 'types/services';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface StateDataMenu {
  data: DataMenu[];
}

export interface StateDataMenuFloat {
  data: DataMenuFloat[];
}

export interface StateHeaderState {
  banner: Banner;
}

export interface StateDataRecipes {
  data: GetResipesResponse;
  search: string;
}
