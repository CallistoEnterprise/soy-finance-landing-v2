import React from "react";
import styles from "./JoinSlothiverse.module.scss";
import Svg from "../../../../components/atoms/Svg";
import {Fade} from "react-awesome-reveal";

export default function JoinSlothiverse() {
  return <div className={styles.join}>
    <div className={styles.image}>
      <picture >
        <source srcSet="/images/homepage/join-x05.webp" media="(max-width: 1024px)"/>
        <img className={styles.bg} src="/images/homepage/join.webp" alt=""/>
      </picture>

      <Fade direction="right" style={{width: "30%", height: "84%", top: 0, position: "absolute", left: 10}}>
        <picture>
          <source srcSet="/images/homepage/column-x05.webp" media="(max-width: 1024px)"/>
          <img className={styles.movable} src="/images/homepage/column.webp" alt=""/>
        </picture>
      </Fade>
    </div>
    <div className={styles.textBlock}>
      <h2 className={styles.heading}>
        Join the Slothiverse Today!
      </h2>

      <p className={styles.paragraph}>
        Sloth Finance takes DeFi to the next level with the latest technologies and a seamless experience at 99% less cost
        than competitors.

        <br/>
        <br/>

        Begin your Sloth journey and start trading, farming, and staking on the most secure DeFi platform!
      </p>
      <div className={styles.buttonBlock}>
        <a target="_blank" href="https://app.soy.finance/swap">
          <button className={styles.button}>
            <span>
              Start your Sloth Adventure
            </span>
            <span className={styles.icon}>
              <Svg iconName="arrow-right"/>
            </span>
          </button>
        </a>
      </div>
    </div>
  </div>;
}
