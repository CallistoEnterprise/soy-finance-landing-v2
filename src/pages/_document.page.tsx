import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="drawer-root" />
        <div id="dropdown-root" />
        <div id="select-root" />
        <NextScript />
      </body>
    </Html>
  )
}
