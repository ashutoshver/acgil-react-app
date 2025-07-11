import Layout from "../components/Layout";

const Services = () => {
  return (
    <Layout>
      <main className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h1>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Custom Software Development
              </h2>
              <p className="text-gray-600">
                Tailored software solutions designed to meet your specific
                business requirements and drive operational efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Cloud Solutions
              </h2>
              <p className="text-gray-600">
                Comprehensive cloud services including migration, optimization,
                and management to enhance scalability and reduce costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Data Analytics
              </h2>
              <p className="text-gray-600">
                Transform your data into actionable insights with our advanced
                analytics and business intelligence solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                IT Consulting
              </h2>
              <p className="text-gray-600">
                Strategic guidance to align your technology investments with
                business objectives and maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Services;
