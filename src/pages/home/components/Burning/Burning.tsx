import React from "react";
import styles from "./Burning.module.scss";
import {useGetBurnedSoy} from "../../hooks/useGetBurnedSoy";

export default function Burning() {
  const burned = useGetBurnedSoy();

  return <div className={styles.burning}>
    <div className={styles.text}>
      <p className={styles.heading}>Total SOY Tokens Burned</p>
      <p className={styles.subheading}>{burned.toLocaleString('en-US')} $SOY</p>
    </div>
  </div>;
}
