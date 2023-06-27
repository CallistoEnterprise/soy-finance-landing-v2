import React from "react";
import styles from "./BridgeBlock.module.scss";
import {Rotate, Zoom, Fade} from "react-awesome-reveal";

const stars1 = <svg width="295" height="236" viewBox="0 0 295 236" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.starItem} d="M13.5 0L16.0783 9.0343L25.1913 6.75L18.6565 13.5L25.1913 20.25L16.0783 17.9657L13.5 27L10.9217 17.9657L1.80866 20.25L8.34346 13.5L1.80866 6.75L10.9217 9.0343L13.5 0Z" fill="currentColor"/>
  <path className={styles.starItem} d="M193.499 104.221L196.454 108.091C197.871 109.947 200.028 111.091 202.359 111.223L207.22 111.5L203.35 114.454C201.494 115.871 200.35 118.028 200.218 120.359L199.942 125.22L196.987 121.35C195.57 119.494 193.413 118.35 191.082 118.218L186.221 117.942L190.091 114.987C191.947 113.57 193.091 111.413 193.223 109.082L193.499 104.221Z" fill="currentColor"/>
  <path className={styles.starItem} d="M269 184L272.346 206.654L295 210L272.346 213.346L269 236L265.654 213.346L243 210L265.654 206.654L269 184Z" fill="currentColor"/>
  <path className={styles.starItem} d="M252.5 188L253.208 192.792L258 193.5L253.208 194.208L252.5 199L251.792 194.208L247 193.5L251.792 192.792L252.5 188Z" fill="currentColor"/>
  <path className={styles.starItem} d="M287.5 220L288.337 225.663L294 226.5L288.337 227.337L287.5 233L286.663 227.337L281 226.5L286.663 225.663L287.5 220Z" fill="currentColor"/>
</svg>;

const stars2 = <svg width="268" height="197" viewBox="0 0 268 197" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.starItem} d="M254.5 0L257.078 9.0343L266.191 6.75L259.657 13.5L266.191 20.25L257.078 17.9657L254.5 27L251.922 17.9657L242.809 20.25L249.343 13.5L242.809 6.75L251.922 9.0343L254.5 0Z" fill="currentColor"/>
  <path className={styles.starItem} d="M171 16L173.072 23.8889C173.644 26.07 175.111 27.908 177.111 28.9506L182 31.5L177.111 34.0494C175.111 35.092 173.644 36.93 173.072 39.1111L171 47L168.928 39.1111C168.356 36.93 166.889 35.092 164.889 34.0494L160 31.5L164.889 28.9506C166.889 27.908 168.356 26.07 168.928 23.8889L171 16Z" fill="currentColor"/>
  <path className={styles.starItem} d="M28.5 149L33.655 162.647C34.5831 165.104 36.5382 167.033 39.0073 167.928L53 173L39.0073 178.072C36.5382 178.967 34.5831 180.896 33.655 183.353L28.5 197L23.345 183.353C22.4169 180.896 20.4618 178.967 17.9927 178.072L4 173L17.9927 167.928C20.4618 167.033 22.4169 165.104 23.345 162.647L28.5 149Z" fill="currentColor"/>
  <path className={styles.starItem} d="M11 143L12.2218 145.552C13.3342 147.874 15.3885 149.61 17.8649 150.318L22 151.5L17.8649 152.682C15.3885 153.39 13.3342 155.126 12.2218 157.448L11 160L9.77816 157.448C8.66577 155.126 6.61146 153.39 4.13513 152.682L0 151.5L4.13512 150.318C6.61146 149.61 8.66577 147.874 9.77817 145.552L11 143Z" fill="currentColor"/>
</svg>


