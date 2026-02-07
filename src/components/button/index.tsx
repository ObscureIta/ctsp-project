import type { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  label: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
