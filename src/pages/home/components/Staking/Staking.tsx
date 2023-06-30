import React from "react";
import styles from "./Staking.module.scss";
import {Fade} from "react-awesome-reveal";
import {useStakingAPR} from "../../hooks/useStakingApr";

const getShortenNumber = (value: BigInt): number => {
  return Number(value) / 100;
}

export default function Staking() {
  const stakingAPR = useStakingAPR();

  return <div className={styles.staking}>
    <div className={styles.backdrop}/>
    <div className={styles.content}>
      <p className={styles.heading}>SOY Staking</p>
      <p className={styles.subheading}>Grow your SOY Garden</p>
      <div className={styles.cards}>
        <Fade direction="up" triggerOnce>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={"/images/all-tokens/SOY.svg"} alt=""/>
            </div>
            <p className={styles.name}>SOY</p>
            <p className={styles.info}>APR: {getShortenNumber(stakingAPR)}%</p>
          </div>
        </Fade>

      </div>
    </div>
  </div>;
}
