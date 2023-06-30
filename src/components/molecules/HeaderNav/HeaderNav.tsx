import React from "react";
import styles from "./HeaderNav.module.scss";
import useTranslation from "next-translate/useTranslation";
import Svg from "../../atoms/Svg";
import {IconName} from "../../atoms/Svg/svgIconsMap";
import {useSnackbar} from "../../../shared/providers/SnackbarProvider";

const menuItems: {
  title: string,
  url: string,
  menu?: Array<{
    title: string,
    icon: IconName
  }>
}[] = [
  {
    title: "exchange",
    url: "#",
    menu: [
      {
        title: "Swap",
        icon: "swap"
      },
      {
        title: "Orders",
        icon: "orders"
      },
      {
        title: "Liquidity",
        icon: "liquidity"
      },
      {
        title: "Dex stats",
        icon: "dex-stats"
      }
    ]
  },
  {
    title: "staking",
    url: "#"
  },
  {
    title: "farming",
    url: "#",
    menu: [
      {
        title: "Boost token",
        icon: "boost"
      },
      {
        title: "Burn & Boost",
        icon: "burn"
      }
    ]
  },
  {
    title: "safety",
    url: "#",
    menu: [
      {
        title: "Safe trading",
        icon: "safe-trading"
      },
      {
        title: "Safelisting",
        icon: "listing"
      }
    ]
  },
  {
    title: "future",
    url: "#"
  },
  {
    title: "bridge",
    url: "#"
  }
];

function NavItemWithMenu({title, menu}) {
  const {showMessage} = useSnackbar();

  return <div className={styles.navLinkWrapper}>
      <div className={styles.navLink} role="button" >
        {title}
        <Svg iconName="arrow-bottom" />
      </div>
      <div className={styles.walletMenuDropdown}>
        <nav>
          <ul className={styles.walletMenuList}>
            {menu.map((it) => {
              return <li role="button" onClick={() => {
                showMessage("Coming soon...", "info");
              }} className={styles.walletMenuItem} key={it.title}>
                <Svg iconName={it.icon} />
                {it.title}
              </li>
            })}
          </ul>
        </nav>
      </div>
  </div>
}

export default function HeaderNav() {
  const { t } = useTranslation("common");

  const {showMessage} = useSnackbar();

  return <nav>
    <ul className={styles.menu}>
      {menuItems.map(link => <li key={link.title}>{
        link.menu ? <NavItemWithMenu menu={link.menu} title={t(link.title)} /> :
          <a onClick={(e) => {
            e.preventDefault();

            showMessage("Coming soon...", "info");
          }} className={styles.navLink} href={link.url}>{t(link.title)}</a>
      }</li>)}
    </ul>
  </nav>;
}
