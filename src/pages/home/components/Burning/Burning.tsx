import React from "react";
import styles from "./Burning.module.scss";

export default function Burning() {
  return <div className={styles.burning}>
    <div className={styles.text}>
      <p className={styles.heading}>Total SOY Tokens Burned</p>
      <p className={styles.subheading}>Keeping it Lean & Green</p>
    </div>
    <img src="/images/homepage/lava.png" alt=""/>
  </div>;
}
