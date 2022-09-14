import { RootState } from '../../types/store';

export const countingSelector = (state: RootState) =>
  state.couters.couters.counting;
