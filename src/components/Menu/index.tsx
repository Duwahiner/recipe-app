import { Link } from 'react-router-dom';

import { WrapperFlex } from 'components/WrapperFlex';
import { useScreen } from 'hooks/useScreen';
import { getDivideText } from 'utils/getDivideText';
import { MenuProps } from 'types/components';

export const Menu: React.FC<MenuProps> = ({ dataMenu, handleCurrentActiveItem }) => {
  const screen = useScreen();

  return (
    <WrapperFlex className='menu-wrapper-flex-container' as='nav'>
      {dataMenu.length > 0 &&
        dataMenu.map((items, index) => {
          return (
            <Link
              key={`menu-item-${index}`}
              className='menu-link menu-link-margin'
              to={items.link}
              onClick={() => handleCurrentActiveItem(items.name.toLowerCase())}
            >
              {items.name === 'Platos Principales' || items.name === 'Comida Rápida' ? (
                <span className={items.active ? 'menu-link-items-active' : 'menu-link-items'}>
                  {screen.width <= 1080 ? getDivideText(items.name, ' ', 1) : items.name}
                </span>
              ) : (
                <span className={items.active ? 'menu-link-items-active' : 'menu-link-items'}>
                  {items.name}
                </span>
              )}
            </Link>
          );
        })}
    </WrapperFlex>
  );
};
