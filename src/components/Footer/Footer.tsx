import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <p>
      Challenge by &nbsp;
      <a
        className={styles.name}
        href="https://www.speedcast.com/"
        target="_blank"
      >
        Speedcast
      </a>
    </p>
  );
};
