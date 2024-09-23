import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partner4 from "../components/partner/Partner4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Head from "next/head";

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Sobre a BigMinds Tech | Transformamos Ideias em Inovação.</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Na BigMinds Tech, somos apaixonados por inovação e tecnologia. 
          Nossa missão é transformar ideias em soluções digitais que impulsionam 
          o sucesso de nossos clientes. Com uma equipe de especialistas em 
          desenvolvimento de software, design e estratégias digitais, 
          oferecemos serviços sob medida para atender às suas necessidades."
        />
        <meta
          name="keywords"
          content="Desenvolvimento Web & Mobile, Soluções Cloud, Solução de 
          Pagamento via QR Code, Solução Integrada de Gestão de Dados, 
          Desenvolvimento de Software, Automação de Processos,UX/UI"
        ></meta>
      </Head>
      <Breadcrumb
        pageList="Sobre"
        title="Conheça a BigMinds Tech"
        pageName="SOBRE"
      />
      <About3 />
      <Choose6 />
      <Feature4 />
      <Partner4 />
      {/* <Testimonial3 /> */}
      <Home3Team />
      <Home3Contact />
      <Home3Blog />
    </Layout>
  );
}

export default AboutPage;
