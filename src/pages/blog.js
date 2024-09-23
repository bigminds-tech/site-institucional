import BlogBanner from "@/components/blog/BlogBanner";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Home3Blog from "../components/blog/Home3Blog";
function BlogPgage() {
  return (
    <Layout>
      <Head>
        <title>Blog | Transformamos Ideias em Inovação.</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Descubra insights valiosos e dicas práticas em nosso blog. 
          Explore uma variedade de temas, desde tecnologia e estilo de vida até 
          saúde e bem-estar. Mantenha-se informado com conteúdos atualizados, 
          otimizados para SEO, que ajudam você a encontrar as melhores soluções 
          para o seu dia a dia. Junte-se à nossa comunidade e transforme sua 
          leitura em conhecimento!"
        />
        <meta
          name="keywords"
          content="Desenvolvimento Web & Mobile, Soluções Cloud, Solução de 
          Pagamento via QR Code, Solução Integrada de Gestão de Dados, 
          Desenvolvimento de Software, Automação de Processos,UX/UI"
        ></meta>
      </Head>
      <Breadcrumb pageList="Blog" title="Inovações em Foco" pageName="BLOG" />
      <BlogBanner />
      <Home3Blog />
    </Layout>
  );
}

export default BlogPgage;
