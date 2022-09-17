import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';
import vegetarianIcon from 'assets/svg/vegetarian.svg';
import imagMainIojingeoMuchim from 'assets/images/ojingeo-muchim-5.png';
import { FavoriteIcon, LikeIcon } from 'components/Icons';
import { ItemsSpecializations } from 'components/ItemsSpecializations';
import { ThemeApp } from 'types/theme';
import { useScreen } from 'hooks/useScreen';

const dataRecipes = [
  {
    name: 'Vegetarianos',
    link: '/vegetarianos',
    active: false,
    subMenu: false,
    src: vegetarianIcon,
  },
];

const CardContents = styled.div``;
const ItemsCardImg = styled.div``;
const ContainerFavoriteAndStart = styled.div``;
const ContainerCardContentsTitle = styled.div``;
const ContainerStart = styled.div``;
const ContainerFavotite = styled.div``;
const Images = styled.img``;
const ContainerSpecializations = styled.div``;

export const RecipeCard: React.FC = () => {
  const theme = useTheme() as ThemeApp;
  const screen = useScreen();

  return (
    <WrapperFlex className='recipe-card-wrapper-flex-container'>
      <ItemsCardImg className='recipe-card-item-card-container'>
        <Images className='recipe-card-image' src={imagMainIojingeoMuchim} />
      </ItemsCardImg>

      <CardContents className='recipe-card-card-contents-container'>
        <ContainerSpecializations className='recipe-card-specializations-container'>
          <ItemsSpecializations />
        </ContainerSpecializations>

        <ContainerCardContentsTitle className='recipe-card-card-contents-title-container'>
          <span className='current-banner-title'> Ojingeo </span>
          <span className='current-banner-subtitle'> Muchim </span>
        </ContainerCardContentsTitle>

        <ContainerFavoriteAndStart className='recipe-card-container-favorite-start'>
          <ContainerStart>
            <span className=''>
              <FavoriteIcon color={theme.colors.favorite200} size={screen.breakpoint === 'xs' ? '14px' : '20px'} />
            </span>
            <span className='recipe-card-text-start'> 5.0 </span>
          </ContainerStart>

          <ContainerFavotite>
            <span className=''>
              <LikeIcon color={theme.colors.prymary} size={screen.breakpoint === 'xs' ? '14px' : '20px'} />
            </span>
          </ContainerFavotite>
        </ContainerFavoriteAndStart>
      </CardContents>
    </WrapperFlex>
  );
};
