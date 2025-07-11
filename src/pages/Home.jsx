import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Layout>
      <Hero />
      <Features />
      <CTA />
    </Layout>
    </div>
  );
};

export default Home;