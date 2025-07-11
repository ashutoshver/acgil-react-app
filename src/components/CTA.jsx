import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Let's discuss how ACGIL can help you achieve your goals with our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </Link>
          <Link 
            to="/services" 
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;