import { useEffect } from 'react';

import { CurrentRecipes } from 'components/CurrentRecipes';
import { Layout } from 'components/Layout';
import { setPageTitle } from 'utils/setPageTitle';

const Cakes = () => {
  useEffect(() => {
    setPageTitle('Tortas');
  }, []);

  return (
    <div>
      <Layout>
        <CurrentRecipes />
      </Layout>
    </div>
  );
};

export default Cakes;
