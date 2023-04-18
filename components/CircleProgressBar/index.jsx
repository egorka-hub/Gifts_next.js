import { useState } from "react";

import styles from "./index.module.scss";

import CLOCK_ARROW from "../../public/clockarrow.svg";
import LINES from "../../public/lines.svg";

const PURPLE_COLOR = "#7A0BC0";
const BLUE_COLOR = "#0B8AC0";
const PINK_COLOR = "#E105E5";

const CircleProgressBar = () => {
  const [values, setValues] = useState({
    deg: 0,
    color: PURPLE_COLOR,
    step: 1,
  });

  const handleSetValues = (deg, color, step) => {
    setValues({ deg, color, step });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.lines}>
          <img src={LINES.src} alt={""} />
        </div>
        <div className={styles.parts}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="314"
            height="314"
            viewBox="0 0 314 314"
            fill="none"
          >
            <path
              d="M312.857 141.421C315.812 170.995 310.29 200.799 296.938 227.351L268.953 213.279C279.634 192.037 284.051 168.194 281.688 144.535L312.857 141.421Z"
              fill={values.color}
            />
            <path
              d="M266.459 44.9551C287.719 65.7242 302.63 92.1136 309.452 121.041L278.964 128.231C273.506 105.089 261.577 83.9772 244.569 67.3619L266.459 44.9551Z"
              fill={values.color}
            />
            <path
              d="M168.791 0.810367C198.428 3.04585 226.817 13.6677 250.642 31.4354L231.916 56.5462C212.855 42.3321 190.144 33.8346 166.435 32.0462L168.791 0.810367Z"
              fill={values.color}
            />
            <path
              d="M65.8093 29.659C89.9717 12.3526 118.56 2.27826 148.234 0.612799L149.989 31.8881C126.25 33.2205 103.379 41.2799 84.0495 55.1251L65.8093 29.659Z"
              fill={values.step >= 3 ? values.color : "white"}
            />
            <path
              d="M5.30115 118.067C12.6872 89.2782 28.1119 63.1854 49.7738 42.836L71.2212 65.6667C53.8916 81.9462 41.5518 102.82 35.643 125.851L5.30115 118.067Z"
              fill={values.step >= 3 ? values.color : "white"}
            />
            <path
              d="M15.8205 224.784C2.9557 197.991 -2.02025 168.092 1.47377 138.577L32.5811 142.259C29.7859 165.871 33.7666 189.791 44.0584 211.225L15.8205 224.784Z"
              fill={values.step >= 3 ? values.color : "white"}
            />
            <path
              d="M92.4159 299.672C65.3403 287.414 42.3113 267.706 26.0185 242.849L52.2169 225.677C65.2511 245.563 83.6744 261.329 105.335 271.135L92.4159 299.672Z"
              fill={values.step >= 2 ? values.color : "white"}
            />
            <path
              d="M199.273 307.802C170.655 315.822 140.345 315.534 111.885 306.971L120.91 276.974C143.678 283.825 167.926 284.056 190.821 277.64L199.273 307.802Z"
              fill={values.step >= 2 ? values.color : "white"}
            />
            <path
              d="M286.368 245.291C269.612 269.838 246.217 289.111 218.916 300.859L206.535 272.085C228.376 262.687 247.092 247.269 260.497 227.631L286.368 245.291Z"
              fill={values.step >= 2 ? values.color : "white"}
            />
          </svg>
        </div>
        <div className={styles.arrow}>
          <img
            style={{ transform: `rotate(${values.deg}deg)` }}
            src={CLOCK_ARROW.src}
            alt={""}
          />
        </div>
        <div
          className={styles.circle}
          style={{ backgroundColor: values.color }}
        />
      </div>
      <div className={styles.buttons}>
        <div style={{backgroundColor: values.step === 1 ? PURPLE_COLOR : 'transparent'}} onClick={() => handleSetValues(0, PURPLE_COLOR, 1)}>level 1</div>
        <div style={{backgroundColor: values.step === 2 ? BLUE_COLOR : 'transparent'}} onClick={() => handleSetValues(120, BLUE_COLOR, 2)}>level 2</div>
        <div style={{backgroundColor: values.step === 3 ? PINK_COLOR : 'transparent'}} onClick={() => handleSetValues(240, PINK_COLOR, 3)}>level 3</div>
      </div>
    </div>
  );
};

export default CircleProgressBar;
