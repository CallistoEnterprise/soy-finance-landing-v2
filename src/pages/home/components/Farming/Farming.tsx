import React from "react";
import styles from "./Farming.module.scss";
import Svg from "../../../../components/atoms/Svg";

export default function Farming() {
  return <div className={styles.farming}>
    <div className={styles.backdrop} />
    <div className={styles.content}>
      <p className={styles.heading}>Yield Farming</p>
      <p className={styles.subheading}>The Lush Life of High APRs</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={"/images/homepage/SOY.svg"} />
            <Svg iconName="add-token" />
            <img src={"/images/homepage/ccLINA.svg"} />
          </div>

          <p className={styles.name}>SOY - ccLINA</p>
          <p className={styles.info}>APR: 38.44%</p>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={"/images/homepage/SOY.svg"} />
            <Svg iconName="add-token" />
            <img src={"/images/homepage/ccCAKE.svg"} />
          </div>
          <p className={styles.name}>SOY - ссСAKE</p>
          <p className={styles.info}>APR: 38.44%</p>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={"/images/homepage/CLOE.svg"} />
            <Svg iconName="add-token" />
            <img src={"/images/homepage/SOY.svg"} />
          </div>
          <p className={styles.name}>CLOE - SOY</p>
          <p className={styles.info}>APR: 38.44%</p>
        </div>
      </div>
    </div>
  </div>;
}
