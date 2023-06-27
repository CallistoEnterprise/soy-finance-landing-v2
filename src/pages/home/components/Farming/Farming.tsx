import React from "react";
import styles from "./Farming.module.scss";
import Svg from "../../../../components/atoms/Svg";
import { useFarmingAPR } from "../../hooks/useMetrics";
import {getLogo} from "../../../../shared/getLogo";
import Skeleton from "../../../../components/atoms/Skeleton";
import {Fade} from "react-awesome-reveal";

const getShortenNumber = (value: number): number => {
  return (Math.floor(value * 100)) / 100
}

export default function Farming() {
  const data = useFarmingAPR();

  console.log(data);

  return <div className={styles.farming}>
    <div className={styles.backdrop} />
    <div className={styles.content}>
      <p className={styles.heading}>Yield Farming</p>
      <p className={styles.subheading}>The Lush Life of High APRs</p>
      <div className={styles.cards}>
        <Fade direction="up" triggerOnce>
          {data.map((farm, index) => {
            return <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                {farm.name
                  ? <>
                    <img src={getLogo({address: farm.token0})} />
                    <Svg iconName="add-token" />
                    <img src={getLogo({address: farm.token1})} />
                  </>
                  : <>
                    <div className={styles.imagePlaceholderWrapper}>
                      <Skeleton height="100%" width="100%" variant="circular" />
                    </div>
                    <Skeleton height={24} width={24} variant="rectangular" />
                    <div className={styles.imagePlaceholderWrapper}>
                      <Skeleton height="100%" width="100%" variant="circular" />
                    </div>
                  </>}
              </div>

              {farm.name ? <p className={styles.name}>{farm.name}</p> : <div className={styles.placeholderFarmTitle}><Skeleton height={12} width={112} /></div>}
              {farm.name ? <p className={styles.info}>APR: {getShortenNumber(farm.apr)}%</p>: <div className={styles.placeholderFarmInfo}>
                <Skeleton height={12} width={86} />
              </div>}
            </div>
          })}
        </Fade>
      </div>
    </div>
  </div>;
}
