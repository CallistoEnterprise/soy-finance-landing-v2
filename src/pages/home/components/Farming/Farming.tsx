import React, {useMemo} from "react";
import styles from "./Farming.module.scss";
import Svg from "../../../../components/atoms/Svg";
import {getLogo} from "../../../../shared/utils/getLogo";
import Skeleton from "../../../../components/atoms/Skeleton";
import {Fade} from "react-awesome-reveal";
import {useFarms} from "../../hooks/useFarms";
import {FixedNumber} from "ethers";
import Image from "next/image";

function FarmCard({farm}) {

  const totalApr = useMemo(() => {
    if(!farm) {
      return 0;
    }

    const {lpRewardsApr, apr}: {lpRewardApr: number, apr: FixedNumber} = farm;

    return apr && lpRewardsApr != null ? apr.toUnsafeFloat() + lpRewardsApr: 0;
  }, [farm]);

  if(!farm) {
    return <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholderWrapper}>
          <Skeleton height="100%" width="100%" variant="circular" />
        </div>
        <Skeleton height={24} width={24} variant="rectangular" />
        <div className={styles.imagePlaceholderWrapper}>
          <Skeleton height="100%" width="100%" variant="circular" />
        </div>
      </div>

      <div className={styles.placeholderFarmTitle}>
        <Skeleton height={12} width={112} />
      </div>
      <div className={styles.placeholderFarmInfo}>
        <Skeleton height={12} width={86} />
      </div>
    </div>
  }

  return <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image width={50} height={50} src={getLogo({address: farm.token.address?.["820"]?.toLowerCase()})} alt={farm.token.symbol} />
      <Svg iconName="add-token" />
      <Image width={50} height={50} src={getLogo({address: farm.quoteToken.address?.["820"]?.toLowerCase()})} alt={farm.token.symbol} />
    </div>

    <p className={styles.name}>{farm.token.symbol} - {farm.quoteToken.symbol}</p>
    <p className={styles.info}>APR: {totalApr.toFixed(2).toString()}%</p>
  </div>

}

export default function Farming() {
  const farms = useFarms();

  return <div className={styles.farming}>
    <div className={styles.backdrop} />
    <div className={styles.content}>
      <p className={styles.heading}>Yield Farming</p>
      <p className={styles.subheading}>The Lush Life of High APRs</p>
      <div className={styles.cards}>
        <Fade direction="up" triggerOnce>
          {farms.slice(0, 3).map((farm, index) => {
            return <FarmCard key={index} farm={farm} />
          })}
        </Fade>
      </div>
    </div>
  </div>;
}
