import Header from '../header';
import Footer from '../footer';
import AnimatedRoutes from '../animated-routes';
import styles from './styles.module.scss';
import { useCarousel } from '../../domain/carousel/use-carousel-context';
import ArrowLeft from '../../components/icon-left';

const AppLayout: React.FC = () => {
  const { isFirstElement, isLastElement, next, prev } = useCarousel();

  return (
    <div className={styles.appContainer}>
      <Header />
      <AnimatedRoutes />
      <div className={`${styles.carouselControls} ${isFirstElement ? styles.rightOnly : ''}`}>
        {!isFirstElement && (
          <button onClick={prev} className="left">
            <ArrowLeft className={styles.arrowIcon} />
          </button>
        )}
        {!isLastElement && (
          <button onClick={next} className="right">
            <ArrowLeft className={`${styles.arrowRight} ${styles.arrowIcon}`} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
