import React from "react";
import styles from "./BridgeBlock.module.scss";

export default function BridgeBlock() {
  return <div className={styles.bridge}>
    <h1 className={styles.heading}>SOY Bridge — Uniting Blockchains for <br/> Safe Trading</h1>
    <p className={styles.subheading}>SOY Bridge brings the safety of SOY Finance to the most popular blockchains,
      enabling seamless cross-chain DeFi interactions and secure trading for a wide range of users.</p>
    <div className={styles.centerImage}>
      <img src="/images/homepage/bridge-center.png" alt=""/>
    </div>
    <div className={styles.bottomContent}>
      <p className={styles.bottomHeading}>Callisto Network, a Fortress of Crypto-Security</p>
      <p className={styles.bottomParagraph}>Chosen for its unmatched safety, Callisto Network is crafted by top crypto-security experts. With no hacks or 51% attacks in its history, dApps on Callisto are the gold standard for security in the blockchain ecosystem.</p>
      <div className={styles.bottomImg}>
        <img src="images/homepage/man-on-rocket.png" alt="" />
      </div>
    </div>
  </div>;
}
