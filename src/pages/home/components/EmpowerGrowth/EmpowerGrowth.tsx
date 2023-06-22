import React from "react";
import styles from "./EmpowerGrowth.module.scss";

export default function EmpowerGrowth() {
  return <div className={styles.empower}>
    <div className={styles.textBlock}>
      <h2 className={styles.heading}>
        <span className={styles.green}>SOY</span>
        {" "}
        Token — Empower your Growth in the Slothiverse
      </h2>

      <p className={styles.paragraph}>SOY tokenomics are designed to nurture your wealth in the Slothiverse.
        Built on an innovative monetary policy, SOY features a &apos;Buyback & Burn&apos; mechanism and rewards holders with up to 20% of the platform&apos;s transaction fees.
        <br/>
        <br/>
        Join the Sloth family and have a say in SOY Finance&apos;s governance, shaping the platform&apos;s future together!</p>
    </div>
    <div className={styles.image}>
      <img src="/images/homepage/empower.png" alt=""/>
    </div>
  </div>;
}
