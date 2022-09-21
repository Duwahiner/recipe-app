import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';
import { FavoriteIcon, LikeIcon } from 'components/Icons';
import { ItemsSpecializations } from 'components/ItemsSpecializations';
import { ThemeApp } from 'types/theme';
import { useScreen } from 'hooks/useScreen';
import { RecipeCardProps } from 'types/components';
import { getDivideText } from 'utils/getDivideText';

const CardContents = styled.div``;
const ItemsCardImg = styled.div``;
const ContainerFavoriteAndStart = styled.div``;
const ContainerCardContentsTitle = styled.div``;
const ContainerStart = styled.div``;
const ContainerFavotite = styled.div``;
const Images = styled.img``;
const ContainerSpecializations = styled.div``;

export const RecipeCard: React.FC<RecipeCardProps> = ({ data, numberStart }) => {
  const theme = useTheme() as ThemeApp;
  const screen = useScreen();

  return (
    <WrapperFlex className='recipe-card-wrapper-flex-container'>
      <ItemsCardImg className='recipe-card-item-card-container'>
        <Images className='recipe-card-image' src={data.image} />
      </ItemsCardImg>

      <CardContents className='recipe-card-card-contents-container'>
        <ContainerSpecializations className='recipe-card-specializations-container'>
          <ItemsSpecializations data={data} />
        </ContainerSpecializations>

        <ContainerCardContentsTitle className='recipe-card-card-contents-title-container'>
          <span> {getDivideText(data.label, ' ', 0)} </span>
          <span
            className={
              getDivideText(data.label, ' ', 1).length > 5 ? 'current-banner-subtitle' : ''
            }
          >
            {getDivideText(data.label, ' ', 1)}
          </span>
        </ContainerCardContentsTitle>

        <ContainerFavoriteAndStart className='recipe-card-container-favorite-start'>
          <ContainerStart>
            <span className=''>
              <FavoriteIcon
                color={theme.colors.favorite200}
                size={screen.breakpoint === 'xs' ? '14px' : '20px'}
              />
            </span>
            <span className='recipe-card-text-start'> {numberStart}.0 </span>
          </ContainerStart>

          <ContainerFavotite>
            <span className=''>
              <LikeIcon
                color={theme.colors.prymary}
                size={screen.breakpoint === 'xs' ? '14px' : '20px'}
              />
            </span>
          </ContainerFavotite>
        </ContainerFavoriteAndStart>
      </CardContents>
    </WrapperFlex>
  );
};
