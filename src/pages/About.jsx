// About.jsx
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About ACGIL
          </h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600">
            <p className="mb-6">
              ACGIL is a leading technology solutions provider dedicated to
              helping businesses innovate and grow in the digital age. Founded
              in 2010, we've been at the forefront of technological
              advancements, delivering custom solutions to clients across
              various industries.
            </p>
            <p className="mb-6">
              Our team of experts combines technical expertise with business
              acumen to create solutions that not only solve immediate
              challenges but also position our clients for long-term success.
            </p>
            <p>
              We believe in the power of technology to transform businesses and
              create opportunities. Our mission is to make cutting-edge
              technology accessible and beneficial to organizations of all
              sizes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
