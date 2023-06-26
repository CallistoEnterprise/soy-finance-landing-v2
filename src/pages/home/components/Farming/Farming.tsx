import React from "react";
import styles from "./Farming.module.scss";
import Svg from "../../../../components/atoms/Svg";
import { useFarmingAPR } from "../../hooks/useMetrics";

const getShortenNumber = (value: number): number => {
  return (Math.floor(value * 100)) / 100
}

export default function Farming() {
  const data = useFarmingAPR();

  return <div className={styles.farming}>
    <div className={styles.backdrop} />
    <div className={styles.content}>
      <p className={styles.heading}>Yield Farming</p>
      <p className={styles.subheading}>The Lush Life of High APRs</p>
      <div className={styles.cards}>
        {data.map(farm => {
          return <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={"/images/homepage/SOY.svg"} />
              <Svg iconName="add-token" />
              <img src={"/images/homepage/ccLINA.svg"} />
            </div>

            <p className={styles.name}>{farm.name}</p>
            <p className={styles.info}>APR: {getShortenNumber(farm.apr)}%</p>
          </div>
        })}
      </div>
    </div>
  </div>;
}
