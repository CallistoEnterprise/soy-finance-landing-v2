import React from "react";
import styles from "./Farming.module.scss";
import Svg from "../../../../components/atoms/Svg";
import { useFarmingAPR } from "../../hooks/useMetrics";
import {getLogo} from "../../../../shared/getLogo";

const getShortenNumber = (value: number): number => {
  return (Math.floor(value * 100)) / 100
}

export default function Farming() {
  const data = useFarmingAPR();

  console.log(data);

  return <div className={styles.farming}>
    <div className={styles.backdrop} />
    <div className={styles.content}>
      <p className={styles.heading}>Yield Farming</p>
      <p className={styles.subheading}>The Lush Life of High APRs</p>
      <div className={styles.cards}>
        {data.map(farm => {
          return <div key={farm.name} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={getLogo({address: farm.token0})} />
              <Svg iconName="add-token" />
              <img src={getLogo({address: farm.token1})} />
            </div>

            <p className={styles.name}>{farm.name}</p>
            <p className={styles.info}>APR: {getShortenNumber(farm.apr)}%</p>
          </div>
        })}
      </div>
    </div>
  </div>;
}
