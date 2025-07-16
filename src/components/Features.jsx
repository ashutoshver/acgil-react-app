import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faServer, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FaCode } from "react-icons/fa";

const Features = () => {
 const features = [
  {
    icon: <FontAwesomeIcon icon={faBolt} className="w-12 h-12 text-indigo-600" />,
    title: "Fast Performance",
    description:
      "Optimized solutions that deliver blazing fast performance for your business needs.",
  },
  {
    icon: <FaCode className="w-12 h-12 text-indigo-600" />,
    title: "Custom Development",
    description:
      "Tailored software solutions designed specifically for your unique requirements.",
  },
  {
    icon: <FontAwesomeIcon icon={faServer} className="w-12 h-12 text-indigo-600" />,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your business growth.",
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="w-12 h-12 text-indigo-600" />,
    title: "Data Analytics",
    description:
      "Actionable insights derived from your data to drive business decisions.",
  },
];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional solutions that drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
