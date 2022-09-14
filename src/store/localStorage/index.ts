import { RootState } from '../../types/store';

export const loadState = () => {
  try {
    const serializedData = window.localStorage.getItem('store-recipe-app');

    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedData = JSON.stringify(state);

    window.localStorage.setItem('store-recipe-app', serializedData);
  } catch (error) {
    // aca podemos capturar o crear cualquier log que deseemos en caso que falle el salvado en el storage
  }
};
