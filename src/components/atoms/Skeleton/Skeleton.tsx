import React, { HTMLAttributes } from "react";
import styles from "./Skeleton.module.scss";
import classnames from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement>{
  variant?: "rectangular" | "circular",
  width?: number | string,
  height: number | string,
  borderRadius?: number | string,
  bg?: "primary" | "secondary",
  className?: string,
  children?: any,
  withAnimation?: boolean
}

export default function Skeleton({ variant = "rectangular", borderRadius = 4, width, height, bg = "primary", className, children = null,  withAnimation = true, ...props }: Props) {
  return <div className={classnames(
    styles[variant],
    styles.skeleton,
    styles[bg],
    withAnimation && styles.withAnimation,
    className
  )} style={{
    ...(width && { width, minWidth: width }),
    height,
    borderRadius: variant === "circular"
      ? "50%"
      : borderRadius,
  }} {...props}>
    {children}
  </div>;
}
