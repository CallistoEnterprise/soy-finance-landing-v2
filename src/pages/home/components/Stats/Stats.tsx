import React, {useMemo} from "react";
import styles from "./Stats.module.scss";
import {useMetrics} from "../../hooks/useMetrics";
import Svg from "../../../../components/atoms/Svg";
import {TokenData, useFetchTokens} from "../../../../shared/fetcher-home";
import clsx from "clsx";
import {getLogo} from "../../../../shared/getLogo";

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
        <span>${price.toLocaleString('en-US')}</span>
        <span className={clsx(styles.tokenChange, change > 0 ? styles.green : styles.red)}>
          {change.toLocaleString('en-US')}%
          <Svg size={20} iconName="arrow-right" />
        </span>
      </div>
    </div>
  </div>
}

export default function Stats() {
  const metricsData = useMetrics();

  const a = useFetchTokens();

  console.log(a);
  const sorted = useMemo(() => {
    if(!a.data) {
      return [];
    }

    const values = Object.values(a.data);

    console.log(values);

    return values.sort((a: TokenData, b: TokenData): number => {
      if(a.volumeUSD > b.volumeUSD) {
        return -1;
      }

      if(a.volumeUSD < b.volumeUSD) {
        return 1;
      }

      return 0;
    });
  }, [a]);

  console.log(sorted);

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
        {sorted.length && sorted.slice(0, 4).map((tokenData: TokenData) => {
          return <PriceBox imgUri={getLogo({address: tokenData.address})} price={tokenData.priceUSD} name={tokenData.symbol} change={tokenData.priceUSDChange} />
        })}
        {/*<PriceBox imgUri="/images/homepage/FTM.svg" name="FTM" price="0.024" change="2.43" />*/}
        {/*<PriceBox imgUri="/images/homepage/ETH.svg" name="ETH" price="0.024" change="2.43" />*/}
        {/*<PriceBox imgUri="/images/homepage/CLO.svg" name="CLO" price="0.024" change="2.43" />*/}
        {/*<PriceBox imgUri="/images/homepage/MATIC.svg" name="MATIC" price="0.024" change="2.43" />*/}
      </div>
    </div>
  </div>;
}
