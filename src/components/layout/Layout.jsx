import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/sm-logo.svg" />
        <meta charset="UTF-8" />
        <meta property="og:site_name" content="BigMinds Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bigminds.tech/" />
        <meta property="og:title" content="Página não encontrada" />
        <meta
          property="og:description"
          content="Empresa focada em transaformar ideias em Inovação."
        />
        <meta
          property="og:image"
          content="https://www.bigminds.tech/public/assets/img/logo-redes-sociais/logo-compartilhar.jpg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="460" />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
