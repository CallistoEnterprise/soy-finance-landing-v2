import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {useScope} from "../shared/models/useScope";
import "/src/shared/models/init";
import {Provider} from "effector-react";
import {montserrat} from "../shared/fonts";
import {SnackbarProvider} from "../shared/providers/SnackbarProvider";
import dynamic from "next/dynamic";
import {useInit} from "../processes/web3/hooks/useInit";
import Head from "next/head";

const ThemeProvider = dynamic(
  () => import("../shared/providers/ThemeProvider"),
  {
    ssr: false,
  }
);

export default function App({Component, pageProps}: AppProps) {
  const scope = useScope(pageProps.initialState);

  useInit();

  return <>
    <Head>
      <title>Soy.Finance - Callisto Network</title>
      <meta name="description"
            content="SOY Finance brings safety to DeFi! With our pioneering insurance fund, SOY Finance guarantees a safe and affordable environment for trading, farming, and staking."/>

      <meta property="og:title" content="Soy.Finance | Where DeFi Meets Safety"/>
      <meta property="og:url" content="https://soy-finance-landing.vercel.app"/>
      <meta property="og:description"
            content="SOY Finance brings safety to DeFi! With our pioneering insurance fund, SOY Finance guarantees a safe and affordable environment for trading, farming, and staking."/>
      <meta property="og:image" content="https://soy-finance-landing.vercel.app/og.jpg"/>
    </Head>
    <ThemeProvider>
      <SnackbarProvider>
        <Provider value={scope}>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </>
}
