import { useEffect } from 'react';

import { CurrentRecipes } from 'components/CurrentRecipes';
import { Layout } from 'components/Layout';
import { setPageTitle } from 'utils/setPageTitle';

const FastFood = () => {
  useEffect(() => {
    setPageTitle('Comida Rápida');
  }, []);

  return (
    <div>
      <Layout>
        <CurrentRecipes />
      </Layout>
    </div>
  );
};

export default FastFood;
