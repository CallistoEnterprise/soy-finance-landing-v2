import React from "react";
import styles from "./Stats.module.scss";
import {useMetrics} from "../../hooks/useMetrics";
import Svg from "../../../../components/atoms/Svg";

function shortenNumber(value: number) {
  if( value === undefined) return "0"
  const parsed1: string = value.toString();
  const parsed: string = parseInt(parsed1).toString();

  if (parsed.length < 4) {
    return parsed;
  }
  if( parsed.length < 7) {
    const newValue = (value/10)
    const ret = newValue.toString()
    const realRet = parseInt(ret) / 100
    return `${realRet}K`
  }
  if( parsed.length < 10 ) {
    const newValue = (value/10000)
    const ret = newValue.toString()
    const realRet = parseInt(ret) / 100
    return `${realRet}M`
  }
  const newValue = (value/10000000)
  const ret = newValue.toString()
  const realRet = parseInt(ret) / 100
  return `${realRet}B`
}

function StatBox({title, value}) {
  return <div className={styles.statBox}>
    <p className={styles.statBoxHeading}>{title}</p>
    <p className={styles.statBoxValue}>{value}</p>
  </div>
}

function PriceBox({imgUri, name, price, change}) {
  return <div className={styles.priceBox}>
    <img className={styles.tokenImg} src={imgUri} alt="" />
    <div className={styles.tokenInfo}>
      <p className={styles.tokenName}>{name}</p>
      <div className={styles.tokenPrices}>
        <span className={styles.tokenPrice}>${price}</span>
        <span className={styles.tokenChange}>
          {change}%
          <Svg size={20} iconName="arrow-right" />
        </span>
      </div>
    </div>
  </div>
}

export default function Stats() {
  const metricsData = useMetrics();

  return <div className={styles.stats}>
    <div className={styles.statBoxContainer}>
      <StatBox title="Total trades" value={`${shortenNumber(metricsData.result.Trades)}+`} />
      <StatBox title="Total volume" value={`${shortenNumber(metricsData.result.Volume_24h)}+`} />
      <StatBox title="Supported networks" value="5" />
      <StatBox title="Insurance funds" value={`${shortenNumber(metricsData.result.Soy_IDO)}+`} />
    </div>
    <div className={styles.longStatBox}>
      <div className={styles.longStatBoxDataWrapper}>
        <p className={styles.trendingLabel}>Trending tokens</p>
        <PriceBox imgUri="/images/homepage/FTM.svg" name="FTM" price="0.024" change="2.43" />
        <PriceBox imgUri="/images/homepage/ETH.svg" name="ETH" price="0.024" change="2.43" />
        <PriceBox imgUri="/images/homepage/CLO.svg" name="CLO" price="0.024" change="2.43" />
        <PriceBox imgUri="/images/homepage/MATIC.svg" name="MATIC" price="0.024" change="2.43" />
      </div>
    </div>
  </div>;
}
