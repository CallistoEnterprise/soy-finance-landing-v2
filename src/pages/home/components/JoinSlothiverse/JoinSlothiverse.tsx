import React from "react";
import styles from "./JoinSlothiverse.module.scss";
import Flex from "../../../../components/layout/Flex";
import Text from "../../../../components/atoms/Text";
import Button from "../../../../components/atoms/Button";
import Svg from "../../../../components/atoms/Svg";

export default function JoinSlothiverse() {
  return <div className={styles.join}>
      <div className={styles.image}>
        <img src="/images/homepage/join.png" alt=""/>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>
          Join the Slothiverse Today!
        </h2>

        <p className={styles.paragraph}>
          SOY tokenomics are designed to nurture your wealth in the Slothiverse.
          Soy Finance takes DeFi to the next level with cutting-edge token technology and a seamless experience
          at 99% less cost than leading competitors.
          Begin your Sloth journey and start trading, farming, and staking on a secure
          platform built on the Callisto Network!
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
