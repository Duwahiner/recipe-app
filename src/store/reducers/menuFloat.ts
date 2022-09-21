import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dataMenuFloat } from 'assets/data';
import { DataMenuFloat } from 'types/assets';
import { StateDataMenuFloat } from 'types/store';
import { currentActiveItemMenu } from './menu';

const initialState: StateDataMenuFloat = {
  data: dataMenuFloat,
};

const menuFloatSlice = createSlice({
  name: 'menuFloat',
  initialState,
  reducers: {
    getDataMenuFloat: (state: StateDataMenuFloat, action: PayloadAction<DataMenuFloat[]>) => {
      return {
        ...state,
        data: action.payload,
      };
    },

    setAutoSelectActiveItemMenuFloat: currentActiveItemMenu('link'),
    setActiveItemMenuFloat: currentActiveItemMenu('name'),
  },
});

export const {
  getDataMenuFloat,
  setActiveItemMenuFloat,
  setAutoSelectActiveItemMenuFloat,
} = menuFloatSlice.actions;

export default menuFloatSlice.reducer;
