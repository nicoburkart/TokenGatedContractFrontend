import type { NextPage } from 'next';
import { Hero } from '../components/organisms/Hero';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero></Hero>
    </Layout>
  );
};

export default Home;
