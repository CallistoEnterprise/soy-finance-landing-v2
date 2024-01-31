import React from "react";
import styles from "./EmpowerGrowth.module.scss";

export default function EmpowerGrowth() {
  return <div className={styles.empower}>
    <div className={styles.textBlock}>
      <h2 className={styles.heading}>
        <span className={styles.green}>SLOFI</span>
        {" "}
        Token — Empower your Growth in the Slothiverse
      </h2>
      <p className={styles.paragraph}>Built on innovative tokenomics, SLOFI features a &apos;Buyback & Burn&apos; mechanism designed to grow your wealth.
        <br/>
        <br/>
        Join the Sloth family and have a say in Sloth Finance&apos;s governance, shaping the platform&apos;s future together!
      </p>
    </div>
    <div className={styles.image}>
      <img className={styles.base} src="/images/homepage/empower.webp" alt="Up to 20% Trading Fees"/>
      <img className={styles.soy} src="/images/all-tokens/SLOFI_TRANSPARENT.svg" alt="Soy logotype" />

      <div className={styles.sleep}>
        <div className={styles.sleep1} />
        <div className={styles.sleep2} />
        <div className={styles.sleep3} />
      </div>
    </div>
  </div>;
}
