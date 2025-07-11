import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  //for changing the color on scrolling
  const headerBg = !isHomePage 
    ? "bg-white shadow-md py-2" 
    : scrolled 
      ? "bg-white shadow-md py-2" 
      : "bg-transparent py-4";

  const getTextColor = (path) => {
    const isActive = location.pathname === path;
    if (isActive) return "text-indigo-300";
    
    return !isHomePage 
      ? "text-gray-700 hover:text-indigo-600" 
      : scrolled 
        ? "text-gray-700 hover:text-indigo-600" 
        : "text-white hover:text-indigo-300";
  };

  const buttonColor = !isHomePage
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : scrolled
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : "bg-white hover:bg-gray-100 text-indigo-600";

  const menuButtonColor = !isHomePage 
    ? "text-gray-700" 
    : scrolled 
      ? "text-gray-700" 
      : "text-white";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          {/* <img src={logo} alt="ACGIL Logo" className="h-10" /> */}
          <h1 className={`transition-colors font-medium ${getTextColor()} font-extrabold text-4xl font-serif`}>ACGIL</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors font-medium ${getTextColor(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:block px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${buttonColor}`}
        >
          Get a Quote
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden focus:outline-none ${menuButtonColor}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg transition-all duration-300`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive ? "text-indigo-600" : "text-gray-700"
                } hover:text-indigo-600 transition-colors font-medium py-2`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 text-center"
            onClick={closeMobileMenu}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;