import React from "react";
import styles from "./BridgeBlock.module.scss";
import Text from "../../../../components/atoms/Text";

export default function BridgeBlock() {
  return <div className={styles.bridge}>
    <div className={styles.topText}>
      <h1 className={styles.heading}>SOY Bridge <br/> Uniting Blockchains for Safe Trading</h1>
      <p className={styles.subheading}>SOY Bridge brings the safety of SOY Finance to the most popular blockchains,
        enabling seamless cross-chain DeFi interactions and secure trading for the whole crypto community.</p>
    </div>
    <div className={styles.centerImage}>
      <img className={styles.inner} src="/images/homepage/bridge-middle-inner.png" alt=""/>
      <img className={styles.outer} src="/images/homepage/bridge-middle-outer.png" alt=""/>
      <img className={styles.eth} src="/images/homepage/bridge-eth.png" alt=""/>
      <img className={styles.etc} src="/images/homepage/bridge-etc.png" alt=""/>
      <img className={styles.clo} src="/images/homepage/bridge-clo.png" alt=""/>
      <img className={styles.cube} src="/images/homepage/bridge-cube.png" alt=""/>
      <img className={styles.soyLogo} src="/images/homepage/soy-logo.png" alt=""/>
      <span className={styles.etcText}>
        Ethereum <br/> Classic
      </span>
      <span className={styles.ethText}>
        Ethereum
      </span>
      <div className={styles.flask}/>
    </div>
    <div className={styles.mobileCenter}>
      <div className={styles.mobileArmLt}>
        <img className={styles.arm} src="/images/homepage/arm-lt.png" alt=""/>
        <img className={styles.bscMob} src="/images/homepage/bridge-bsc.png" alt=""/>
        <span className={styles.bscTextMob}>
          Binance <br/> Smart Chain</span>
      </div>
      <div className={styles.mobileArmR }>
        <img className={styles.arm} src="/images/homepage/arm-rb-mob.png" alt=""/>
        <img className={styles.ethMob} src="/images/homepage/bridge-eth.png" alt=""/>
        <span className={styles.ethTextMob}>
          Ethereum</span>
      </div>
      <div className={styles.mobileArmLb}>
        <img className={styles.arm} src="/images/homepage/arm-lb-mob.png" alt=""/>
        <img className={styles.etcMob} src="/images/homepage/bridge-etc.png" alt=""/>
        <span className={styles.etcTextMob}>
          Ethereum <br/> Classic</span>
      </div>
      <div className={styles.mobileArmRb}>
        <img className={styles.arm} src="/images/homepage/arm-rb-mob-2.png" alt=""/>
        <img className={styles.cloMob} src="/images/homepage/bridge-clo.png" />
      </div>
    </div>
    <div className={styles.bottomContent}>
      <div className={styles.bottomText}>
        <p className={styles.bottomHeading}>Callisto Network, a Fortress of Crypto-Security</p>
        <p className={styles.bottomParagraph}>Chosen for its unmatched safety, Callisto Network is crafted by top
          crypto-security experts. With no hacks or 51% attacks in its history, dApps on Callisto are the gold standard
          for security in the blockchain ecosystem.</p>
      </div>
    </div>

    <div className={styles.armLb}>
      <img className={styles.arm} src="/images/homepage/arm-lb.png" alt=""/>
      <img className={styles.dot} src="/images/homepage/bridge-dot.png" alt=""/>
    </div>
    <div className={styles.armLt}>
      <img className={styles.arm} src="/images/homepage/arm-lt.png" alt=""/>
      <img className={styles.bsc} src="/images/homepage/bridge-bsc.png" alt=""/>
      <span className={styles.bscText}>
      Binance <br/> Smart Chain
    </span>
    </div>
    <div className={styles.armRb}>
      <img className={styles.arm} src="/images/homepage/arm-rb.png" alt=""/>
      <img className={styles.blogo} src="/images/homepage/bridge-logo.png" alt=""/>
    </div>
    <div className={styles.armRt}>
      <img className={styles.arm} src="/images/homepage/arm-rt.png" alt=""/>
    </div>
    <img className={styles.stars1} src="/images/homepage/stars-1.svg" alt=""/>
    <img className={styles.stars2} src="/images/homepage/stars-2.svg" alt=""/>
    <div className={styles.rockets}>
      <img className={styles.rocket1} src="/images/homepage/rocket.png" alt=""/>
      <img className={styles.rocket2} src="/images/homepage/man-on-rocket.png" alt=""/>
    </div>
  </div>;
}
