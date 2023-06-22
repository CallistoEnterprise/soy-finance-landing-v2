import React from "react";
import styles from "./DeFi.module.scss";

export default function DeFi() {
  return <div className={styles.defi}>
    <img className={styles.mainImage} src="/images/homepage/palm.png" />
    <div className={styles.content}>
      <div>
        <h2 className={styles.heading}>
          <span className={styles.green}>DeFi</span>
          {" "}
          made <br /> Safe and Slothful
        </h2>
        <p className={styles.paragraph}>Merging a safelist of audited tokens, decentralized insurance, and the latest token standard, SOY Finance embraces the industry&apos;s finest practices and technologies to offer our sloth-loving community a solid and secure platform.</p>
      </div>
      <div className={styles.video}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vbtED4Z_82I?rel=0&modestbranding=1&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </div>;
}
