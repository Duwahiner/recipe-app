import styled from '@emotion/styled';
import { RecipeCard } from 'components/RecipeCard';

import { WrapperFlex } from 'components/WrapperFlex';

const ContainerTitleRecipes = styled.div``;

export const CurrentRecipes: React.FC = () => {
  return (
    <WrapperFlex className='current-recipe-wrapper-flex-container'>
      <ContainerTitleRecipes className='current-recipe-container-title'>
        <h3 className='current-recipe-title'> Nuevas Recetas </h3>
      </ContainerTitleRecipes>

      <WrapperFlex className='current-recipe-wrapper-flex-container-cards'>
        <WrapperFlex>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </WrapperFlex>
      </WrapperFlex>
    </WrapperFlex>
  );
};
