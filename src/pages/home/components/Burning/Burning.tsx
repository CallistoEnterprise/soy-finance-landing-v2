import React from "react";
import styles from "./Burning.module.scss";
import {useGetBurnedSoy} from "../../hooks/useGetBurnedSoy";

export default function Burning() {
  const burned = useGetBurnedSoy();

  return <div className={styles.burning}>
    <div className={styles.text}>
      <p className={styles.heading}>Total SLOFI Tokens Burned</p>
      <p className={styles.subheading}>{0} SLOFI</p>
    </div>
  </div>;
}
