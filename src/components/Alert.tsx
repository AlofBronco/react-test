// src/components/Alert.tsx

import clsx from 'clsx';
import css from './Alert.module.css';

interface AlertProps {
  type?: 'success' | 'error';
}

export default function Alert({ type }: AlertProps) {
  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>): void => {
    console.log(event);
  };

  return (
    <p className={clsx(css.alert, type && css[type])} onClick={handleClick}>
      This is a default alert text
    </p>
  );
}
