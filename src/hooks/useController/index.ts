import { useLocation } from 'react-router-dom';

import { GetRecipes } from 'store/actions';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { setActiveItemMenu, setAutoSelectActiveItemMenu } from 'store/reducers/menu';
import { setActiveItemMenuFloat, setAutoSelectActiveItemMenuFloat } from 'store/reducers/menuFloat';
import { setSearch } from 'store/reducers/recipes';
import { currentSearch } from 'assets/data';
import { getSearch } from 'store/selectors';

export const useController = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const textSearch = useAppSelector(getSearch);
  const resultsCurrentSearchTitle = currentSearch.find(item => item.path === location.pathname);

  const handleCurrentActiveItem = (nameItem: string) => {
    dispatch(setActiveItemMenu(nameItem));
  };

  const autoSelectActiveItemMenu = () => {
    dispatch(setAutoSelectActiveItemMenu(location.pathname));
  };

  const handleCurrentActiveItemFloat = (nameItem: string) => {
    dispatch(setActiveItemMenuFloat(nameItem));
  };

  const autoSelectActiveItemMenFloat = () => {
    dispatch(setAutoSelectActiveItemMenuFloat(location.pathname));
  };

  const getRecipesDataInitialForPages = () => {
    dispatch(GetRecipes(resultsCurrentSearchTitle ? resultsCurrentSearchTitle.search : textSearch));
  };

  const setSearchTitle = () => {
    dispatch(setSearch(resultsCurrentSearchTitle ? resultsCurrentSearchTitle.title : textSearch));
  };

  return {
    autoSelectActiveItemMenu,
    autoSelectActiveItemMenFloat,
    handleCurrentActiveItem,
    handleCurrentActiveItemFloat,
    getRecipesDataInitialForPages,
    setSearchTitle,
  };
};
