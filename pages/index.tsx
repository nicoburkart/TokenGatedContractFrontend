import type { NextPage } from 'next';
import { Features } from '../components/organisms/Features';
import { Hero } from '../components/organisms/Hero';
import { MintPass } from '../components/organisms/MintPass';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero></Hero>
      <Features></Features>
      <MintPass></MintPass>
    </Layout>
  );
};

export default Home;
