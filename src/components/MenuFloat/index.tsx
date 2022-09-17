import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';
import vegetarianIcon from 'assets/svg/vegetarian.svg';
import mainIcon from 'assets/svg/main.svg';
import cakeIcon from 'assets/svg/cake.svg';
import fastFoodIcon from 'assets/svg/fast-food.svg';
import kidsIcon from 'assets/svg/kids.svg';
import soupIcon from 'assets/svg/soup.svg';

const dataMenu = [
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

const ItemsCardMenu = styled.div``;
const ContainerTextLink = styled.span``;
const ContainerIcons = styled.span``;
const Images = styled.img``;

export const MenuFloat: React.FC = () => {
  return (
    <WrapperFlex className='menu-float-wrapper-flex-container' as='nav'>
      {dataMenu.length > 0 &&
        dataMenu.map((items, index) => {
          return (
            <Link key={`menu-items-${index}`} className='menu-float-link' to={items.link}>
              <ItemsCardMenu className='menu-float-items-card-container'>
                <ContainerIcons className='menu-float-container-icons'>
                  <Images src={items.src} />
                </ContainerIcons>

                <ContainerTextLink>
                  <span className='menu-float-link-items'> {items.name} </span>
                </ContainerTextLink>
              </ItemsCardMenu>
            </Link>
          );
        })}
    </WrapperFlex>
  );
};
