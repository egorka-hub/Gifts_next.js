import cn from "classnames";

import styles from "./index.module.scss";

function Container({ children, className }) {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
}

export default Container;
