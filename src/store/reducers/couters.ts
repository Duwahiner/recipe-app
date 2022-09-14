import { createSlice } from '@reduxjs/toolkit';

interface Couters {
  counting: number;
}

interface StateCouters {
  couters: Couters;
}

const initialState: StateCouters = {
  couters: {
    counting: 10,
  },
};

const coutersSlice = createSlice({
  name: 'couters',
  initialState,
  reducers: {
    increment: (state: StateCouters) => {
      return {
        ...state,
        couters: {
          counting: state.couters.counting + 1,
        },
      };
    },

    decrement: (state: StateCouters) => {
      return {
        ...state,
        couters: {
          counting: state.couters.counting - 1,
        },
      };
    },

    reset: (state: StateCouters) => {
      return {
        ...state,
        couters: {
          counting: 0,
        },
      };
    },
  },
});

export const { increment, decrement, reset } = coutersSlice.actions;

export default coutersSlice.reducer;
