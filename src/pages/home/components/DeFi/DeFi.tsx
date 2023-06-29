import React from "react";
import styles from "./DeFi.module.scss";
import {Fade} from "react-awesome-reveal";

export default function DeFi() {
  return <div className={styles.defi}>
    <img className={styles.mainImage} src="/images/homepage/palm.webp" />
    <Fade className={styles.sloth} direction="left">
      <img style={{width: "100%"}} src="/images/homepage/sloth.webp" alt="sloth"/>
    </Fade>
    <Fade direction="up" triggerOnce>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.heading}>
            <span className={styles.green}>DeFi</span>
            {" "}
            made <br/> Safe and Slothful
          </h2>
          <p className={styles.paragraph}>
            By combining a list of audited tokens, decentralized insurance, and the most advanced token standards,
            SOY Finance embraces the industry&apos;s best practices and technologies.
            This ensures our community of sloth enthusiasts a reliable and safe platform.
          </p>
        </div>
        <div className={styles.video}>
          <iframe
            className={styles.frame}
            src="https://www.youtube.com/embed/vbtED4Z_82I?rel=0&modestbranding=1&showinfo=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </Fade>
  </div>;
}
