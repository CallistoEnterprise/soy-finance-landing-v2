import styles from "./HomePage.module.scss"
import Layout from "../../shared/layouts/Layout";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import DeFi from "./components/DeFi";
import Staking from "./components/Staking";
import Farming from "./components/Farming";
import Burning from "./components/Burning";
import BridgeBlock from "./components/BridgeBlock";
import EmpowerGrowth from "./components/EmpowerGrowth";
import JoinSlothiverse from "./components/JoinSlothiverse";
import Head from "next/head";

export default function Home() {
  return <>
    <Head>
      <title>Soy.Finance - Callisto Network</title>
      <meta name="description" content="SOY Finance brings safety to DeFi! With our pioneering insurance fund, SOY Finance guarantees a safe and affordable environment for trading, farming, and staking."/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Soy.Finance | Where DeFi Meets Safety" />
      <meta property="twitter:title" content="Soy.Finance | Where DeFi Meets Safety" />
      <meta property="og:site_name" content="Soy.Finance" />
      <meta property="og:image" content="/og.jpg" />
      <meta name="twitter:image" content="/og.jpg" />
      <meta property="og:description" content="SOY Finance brings safety to DeFi! With our pioneering insurance fund, SOY Finance guarantees a safe and affordable environment for trading, farming, and staking." />
      <meta name="twitter:description" content="SOY Finance brings safety to DeFi! With our pioneering insurance fund, SOY Finance guarantees a safe and affordable environment for trading, farming, and staking." />
      <meta name="twitter:site" content="@1inchNetwork" />
      {/*<meta property="og:title" content="Soy.Finance" />*/}
      {/*<meta property="og:description" content="video.movie" />*/}
      {/*<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />*/}
      {/*<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
      {/*<meta property="twitter:title" content="Soy.Finance" />*/}
      {/*<meta property="twitter:description" content="video.movie" />*/}
      {/*<meta property="twitter:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
    </Head>
    <Layout>
    <main>
      <div className="container">
        <div className={styles.mainContent}>
          <Banner />
          <Stats />
          <DeFi />
          <BridgeBlock />

          <div className={styles.stakingFarming}>
            <Staking />
            <Farming />
          </div>

          <Burning />
          <EmpowerGrowth />
          <JoinSlothiverse />
        </div>
      </div>
    </main>
  </Layout></>;
}
