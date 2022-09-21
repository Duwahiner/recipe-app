import { useEffect } from 'react';

import { CurrentRecipes } from 'components/CurrentRecipes';
import { Layout } from 'components/Layout';
import { setPageTitle } from 'utils/setPageTitle';

const Vegetarians = () => {
  useEffect(() => {
    setPageTitle('Vegetarianos');
  }, []);

  return (
    <div>
      <Layout>
        <CurrentRecipes />
      </Layout>
    </div>
  );
};

export default Vegetarians;
