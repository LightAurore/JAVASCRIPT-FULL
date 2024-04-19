// Le compsant Document (_document.js):
// - Layout(Squelette de base) de l'application

import Header from "@/containers/header/header.jsx";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
