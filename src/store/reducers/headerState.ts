import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dataHaderState } from 'assets/data';
import { HeaderState } from 'types/assets';
import { StateHeaderState } from 'types/store';

const initialState: StateHeaderState = {
  banner: dataHaderState.banner,
};

const headerStateSlice = createSlice({
  name: 'headerState',
  initialState,
  reducers: {
    getDataBanner: (state: StateHeaderState, action: PayloadAction<HeaderState>) => {
      return {
        ...state,
        banner: action.payload.banner,
      };
    },
  },
});

export const { getDataBanner } = headerStateSlice.actions;

export default headerStateSlice.reducer;
