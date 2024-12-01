import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1> CSS, Javascript, API</h1>
      <h2>Contacts Application</h2>
      <p>
        View basic info of contacts in a 3x2 layout. Click on the magnifier icon
        to open a modal and view detailed contact info contact
      </p>
    </div>
  );
};
