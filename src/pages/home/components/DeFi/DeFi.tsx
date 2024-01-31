import React, {useState, useTransition} from "react";
import styles from "./DeFi.module.scss";
import {Fade} from "react-awesome-reveal";
import Player from "../../../../components/molecules/Player";

export default function DeFi() {
  const [, startTransition] = useTransition();

  // These two states handle the button press, and
  // the loading of the YouTube iframe.
  const [showVideo, setShowVideo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

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
            Sloth Finance embraces the industry&apos;s best practices and technologies by combining a list of audited tokens, distributed insurance, and the ERC-223 token standard.
            <br/>
            This ensures our community of sloth enthusiasts a reliable and safe platform.
          </p>
        </div>
        <div className={styles.videoRatio}>
          {(!showVideo || !hasLoaded) && (
            <button
              className={styles.thumbnailButton}
              onClick={() => {
                startTransition(() => {
                  setShowVideo(true);
                });
              }}
            >
              <div className={styles.videoInner}>
                <img
                  alt="Jungle-Tested Crypto Security: Sloth Finance - Thumbnain"
                  src="/videos/youtube_cover_1280x720.png"
                  className={styles.thumbnailImage}
                  loading="lazy"
                />
                <img
                  alt="Play Video"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
                  loading="lazy"
                  className={styles.playIcon}
                />
              </div>
            </button>
          )}
          {showVideo && (
            <Player videoId="vbtED4Z_82I" setHasLoaded={setHasLoaded} />
          )}
        </div>
      </div>
    </Fade>
  </div>;
}
