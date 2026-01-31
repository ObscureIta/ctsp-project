import AnimatedRoutes from '../animated-routes';
import Footer from '../footer';
import Header from '../header';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default AppLayout;
