import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';
import { MenuFloatProps } from 'types/components';

const ItemsCardMenu = styled.div``;
const ContainerTextLink = styled.span``;
const ContainerIcons = styled.span``;
const Images = styled.img``;

export const MenuFloat: React.FC<MenuFloatProps> = ({
  dataMenuFloat,
  handleCurrentActiveItemFloat,
}) => {
  return (
    <WrapperFlex className='menu-float-wrapper-flex-container' as='nav'>
      {dataMenuFloat.length > 0 &&
        dataMenuFloat.map((items, index) => {
          return (
            <Link
              key={`menu-items-${index}`}
              className='menu-float-link'
              to={items.link}
              onClick={() => handleCurrentActiveItemFloat(items.name.toLowerCase())}
            >
              <ItemsCardMenu className='menu-float-items-card-container'>
                <ContainerIcons className='menu-float-container-icons'>
                  <Images src={items.src} />
                </ContainerIcons>

                <ContainerTextLink>
                  <span
                    className={
                      items.active ? 'menu-float-link-items-active' : 'menu-float-link-items'
                    }
                  >
                    {items.name}
                  </span>
                </ContainerTextLink>
              </ItemsCardMenu>
            </Link>
          );
        })}
    </WrapperFlex>
  );
};
