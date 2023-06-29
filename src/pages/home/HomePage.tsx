import styles from "./HomePage.module.scss"
import Layout from "../../shared/layouts/Layout";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
// import DeFi from "./components/DeFi";
// import Staking from "./components/Staking";
// import Farming from "./components/Farming";
// import Burning from "./components/Burning";
// import BridgeBlock from "./components/BridgeBlock";
// import EmpowerGrowth from "./components/EmpowerGrowth";
import JoinSlothiverse from "./components/JoinSlothiverse";

export default function Home() {
  return  <main>
        <div className="container">
          <div className={styles.mainContent}>
            <Banner/>
            <Stats/>
            {/*<DeFi/>*/}
            {/*<BridgeBlock/>*/}

            {/*<div className={styles.stakingFarming}>*/}
            {/*  <Staking/>*/}
            {/*  <Farming/>*/}
            {/*</div>*/}

            {/*<Burning/>*/}
            {/*<EmpowerGrowth/>*/}
            <JoinSlothiverse/>
          </div>
        </div>
      </main>
    // </Layout>
}
