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
      <p className={styles.paragraph}>SOY tokenomics is designed to grow your wealth.
        Built on an innovative monetary policy, SOY features a &apos;Buyback & Burn&apos; mechanism
        and rewards holders with up to 20% of the platform&apos;s transaction fees.
        <br/>
        <br/>
        Join the Sloth family and have a say in SOY Finance&apos;s governance, shaping the platform&apos;s future together!
      </p>
    </div>
    <div className={styles.image}>
      <img className={styles.base} src="/images/homepage/empower.png" alt=""/>
      <img className={styles.soy} src="/images/homepage/soy-logo.png" />

      <div className={styles.sleep}>
        <img className={styles.sleep1} src="/images/homepage/z.png" />
        <img className={styles.sleep2} src="/images/homepage/z.png" />
        <img className={styles.sleep3} src="/images/homepage/z.png" />
      </div>
    </div>
  </div>;
}
