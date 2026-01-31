import AnimatedRoutes from '../animated-routes';
import Footer from '../footer';
import Header from '../header';
import styles from './styles.module.scss';

const AppLayout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default AppLayout;
