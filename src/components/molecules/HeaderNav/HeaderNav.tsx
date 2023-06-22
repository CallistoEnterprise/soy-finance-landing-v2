import React, {useEffect, useRef, useState} from "react";
import styles from "./HeaderNav.module.scss";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";
import DropdownItem from "../DropdownItem";
import Svg from "../../atoms/Svg";
import Divider from "../../atoms/Divider";
import Portal from "../../atoms/Portal";
import {IconName} from "../../atoms/Svg/svgIconsMap";

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
  const itemRef = useRef<HTMLDivElement | null>(null);

  const [isOpened, setIsOpened] = useState(false);

  const [itemPositions, setItemPositions] = useState({
    top: 0,
    left: 0
  });

  useEffect(
    () => {
      if (itemRef.current) {
        const currentRef = itemRef.current as HTMLDivElement;

        setItemPositions({
          top: currentRef.getBoundingClientRect().y + currentRef.getBoundingClientRect().height + 27,
          left: currentRef.getBoundingClientRect().left
        });
      }
    },
    [itemRef]
  );

  return <div
    onMouseEnter={() => setIsOpened(true)}
    onMouseLeave={() => setIsOpened(false)}
    ref={itemRef}
  >
      <div className={styles.navLink} role="button" >
        {title}
        <Svg iconName="arrow-bottom" />
      </div>
    <Portal root="dropdown-root" isOpen={isOpened} onClose={() => {
      setIsOpened(false)
    }} isTransitioningClassName={styles.in} className={clsx(
      styles.dialogContainer,
      isOpened && styles.open
    )}>
      <div style={{left: itemPositions.left, top: itemPositions.top}}
           className={styles.walletMenuDropdown}>
        <nav>
          <ul className={styles.walletMenuList}>
            {menu.map((it) => {
              return <li className={styles.walletMenuItem} key={it.title}>
                <Svg iconName={it.icon} />
                {it.title}
              </li>
            })}
          </ul>
        </nav>
      </div>
    </Portal>
  </div>
}

export default function HeaderNav() {
  const { t } = useTranslation("common");

  return <nav>
    <ul className={styles.menu}>
      {menuItems.map(link => <li key={link.title}>{
        link.menu ? <NavItemWithMenu menu={link.menu} title={t(link.title)} /> :
          <a className={styles.navLink} href={link.url}>{t(link.title)}</a>
      }

        </li>)}
    </ul>
  </nav>;
}
