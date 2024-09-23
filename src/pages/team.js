import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Team from "@/components/Team/Home3Team";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

function Team() {
  return (
    <Layout>
      <Head>
        <title>Equipe | Transformamos Ideias em Inovação.</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Conheça a equipe da BigMinds Tech, formada por especialistas 
          apaixonados por tecnologia. Descubra como nossas habilidades e experiências 
          impulsionam soluções inovadoras para o seu negócio."
        />
        <meta
          name="keywords"
          content="BigMinds Tech, equipe, especialistas, tecnologia, soluções 
          inovadoras, profissionais, colaboradores, experiência"
        ></meta>
      </Head>
      <Breadcrumb
        pageList="Nossa Equipe"
        title="Conheça nossa Equipe"
        pageName="NOSSA EQUIPE"
      />
      <Home3Team showTitle={false} />
    </Layout>
  );
}

export default Team;
