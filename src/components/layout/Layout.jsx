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
        <title>BigMinds Tech | Transformamos Ideias em Inovação.</title>
        <meta
          name="description"
          content="Empresa focada em transaformar ideias em Inovação."
        />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="BigMinds Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bigminds.tech/" />
        <meta property="og:title" content="Página não encontrada" />
        <meta
          property="og:description"
          content="Soluções personalizadas em cobrança e recuperação de crédito para sua empresa."
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
