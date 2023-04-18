import styles from "./index.module.scss";

const SmallBtn = ({ title }) => {
  return <button className={styles.btn}>{title}</button>;
};

export default SmallBtn;
