import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {montserrat} from "../shared/fonts";
import {SnackbarProvider} from "../shared/providers/SnackbarProvider";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Sloth Finance - Callisto Network</title>
      <meta name="description"
            content="Experience the future of DeFi with Sloth Finance. Our unique insurance fund provides a safe and affordableenvironment for trading, farming, and staking."/>

      <meta property="og:type" content="website"/>

      <meta property="og:site_name" content="Soy.Finance"/>
      <meta property="og:title" content="Soy.Finance | Where DeFi Meets Safety"/>
      <meta property="og:url" content="https://soy.finance"/>
      <meta property="og:description"
            content="Experience the future of DeFi with Sloth Finance. Our unique insurance fund provides a safe and affordableenvironment for trading, farming, and staking."/>
      <meta property="og:image" content="https://soy.finance/og.jpg"/>

      <meta name="twitter:site" content="Soy.Finance"/>
      <meta property="twitter:title" content="Soy.Finance | Where DeFi Meets Safety"/>
      <meta property="twitter:description"
            content="Experience the future of DeFi with Sloth Finance. Our unique insurance fund provides a safe and affordableenvironment for trading, farming, and staking."/>
      <meta name="twitter:image" content="https://soy.finance/og.jpg"/>
      <meta name="twitter:image:alt" content="Soy.Finance | Where DeFi Meets Safety"/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <SnackbarProvider>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </SnackbarProvider>
  </>
}
