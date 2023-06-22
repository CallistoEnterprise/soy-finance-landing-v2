import React from "react";
import styles from "./Stats.module.scss";
import Flex from "../../../../components/layout/Flex";


function StatBox({title, value}) {
  return <div className={styles.statBox}>
    <p className={styles.statBoxHeading}>{title}</p>
    <p className={styles.statBoxValue}>{value}</p>
  </div>
}

function PriceBox({imgUri, name, price, change}) {
  return <div className={styles.priceBox}>
    <img src={imgUri} alt="" />
    <div className={styles.tokenInfo}>
      <p className={styles.tokenName}>{name}</p>
      <div className={styles.tokenPrices}>
        <span className={styles.tokenPrice}>${price}</span>
        <span className={styles.tokenChange}>{change}%</span>
      </div>
    </div>
  </div>
}

export default function Stats() {
  return <div className={styles.stats}>
    <div className={styles.statBoxContainer}>
      <StatBox title="Total trades" value="4.3M+" />
      <StatBox title="Total volume" value="$93.47M+" />
      <StatBox title="Supported networks" value="127" />
      <StatBox title="Insurance funds" value="$87M+" />
    </div>
    <div className={styles.longStatBox}>
      <p className={styles.trendingLabel}>Trending tokens</p>
      <PriceBox imgUri="/images/homepage/FTM.svg" name="FTM" price="0.024" change="2.43" />
      <PriceBox imgUri="/images/homepage/ETH.svg" name="ETH" price="0.024" change="2.43" />
      <PriceBox imgUri="/images/homepage/CLO.svg" name="CLO" price="0.024" change="2.43" />
      <PriceBox imgUri="/images/homepage/MATIC.svg" name="MATIC" price="0.024" change="2.43" />
    </div>
  </div>;
}
