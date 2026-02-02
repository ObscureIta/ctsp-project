import Header from '../header';
import Footer from '../footer';
import AnimatedRoutes from '../animated-routes';
import styles from './styles.module.scss';
import { useCarousel } from '../../domain/carousel/use-carousel-context';

const AppLayout: React.FC = () => {
  const { next, prev } = useCarousel();

  return (
    <div className={styles.appContainer}>
      <Header />
      <AnimatedRoutes />
      <div className={styles.carouselControls}>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
