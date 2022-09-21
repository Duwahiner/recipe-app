import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dataMenu } from 'assets/data';
import { DataMenu } from 'types/assets';
import { StateDataMenu } from 'types/store';

const initialState: StateDataMenu = {
  data: dataMenu,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getDataMenu: (state: StateDataMenu, action: PayloadAction<DataMenu[]>) => {
      return {
        ...state,
        data: action.payload,
      };
    },

    setAutoSelectActiveItemMenu: currentActiveItemMenu('link'),
    setActiveItemMenu: currentActiveItemMenu('name'),
  },
});

export function currentActiveItemMenu (key: 'name' | 'link') {
  const _currentActiveItemMenu = (state: StateDataMenu, action: PayloadAction<string>) => {
    const resultActiveItem = state.data.map(items => {
      if (items[key].toLowerCase() === action.payload) {
        return { ...items, active: true };
      } else {
        return { ...items, active: false };
      }
    });

    return {
      ...state,
      data: resultActiveItem,
    };
  };

  return _currentActiveItemMenu;
}

export const { getDataMenu, setActiveItemMenu, setAutoSelectActiveItemMenu } = menuSlice.actions;

export default menuSlice.reducer;
