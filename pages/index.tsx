import type { NextPage } from 'next';
import { About } from '../components/organisms/About';
import { Features } from '../components/organisms/Features';
import { Hero } from '../components/organisms/Hero';
import { MintPass } from '../components/organisms/MintPass';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Features></Features>
      <MintPass></MintPass>
      <About></About>
    </Layout>
  );
};

export default Home;
