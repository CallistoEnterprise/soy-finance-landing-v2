import React from "react";
import styles from "./JoinSlothiverse.module.scss";
import Svg from "../../../../components/atoms/Svg";

export default function JoinSlothiverse() {
  return <div className={styles.join}>
      <div className={styles.image}>
        <img className={styles.movable} src="/images/homepage/column.png" alt="" />
        <img className={styles.bg} src="/images/homepage/join.png" alt=""/>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>
          Join the Slothiverse Today!
        </h2>

        <p className={styles.paragraph}>
          Soy Finance takes DeFi to the next level with the latest technologies and a seamless experience at 99% less cost than competitors.

          <br/>
          <br/>

          Begin your Sloth journey and start trading, farming, and staking on the most secure DeFi platform!
        </p>
        <div className={styles.buttonBlock}>
          <button className={styles.button}>
            <span>
              Start your Sloth Adventure
            </span>
            <span className={styles.icon}>
              <Svg iconName="arrow-right" />
            </span>
          </button>
        </div>
      </div>
  </div>;
}
