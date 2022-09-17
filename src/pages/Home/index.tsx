import { CurrentRecipes } from 'components/CurrentRecipes';
import { Layout } from 'components/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <CurrentRecipes />
      </Layout>
    </div>
  );
};

export default Home;
