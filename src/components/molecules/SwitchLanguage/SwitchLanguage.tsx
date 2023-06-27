import React, {useEffect, useRef, useState} from "react";
import IconButton from "../../atoms/IconButton";
import Svg from "../../atoms/Svg/Svg";
import styles from "../SettingsMenu/SettingsMenu.module.scss";
import clsx from "clsx";
import DialogHeader from "../DialogHeader";
import Portal from "../../atoms/Portal";
import { useDebouncedCallback } from 'use-debounce';
import Image from "next/image";
import {useRouter} from "next/router";
import {useSnackbar} from "../../../shared/providers/SnackbarProvider";
import useMediaQuery from "../../../shared/hooks/useMediaQuery";
import Drawer from "../../atoms/Drawer/Drawer";


export default function SwitchLanguage({expandDirection = "bottom"}) {
  const [langOpened, setLangOpened] = useState(false);

  const walletRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const { locale, pathname, asPath, query } = useRouter();

  const {showMessage} = useSnackbar();
  const isMobile = useMediaQuery("(max-width: 600px)");


  const [positions, setWalletPositions] = useState({
    [expandDirection === "bottom" ? "top" : "bottom"]: 0,
    right: 0
  });

  const recalculatePositions = useDebouncedCallback(
    // function
    () => {
      console.log("fired");
      if (walletRef.current) {
        const currentRef = walletRef.current as HTMLDivElement;

        setWalletPositions({
          [expandDirection === "bottom" ? "top" : "bottom"]: expandDirection === "bottom"
            ? currentRef.getBoundingClientRect().y + currentRef.getBoundingClientRect().height + 20
            : currentRef.getBoundingClientRect().height + 20,
          right: currentRef.getBoundingClientRect().right
        });
      }
    },
    // delay in ms
    300
  );

  useEffect(
    () => {
      window.addEventListener("resize", recalculatePositions, false);

      recalculatePositions();

      return () => {
        window.removeEventListener("resize", recalculatePositions, false);
      }
    },
    [recalculatePositions]
  );

  useEffect(() => {
    setLangOpened(false);
  }, [recalculatePositions])

  return <div ref={walletRef}>
    <IconButton variant="menu" onClick={() => {
      setLangOpened(true);
    }}>
      <Svg iconName="web3" />
    </IconButton>
    {isMobile ? <Drawer isOpen={langOpened} onClose={() => setLangOpened(false)} position={"bottom"}>
        <DialogHeader variant="dropdown" title="Language" handleClose={() => setLangOpened(false)} />
        <div className={styles.content}>
          <div className={styles.langPickerWrapper}>
            {[
              {
                lang: "en",
                flag: "/images/flags/en.svg",
                label: "English - EN"
              },
              {
                lang: "uk",
                flag: "/images/flags/uk.svg",
                label: "Українська - UA"
              },
              {
                lang: "fr",
                flag: "/images/flags/fr.svg",
                label: "Français - FR"
              },
              // {
              //   lang: "ru",
              //   flag: "/images/flags/ru.svg",
              //   label: "Русский"
              // },
              {
                lang: "ko",
                flag: "/images/flags/ko.svg",
                label: "한국어 - KO"
              },
              // {
              //   lang: "zh-CH",
              //   flag: "/images/flags/zh.svg",
              //   label: "中文"
              // },
              // {
              //   lang: "zh-TW",
              //   flag: "/images/flags/tw.svg",
              //   label: "中文"
              // }
            ].map(lan => {
              return <button onClick={() => {
                router.push({ pathname, query }, asPath, { locale: lan.lang });
                setLangOpened(false);
                showMessage("Language changed");
              }} key={lan.lang}  className={clsx(
                styles.mobileLangButton,
                locale === lan.lang && styles.active
              )}>
                 <span style={{width: 32, height: 32}}>
                   <Image width={32} height={32} src={lan.flag} alt={lan.label} />
                 </span>
                <span>
                  {lan.label}
           </span>
              </button>
            })}
          </div>
        </div>
      </Drawer> :

    <Portal root="dropdown-root" isOpen={langOpened} onClose={() => {
      setLangOpened(false);
    }} isTransitioningClassName={styles.in} className={clsx(
      styles.dialogContainer,
      langOpened && styles.open
    )}>
      <div style={{top: positions.top, left: positions.right, bottom: positions.bottom, transform: "translate(-100%)"}}
           className={styles.walletMenuDropdown}>
        <DialogHeader variant="dropdown" title="Language" handleClose={() => setLangOpened(false)} />
        <div className={styles.content}>
          <div className={styles.langPickerWrapper}>
            {[
              {
                lang: "en",
                flag: "/images/flags/en.svg",
                label: "English - EN"
              },
              {
                lang: "uk",
                flag: "/images/flags/uk.svg",
                label: "Українська - UA"
              },
              {
                lang: "fr",
                flag: "/images/flags/fr.svg",
                label: "Français - FR"
              },
              // {
              //   lang: "ru",
              //   flag: "/images/flags/ru.svg",
              //   label: "Русский"
              // },
              {
                lang: "ko",
                flag: "/images/flags/ko.svg",
                label: "한국어 - KO"
              },
              // {
              //   lang: "zh-CH",
              //   flag: "/images/flags/zh.svg",
              //   label: "中文"
              // },
              // {
              //   lang: "zh-TW",
              //   flag: "/images/flags/tw.svg",
              //   label: "中文"
              // }
            ].map(lan => {
              return <button onClick={() => {
                router.push({ pathname, query }, asPath, { locale: lan.lang });
                setLangOpened(false);
                showMessage("Language changed");
              }} key={lan.lang}  className={clsx(
                styles.mobileLangButton,
                locale === lan.lang && styles.active
              )}>
                 <span style={{width: 32, height: 32}}>
                   <Image width={32} height={32} src={lan.flag} alt={lan.label} />
                 </span>
                <span>
                  {lan.label}
           </span>
              </button>
            })}
          </div>
        </div>
      </div>
      <div className={styles.backdrop} onClick={() => {
        setLangOpened(false);
      }} />
    </Portal>}
  </div>;
}
