import { useEffect } from 'react';

import { CurrentRecipes } from 'components/CurrentRecipes';
import { Layout } from 'components/Layout';
import { setPageTitle } from 'utils/setPageTitle';

const KidsMenu = () => {
  useEffect(() => {
    setPageTitle('Menú Niños');
  }, []);

  return (
    <div>
      <Layout>
        <CurrentRecipes />
      </Layout>
    </div>
  );
};

export default KidsMenu;
