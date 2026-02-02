// header/index.tsx
import { NavLink } from 'react-router';
import styles from './styles.module.scss';
import { routes } from '../../features/routesConfig';
import { useCarousel } from '../../domain/carousel/use-carousel-context';

const Header = () => {
  const { currentIndex, navigateTo } = useCarousel();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>
          <NavLink to="/">CTSP</NavLink>
        </h1>
      </div>

      <nav className={styles.centerSection}>
        <ul className={styles.linkList}>
          {routes.map((route, idx) => (
            <li key={route.path}>
              <a
                href={route.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (idx !== currentIndex) navigateTo(idx);
                }}
                className={idx === currentIndex ? styles.activeLink : ''}
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.rightSection} />
    </header>
  );
};

export default Header;
