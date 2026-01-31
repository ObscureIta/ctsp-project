import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.signature}>
        <span>Made by</span>
        <a
          href="https://github.com/ObscureIta"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          ObscureITA
        </a>
      </div>
    </footer>
  );
};

export default Footer;
