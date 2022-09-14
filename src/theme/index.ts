import { ThemeApp } from 'types/theme';

export const themeApp: ThemeApp = {
  breakpointsApp: ['576px', '768px', '992px', '1200px'],

  colors: {
    prymary: '#D84A4A',
    bgPrymary100: '#FFFFFF',
    bgPrymary200: '#C2E3F3',
    bgPrymary300: '#6AA3C1',
    secondary: '#425966',
    secondary100: '#E9F1FA',
    secondary200: '#8395A7',
    gray100: '#fafafa',
    gray200: '#d6d6d6',
    gray300: '#cbcfd3',
    favorite100: '#FC8E56',
    favorite200: '#FEC368',
    black: '#000000',
    bgCards:
      'transparent linear-gradient(180deg, #E9F1FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
    bgFooter:
      'transparent linear-gradient(180deg, #C2E3F3 0%, #6AA3C1 100%) 0% 0% no-repeat padding-box',
  },

  fonts: {
    monsterClubhouse: 'MonsterClubhouse',
    poppins: 'Poppins',
  },

  viewport: {
    width: '100vw',
    height: '100vh',
  },

  fontSizes: [0.7, 1, 2, 5, 8, 10],
  space: [5, 10, 15, 20, 30, 40],
  fontWeights: {
    fontWeight200: 200,
    fontWeight400: 400,
    fontWeight500: 500,
    fontWeight600: 600,
  },

  borderRadius: {
    border1: '3px',
    border2: '5px',
    border3: '8px',
    border4: '10px',
    border5: '12x',
  },

  boxShadow: {
    shadow: '0px 5px 9px #8395A766;',
  },
};
