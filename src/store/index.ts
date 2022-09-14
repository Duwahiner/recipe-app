import { configureStore } from '@reduxjs/toolkit';

import couters from './reducers/couters';
import { saveState, loadState } from './localStorage';

const store = configureStore({
  reducer: {
    couters,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
