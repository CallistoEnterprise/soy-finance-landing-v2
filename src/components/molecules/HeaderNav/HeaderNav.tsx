import React from "react";
import styles from "./HeaderNav.module.scss";
import useTranslation from "next-translate/useTranslation";
import Svg from "../../atoms/Svg";
import { IconName } from "../../atoms/Svg/svgIconsMap";
import { useSnackbar } from "../../../shared/providers/SnackbarProvider";
import { useRouter } from "next/router";

const menuItems: {
  title: string;
  url: string;
  menu?: Array<{
    title: string;
    icon: IconName;
    href?: string;
  }>;
}[] = [
  {
    title: "exchange",
    url: "#",
    menu: [
      {
        title: "Swap",
        icon: "swap",
        href: "https://app.sloth.finance/swap",
      },
      {
        title: "Liquidity",
        icon: "liquidity",
        href: "https://app.sloth.finance/liquidity",
      },
      {
        title: "Dex stats",
        icon: "dex-stats",
      },
    ],
  },
  {
    title: "farming",
    url: "https://app.sloth.finance/farms",
    menu: [
      {
        title: "Farms",
        icon: "farm",
        href: "https://app.sloth.finance/farms",
      },
      {
        title: "Boost token",
        icon: "boost",
      },
      {
        title: "Burn & Boost",
        icon: "burn",
      },
    ],
  },
  {
    title: "safety",
    url: "#",
    menu: [
      {
        title: "Safe trading",
        icon: "safe-trading",
      },
      {
        title: "Safelisting",
        icon: "listing",
      },
    ],
  },
  {
    title: "bridge",
    url: "https://bridge.sloth.finance/",
  },
  {
    title: "migrate",
    url: "https://app.sloth.finance/migrate",
  },
];

function NavItemWithMenu({ title, menu }) {
  const { showMessage } = useSnackbar();
  const router = useRouter();

  return (
    <div className={styles.navLinkWrapper}>
      <div className={styles.navLink} role="button">
        {title}
        <Svg iconName="arrow-bottom" />
      </div>
      <div className={styles.walletMenuDropdown}>
        <nav>
          <ul className={styles.walletMenuList}>
            {menu.map((it) => {
              if (it.href) {
                return (
                  <a
                    target="_blank"
                    href={it.href}
                    className={styles.walletMenuItem}
                    key={it.title}
                  >
                    <Svg iconName={it.icon} />
                    {it.title}
                  </a>
                );
              }

              return (
                <li
                  role="button"
                  onClick={() => {
                    showMessage("Coming soon...", "info");
                  }}
                  className={styles.walletMenuItem}
                  key={it.title}
                >
                  <Svg iconName={it.icon} />
                  {it.title}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function HeaderNav() {
  const { t } = useTranslation("common");

  const { showMessage } = useSnackbar();

  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map((link) => (
          <li key={link.title}>
            {link.menu ? (
              <NavItemWithMenu menu={link.menu} title={t(link.title)} />
            ) : (
              <a
                target="_blank"
                onClick={(e) => {
                  if (!link.url) {
                    e.preventDefault();

                    showMessage("Coming soon...", "info");
                  }
                }}
                className={styles.navLink}
                href={link.url}
              >
                {t(link.title)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
