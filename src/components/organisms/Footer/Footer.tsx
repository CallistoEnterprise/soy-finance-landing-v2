import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Svg from "../../atoms/Svg/Svg";
import IconButton from "../../atoms/IconButton";
import {useSoyPrice} from "@/shared/hooks/useSoyPrice";
import {formatBalanceToSix} from "@/shared/utils/utils";
import {useSnackbar} from "@/shared/providers/SnackbarProvider";
import {socialLinks} from "@/pages/home/constants/external-links/socials";
import {footerLinks} from "@/pages/home/constants/external-links/footer";

export default function Footer() {
  const { price } = useSoyPrice();

  const {showMessage} = useSnackbar();

  return <div className="container">
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.leftSide}>
          <div className={styles.footerLogo}>
            <Image placeholder="blur" blurDataURL="/Logo-Dark.svg" width={132} height={46} src="/Logo-Dark.svg"
                   alt="Sloth finance"/>
          </div>

          <p className={`font-16 mb-20 ${styles.white}`}>Be Lazy, DeFi is EazZzy</p>
          <div className={styles.footerSettings}>
            <div className={styles.soyPrice}>
              <img src="/images/all-tokens/SLOFI_TRANSPARENT.svg" alt="" />
              <span className={styles.priceText} >1 SLOFI = ${formatBalanceToSix(price)}</span>
            </div>
          </div>
          <div className={styles.socials}>
            {socialLinks.map((item, index) => {
              return <a aria-label={item.icon} key={index} target="_blank" href={item.link}>
                <IconButton variant="social-footer" key={index}>
                  <Svg sprite="social" iconName={item.icon} />
                </IconButton>
              </a>
            })}
          </div>
        </div>
        <div className={styles.externalLinks}>
          {footerLinks.map((group) => {
            return <div key={group.groupLabel}>
              <h3 className={styles.externalLinkColumnTitle}>{group.groupLabel}</h3>
              <div className={styles.linkList}>
                {group.links.map((link) => {
                  if(link.url) {
                    return <a target="_blank" href={link.url} key={link.label}>{link.label}</a>
                  }

                  return <a onClick={(e) => {
                    e.preventDefault();
                    showMessage("Coming soon...", "info");
                  }} href="" key={link.label}>{link.label}</a>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span className={styles.copyright}>©{new Date(Date.now()).getFullYear()} All rights reserved</span>
        <div className={styles.termsPolicy}>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
}
