import { Link } from 'react-router-dom';

import { WrapperFlex } from 'components/WrapperFlex';
import { useScreen } from 'hooks/useScreen';
import { getDivideText } from 'utils/getDivideText';

const dataMenu = [
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

export const Menu: React.FC = () => {
  const screen = useScreen();

  return (
    <WrapperFlex className='menu-wrapper-flex-container' as='nav'>
      {dataMenu.length > 0 &&
        dataMenu.map((items, index) => {
          return (
            <Link key={`menu-item-${index}`} className='menu-link menu-link-margin' to={items.link}>
              {items.name === 'Platos Principales' || items.name === 'Comida Rápida' ? (
                <span className='menu-link-items'>
                  {screen.width <= 1080 ? getDivideText(items.name, ' ', 1) : items.name}
                </span>
              ) : (
                <span className='menu-link-items'> {items.name} </span>
              )}
            </Link>
          );
        })}
    </WrapperFlex>
  );
};
