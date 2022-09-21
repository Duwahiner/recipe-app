import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GetResipesResponse } from 'types/services';
import { StateDataRecipes } from 'types/store';

const initialState: StateDataRecipes = {
  data: {} as GetResipesResponse,
  search: 'Nuevas Recetas',
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getDataRecipes: (state: StateDataRecipes, action: PayloadAction<GetResipesResponse>) => {
      return {
        ...state,
        data: action.payload,
      };
    },

    setSearch: (state: StateDataRecipes, action: PayloadAction<string>) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
});

export const { getDataRecipes, setSearch } = recipesSlice.actions;

export default recipesSlice.reducer;
