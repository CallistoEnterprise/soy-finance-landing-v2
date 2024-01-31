import React, {useState} from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderNav from "../../molecules/HeaderNav";
import Drawer from "../../atoms/Drawer/Drawer";
import IconButton from "../../atoms/IconButton";
import Svg from "../../atoms/Svg/Svg";
import Button from "../../atoms/Button";
import {socialLinks} from "../../../pages/home/constants/external-links/socials";
// import SwitchLanguage from "../../molecules/SwitchLanguage";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="container">
    <div className={styles.headerContent}>
      <div className={styles.headerMenu}>
        <Image placeholder="blur" blurDataURL="/Logo.svg" width={132} height={46} src="/Logo.svg" alt="Soy finance" />
        <HeaderNav />
      </div>
      <div className={styles.rightContent}>
        {/*<SwitchLanguage />*/}
        <a className={styles.launchButton} href="https://app.soy.finance/swap" target="_blank">
          <Button>Launch Sloth Finance</Button>
        </a>
        <div className={styles.burger}>
          <IconButton variant="system" onClick={() => setMenuOpen(true)}>
            <Svg iconName="menu" />
          </IconButton>
          <Drawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
            <div className={styles.drawerContent}>
              <div>
                <h3 className={styles.blockTitle}>Exchange</h3>
                <div className={styles.links}>
                  <a target="_blank" className={styles.link} href="https://app.soy.finance/swap">
                    <Svg iconName="swap" />
                    Swap
                  </a>
                  <a target="_blank" className={styles.link} href="https://app.soy.finance/liquidity">
                    <Svg iconName="liquidity" />
                    Liquidity
                  </a>
                  <a className={styles.link} href="#">
                    <Svg iconName="dex-stats" />
                    Dex stats
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.blockTitle}>Farming</h3>
                <div className={styles.links}>
                  <a target="_blank"  className={styles.link} href="https://app.soy.finance/farms">
                    <Svg iconName="farm" />
                    Farms
                  </a>
                  <a className={styles.link} href="#">
                    <Svg iconName="boost" />
                    Boost token
                  </a>
                  <a className={styles.link} href="#">
                    <Svg iconName="burn" />
                    Burn & Boost
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.blockTitle}>Safety On Yields</h3>
                <div className={styles.links}>
                  <a className={styles.link} href="#">
                    <Svg iconName="safe-trading" />
                    Safe trading
                  </a>
                  <a className={styles.link} href="#">
                    <Svg iconName="listing" />
                    Safelisting
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.blockTitle}>More</h3>
                <div className={styles.links}>
                  <a target="_blank"  className={styles.link} href="https://bridge.soy.finance/">
                    <Svg iconName="bridge" />
                    Bridge
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.blockTitle}>Social media</h3>
                <div className={styles.socials}>
                  {socialLinks.map((item, index) => {
                    return <a key={item.icon} target="_blank" href={item.link}>
                      <IconButton variant="social" key={index}>
                        <Svg sprite="social" iconName={item.icon} />
                      </IconButton>
                    </a>
                  })}
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>

    </div>
  </header>;
}
