import c from 'classnames'

import styles from "./index.module.scss";

const Button = ({ title, className }) => {
  const additionalClass = className ? ` ${className}` : ''

  return (
    <div className={c(styles.btn + additionalClass)}>
      <span>{title}</span>
    </div>
  );
};

export default Button;
