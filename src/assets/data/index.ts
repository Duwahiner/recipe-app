import { CurrentSearch, DataMenu, DataMenuFloat, HeaderState } from 'types/assets';
import vegetarianIcon from 'assets/svg/vegetarian.svg';
import mainIcon from 'assets/svg/main.svg';
import cakeIcon from 'assets/svg/cake.svg';
import fastFoodIcon from 'assets/svg/fast-food.svg';
import kidsIcon from 'assets/svg/kids.svg';
import soupIcon from 'assets/svg/soup.svg';
import imgBanner from 'assets/images/bcq.jpg';

export const dataMenu: DataMenu[] = [
  {
    name: 'Home',
    link: '/',
    active: true,
    subMenu: false,
  },
  {
    name: 'Vegetarianos',
    link: '/vegetarianos',
    active: false,
    subMenu: false,
  },
  {
    name: 'Platos Principales',
    link: '/platos-principales',
    active: false,
    subMenu: false,
  },
  {
    name: 'Tortas',
    link: '/tortas',
    active: false,
    subMenu: false,
  },
  {
    name: 'Comida Rápida',
    link: '/comida-rapida',
    active: false,
    subMenu: false,
  },
  {
    name: 'Menú Niños',
    link: '/menu-ninos',
    active: false,
    subMenu: false,
  },
  {
    name: 'Sopas',
    link: '/sopas',
    active: false,
    subMenu: false,
  },
];

export const dataMenuFloat: DataMenuFloat[] = [
  {
    name: 'Vegetarianos',
    link: '/vegetarianos',
    active: false,
    subMenu: false,
    src: vegetarianIcon,
  },
  {
    name: 'Principales',
    link: '/platos-principales',
    active: false,
    subMenu: false,
    src: mainIcon,
  },
  {
    name: 'Tortas',
    link: '/tortas',
    active: false,
    subMenu: false,
    src: cakeIcon,
  },
  {
    name: 'Rápida',
    link: '/comida-rapida',
    active: false,
    subMenu: false,
    src: fastFoodIcon,
  },
  {
    name: 'Menú Niños',
    link: '/menu-ninos',
    active: false,
    subMenu: false,
    src: kidsIcon,
  },
  {
    name: 'Sopas',
    link: '/sopas',
    active: false,
    subMenu: false,
    src: soupIcon,
  },
];

export const currentSearch: CurrentSearch[] = [
  {
    namePage: 'Home',
    title: 'Nuevas Recetas',
    path: '/',
    search: 'chicken',
  },
  {
    namePage: 'Vegetarianos',
    title: 'Vegetarianos',
    path: '/vegetarianos',
    search: 'vegetarians',
  },
  {
    namePage: 'Platos Principales',
    title: 'Platos Principales',
    path: '/platos-principales',
    search: 'main courses',
  },
  {
    namePage: 'Tortas',
    title: 'Tortas',
    path: '/tortas',
    search: 'cakes',
  },
  {
    namePage: 'Comida Rápida',
    title: 'Comida Rápida',
    path: '/comida-rapida',
    search: 'Fast food',
  },
  {
    namePage: 'Menú Niños',
    title: 'Menú Niños',
    path: '/menu-ninos',
    search: 'Kids Menu',
  },
  {
    namePage: 'Sopas',
    title: 'Sopas',
    path: '/sopas',
    search: 'soups',
  },
];

export const dataHaderState: HeaderState = {
  banner: {
    title: 'Recetas',
    subTitle: 'para todos',
    link: '/',
    urlImg: imgBanner,
  },
};
