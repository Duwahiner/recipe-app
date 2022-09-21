import styled from '@emotion/styled';

import { useAppSelector } from 'hooks/useStore';
import { RecipeCard } from 'components/RecipeCard';
import { WrapperFlex } from 'components/WrapperFlex';
import { getDataResipes, getSearch } from 'store/selectors';
import { getNumber } from 'utils/getNumber';
import { NFound } from 'components/NFound';

const ContainerTitleRecipes = styled.div``;

export const CurrentRecipes: React.FC = () => {
  const dataRecipes = useAppSelector(getDataResipes);
  const textSearch = useAppSelector(getSearch);

  return (
    <WrapperFlex className='current-recipe-wrapper-flex-container'>
      <ContainerTitleRecipes className='current-recipe-container-title'>
        <h3 className='current-recipe-title'>{textSearch}</h3>
      </ContainerTitleRecipes>

      <WrapperFlex
        className={
          dataRecipes && dataRecipes.length > 0
            ? 'current-recipe-wrapper-flex-container-cards'
            : 'current-recipe-wrapper-flex-container-not-found'
        }
      >
        {dataRecipes && dataRecipes.length > 0 ? (
          dataRecipes.map((items, index) => {
            return (
              <RecipeCard
                data={items.recipe}
                key={`recipe-item-${index}`}
                numberStart={getNumber(5)}
              />
            );
          })
        ) : (
          <NFound title='No hemos encontrado resultados' showButton={false} />
        )}
      </WrapperFlex>
    </WrapperFlex>
  );
};
