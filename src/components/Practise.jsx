import React from "react";
import "./practise.css";
import styles from "./practise.module.css";
const Practise = () => {
  return (
    <div>
      <p className="good-text">This is good text</p>
      <p className={styles.niceText}>This is nice text</p>
    </div>
  );
};

export default Practise;
