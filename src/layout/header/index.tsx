import { routes } from '../../features/routesConfig';
import { useCarousel } from '../../domain/carousel/use-carousel-context';
import styles from './styles.module.scss';

const Header = () => {
  const { currentIndex, navigateTo } = useCarousel();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>CTSP</h1>

        <nav className={styles.nav}>
          <ul className={styles.linkList}>
            {routes.map((route, idx) => (
              <li key={route.path}>
                <a
                  href={route.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (idx !== currentIndex) navigateTo(idx);
                  }}
                  className={idx === currentIndex ? styles.activeLink : styles.link}
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
