import styles from './styles.module.scss';

type InputProps = {
  min?: string;
  max: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisable: boolean;
};

const Input = ({ label, value, onChange, isDisable, min = '0', max }: InputProps) => {
  return (
    <label>
      <div className={styles.label}>{label}</div>
      <input
        id={`${label}Input`}
        type="number"
        min={min}
        max={max}
        placeholder="0"
        value={value}
        onChange={onChange}
        disabled={isDisable}
        className={styles.input}
      />
    </label>
  );
};

export default Input;
