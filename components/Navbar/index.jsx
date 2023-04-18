import React, { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

const Navbar = ({ handleClose, isOpen }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.show]: isOpen,
        [styles.close]: !isOpen,
      })}
    >
      <div onClick={handleClose} className={styles.closeBtn}>
        <svg
          className={styles.svg}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8334 2.75166L23.2484 0.166664L13.0001 10.415L2.75175 0.166664L0.166748 2.75166L10.4151 13L0.166748 23.2483L2.75175 25.8333L13.0001 15.585L23.2484 25.8333L25.8334 23.2483L15.5851 13L25.8334 2.75166Z"
            fill="white"
          />
        </svg>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.item}>
          <div className={styles.text}>Menu 1</div>
          <div className={styles.go}>Go</div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>Menu 2</div>
          <div className={styles.go}>Go</div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>Menu 3</div>
          <div className={styles.go}>Go</div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>Menu 4</div>
          <div className={styles.go}>Go</div>
        </div>
        <div className={styles.phone}>8 800 000 00 00</div>
      </nav>
    </div>
  );
};

export default Navbar;
