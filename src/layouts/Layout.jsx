import Header from '../components/Header/header';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="containerLayout">
      <Header title="Titulo principal" description="description" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
