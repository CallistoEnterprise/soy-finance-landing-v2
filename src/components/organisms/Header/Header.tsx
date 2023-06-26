import React, {useState} from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderNav from "../../molecules/HeaderNav";
import {useColorMode} from "../../../shared/providers/ThemeProvider";
import Drawer from "../../atoms/Drawer/Drawer";
import IconButton from "../../atoms/IconButton";
import Svg from "../../atoms/Svg/Svg";
import Button from "../../atoms/Button";

export default function Header() {
  const { mode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="container">
    <div className={styles.headerContent}>
      <div className={styles.headerMenu}>
        {mode === "light" ?
          <Image placeholder="blur" blurDataURL="/Logo.svg" width={132} height={46} src="/Logo.svg" alt="Soy finance" /> :
          <Image placeholder="blur" blurDataURL="/Logo-Dark.svg" width={132} height={46} src="/Logo-Dark.svg" alt="Soy finance" />}
        <HeaderNav />
      </div>
      <div className={styles.rightContent}>
        <a className={styles.launchButton} href="#" target="_blank">
          <Button>Launch Soy Finance</Button>
        </a>
        <div className={styles.burger}>
          <IconButton variant="system" onClick={() => setMenuOpen(true)}>
            <Svg iconName="menu" />
          </IconButton>
          <Drawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
            Swap
          </Drawer>
        </div>
      </div>

    </div>
  </header>;
}
