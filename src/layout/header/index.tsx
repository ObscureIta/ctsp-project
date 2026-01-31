import { NavLink } from 'react-router';
import styles from './styles.module.scss';

const navItems = [
  { path: '/clock', label: 'Clock' },
  { path: '/timer', label: 'Timer' },
  { path: '/stopwatch', label: 'Stopwatch' },
  { path: '/pomodoro', label: 'Pomodoro' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>
          <NavLink to="/">CTSP</NavLink>
        </h1>
      </div>
      <nav className={styles.centerSection}>
        <ul className={styles.linkList}>
          {navItems.map((navItem) => {
            return (
              <li>
                <NavLink to={navItem.path}>{navItem.label}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Правый блок — пустой, для баланса */}
      <div className={styles.rightSection}></div>
    </header>
  );
};

export default Header;
