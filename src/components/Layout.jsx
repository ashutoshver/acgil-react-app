// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
