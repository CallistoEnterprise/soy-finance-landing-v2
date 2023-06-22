import React, {useEffect, useRef, useState} from "react";
import styles from "./SettingsMenu.module.scss";
import Svg from "../../atoms/Svg/Svg";
import clsx from "clsx";
import Portal from "../../atoms/Portal";
import Divider from "../../atoms/Divider";
import {useWeb3} from "../../../processes/web3/hooks/useWeb3";
import useTranslation from "next-translate/useTranslation";
import {useEvent} from "effector-react";
import {setWalletDialogOpened} from "../../../shared/models";
import WalletDialog from "../WalletDialog";
import DropdownItem from "../DropdownItem";
import IconButton from "../../atoms/IconButton";
import DialogHeader from "../DialogHeader";
import Flex from "../../layout/Flex";
import Switch from "../../atoms/Switch";

export default function SettingsMenu({expandDirection = "bottom"}) {
  const {t} = useTranslation('common');

  const walletRef = useRef<HTMLDivElement | null>(null);
  const [isWalletMenuOpened, setWalletMenuOpened] = useState(false);
  const {account, disconnect} = useWeb3();

  // const setWalletDialogOpenedFn = useEvent(setWalletDialogOpened);

  const [walletPositions, setWalletPositions] = useState({
    [expandDirection === "bottom" ? "top" : "bottom"]: 0,
    right: 0
  });

  const [defaultTab, setDefaultTab] = useState(0);

  useEffect(
    () => {
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
    [walletRef, expandDirection]
  );

  return <>
    <div ref={walletRef}>
      <IconButton
        variant="menu"
        onClick={() => setWalletMenuOpened(true)}
        // isOpened={isWalletMenuOpened}
      >
        <Svg iconName="settings" />
      </IconButton>

      <Portal root="dropdown-root" isOpen={isWalletMenuOpened} onClose={() => {
        setWalletMenuOpened(false);
      }} isTransitioningClassName={styles.in} className={clsx(
        styles.dialogContainer,
        isWalletMenuOpened && styles.open
      )}>
        <div style={{top: walletPositions.top, left: walletPositions.right, bottom: walletPositions.bottom, transform: "translate(-100%)"}}
             className={styles.walletMenuDropdown}>
          <DialogHeader variant="dropdown" title="Settings" handleClose={() => setWalletMenuOpened(false)} />
          <div className={styles.content}>
            <ul className={styles.list}>
              <li>
                <Flex gap={8}>
                  <Svg iconName="night" />
                  Dark mode
                </Flex>
                <Switch checked={true} setChecked={null} />
              </li>
              <li>
                <Flex gap={8}>
                  <Svg iconName="web3" />
                  Language
                </Flex>
                <Svg iconName="arrow-right" />
              </li>
              <li>
                <Flex gap={8}>
                  <Svg iconName="line" />
                  Show chart
                </Flex>
                <Switch checked={true} setChecked={null} />
              </li>
              <li>
                <Flex gap={8}>
                  <Svg iconName="table" />
                  Show table
                </Flex>
                <Switch checked={true} setChecked={null} />
              </li>
              <li>
                <Flex gap={8}>
                  <Svg iconName="sound" />
                  Sounds
                </Flex>
                <Switch checked={false} setChecked={null} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.backdrop} onClick={() => {
          setWalletMenuOpened(false);
        }} />
      </Portal>
    </div>
    <WalletDialog defaultTab={defaultTab} />
  </>;
}
