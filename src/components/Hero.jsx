import { Link } from "react-router-dom";
import heroBg from "../assets/hero.avif";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="ACGIL Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-70"></div>
      </div>

      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Innovating Solutions for Tomorrow
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fadeIn delay-100">
          Empowering Businesses with Cutting-Edge Technology and Strategic
          Consulting
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
          <Link
            to="/services"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
