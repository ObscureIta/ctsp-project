import { NavLink } from 'react-router';

const navItems = [
  { path: '/clock', label: 'Clock' },
  { path: '/timer', label: 'Timer' },
  { path: '/stopwatch', label: 'Stopwatch' },
  { path: '/pomodoro', label: 'Pomodoro' },
];

const Header = () => {
  return (
    <header>
      <h1>CTSP</h1>
      <nav>
        {navItems.map((navItem) => {
          return <NavLink to={navItem.path}>{navItem.label}</NavLink>;
        })}
      </nav>
    </header>
  );
};

export default Header;
