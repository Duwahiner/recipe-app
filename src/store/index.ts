import { configureStore } from '@reduxjs/toolkit';

import menu from './reducers/menu';
import menuFloat from './reducers/menuFloat';
import headerState from './reducers/headerState';
import recipes from './reducers/recipes';

import { saveState, loadState } from './localStorage';

const store = configureStore({
  reducer: {
    menu,
    menuFloat,
    headerState,
    recipes,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
