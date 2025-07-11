import feature1 from '../assets/customSolution.jpeg';
import feature2 from '../assets/expertConsulting.jpeg';
import feature3 from '../assets/InitiativeChallenge.jpeg';
import feature4 from '../assets/ItConsulting.jpeg';

const Features = () => {
  const features = [
    {
      icon: feature1,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your business needs and growth objectives."
    },
    {
      icon: feature2,
      title: "Expert Consulting",
      description: "Strategic guidance from industry experts to help you navigate digital transformation."
    },
    {
      icon: feature3,
      title: "Innovative Technology",
      description: "Leveraging cutting-edge technologies to give your business a competitive advantage."
    },
    {
      icon: feature4,
      title: "IT Consulting",
      description: "Leveraging cutting-edge technologies to give your business a competitive advantage."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through innovative solutions and unparalleled expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-full h-50 mb-6 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                <img src={feature.icon} alt={feature.title} className="w-full h-50 rounded-sm" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;