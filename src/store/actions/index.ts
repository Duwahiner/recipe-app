import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { getRecipesService } from 'services';
import { getDataRecipes } from 'store/reducers/recipes';
import { GetResipesResponse } from 'types/services';
import { RootState } from 'types/store';

export const GetRecipes = (value: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    const resultsData = await getRecipesService(value);

    dispatch(getDataRecipes(resultsData as GetResipesResponse));
  };
};