export default function BridgeBlock() {
  return <div className={styles.bridge}>
    <div className={styles.topText}>
      <h1 className={styles.heading}>SOY Bridge <br/> Uniting Blockchains for Safe Trading</h1>
      <p className={styles.subheading}>SOY Bridge brings the safety of SOY Finance to the most popular blockchains,
        enabling seamless cross-chain DeFi interactions and secure trading for the whole crypto community.</p>
    </div>
    <div className={styles.centerImage}>
      <Rotate duration={2000} triggerOnce={false}>
        <img className={styles.inner} src="/images/homepage/bridge-middle-inner.png" alt=""/>
      </Rotate>
      <Rotate delay={300} duration={1700} triggerOnce={false}>
        <img className={styles.outer} src="/images/homepage/bridge-middle-outer.png" alt=""/>
      </Rotate>
      <img className={styles.eth} src="/images/homepage/bridge-eth.png" alt=""/>
      <img className={styles.etc} src="/images/homepage/bridge-etc.png" alt=""/>
      <img className={styles.clo} src="/images/homepage/bridge-clo.png" alt=""/>
      <img className={styles.cube} src="/images/homepage/bridge-cube.png" alt=""/>
      <Zoom>
        <img className={styles.soyLogo} src="/images/homepage/soy-logo.png" alt=""/>
      </Zoom>
      <Fade triggerOnce={false} duration={2000}>
         <span className={styles.etcText}>
        Ethereum <br/> Classic
      </span>
        <span className={styles.ethText}>
        Ethereum
      </span>
      </Fade>
      <div className={styles.flask}/>
    </div>
    <div className={styles.mobileCenter}>
      <Fade direction="left" className={styles.mobileArmLt}>
        <img className={styles.arm} src="/images/homepage/arm-lt-mob.png" alt=""/>
        <img className={styles.bscMob} src="/images/homepage/bridge-bsc.png" alt=""/>

        <span className={styles.bscTextMob}>
          Binance <br/> Smart Chain</span>
      </Fade>
      <Fade direction="right" className={styles.mobileArmR}>
        <img className={styles.arm} src="/images/homepage/arm-rb-mob.png" alt=""/>
        <img className={styles.ethMob} src="/images/homepage/bridge-eth.png" alt=""/>
        <Fade triggerOnce={false} duration={2000}>
        <span className={styles.ethTextMob}>
          Ethereum</span>
        </Fade>
      </Fade>
      <Fade direction="left" className={styles.mobileArmLb}>
        <img className={styles.arm} src="/images/homepage/arm-lb-mob.png" alt=""/>
        <img className={styles.etcMob} src="/images/homepage/bridge-etc.png" alt=""/>
        <Fade triggerOnce={false} duration={2000}>
        <span className={styles.etcTextMob}>
          Ethereum <br/> Classic</span>
        </Fade>
      </Fade>
      <Fade direction="right" className={styles.mobileArmRb}>
        <img className={styles.arm} src="/images/homepage/arm-rb-mob-2.png" alt=""/>
        <img className={styles.cloMob} src="/images/homepage/bridge-clo.png"/>
      </Fade>
    </div>
    <div className={styles.bottomContent}>
      <div className={styles.bottomText}>
        <p className={styles.bottomHeading}>Callisto Network, a Fortress of Crypto-Security</p>
        <p className={styles.bottomParagraph}>Chosen for its unmatched safety, Callisto Network is crafted by top
          crypto-security experts. With no hacks or 51% attacks in its history, dApps on Callisto are the gold standard
          for security in the blockchain ecosystem.</p>
      </div>
    </div>

    <Fade triggerOnce direction="left" className={styles.armLb}>
        <img className={styles.arm} src="/images/homepage/arm-lb.png" alt=""/>
        <img className={styles.dot} src="/images/homepage/bridge-dot.png" alt=""/>
    </Fade>


      <Fade triggerOnce direction="left" className={styles.armLt}>
        <img className={styles.arm} src="/images/homepage/arm-lt.png" alt=""/>
        <img className={styles.bsc} src="/images/homepage/bridge-bsc.png" alt=""/>
        <Fade triggerOnce={false} duration={2000}>
        <span className={styles.bscText}>
          Binance <br/> Smart Chain
        </span>
        </Fade>
      </Fade>


      <Fade triggerOnce direction="right" className={styles.armRb}>
        <img className={styles.arm} src="/images/homepage/arm-rb.png" alt=""/>
        <img className={styles.blogo} src="/images/homepage/bridge-logo.png" alt=""/>
      </Fade>
      <Fade triggerOnce direction="right" className={styles.armRt}>
        <img className={styles.arm} src="/images/homepage/arm-rt.png" alt=""/>
      </Fade>

    <div className={styles.stars1}>{stars1}</div>
    <div className={styles.stars2}>{stars2}</div>
    <div className={styles.rockets}>
      <img className={styles.rocket1} src="/images/homepage/rocket.png" alt=""/>
      <img className={styles.rocket2} src="/images/homepage/man-on-rocket.png" alt=""/>
    </div>
  </div>;
}
