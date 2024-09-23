import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from "next/head";

function ServiceDetailsPage() {
  return (
    <Layout>
      <Head>
        <title>
          Solução Integrada de Gestão de Dados | Transformamos Ideias em
          Inovação.
        </title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Nossa solução integra Arquitetura, Engenharia e Análise de Dados 
          para otimizar o valor das informações da sua empresa. Oferecemos 
          estruturas personalizadas para organização de dados, pipelines eficientes 
          para coleta e armazenamento, e ferramentas avançadas que geram insights 
          estratégicos. Com essa abordagem, sua empresa transforma dados em ativos 
          estratégicos, impulsionando crescimento e inovação."
        />
        <meta
          name="keywords"
          content="Plataforma de Gestão de Dados Empresariais, Ferramenta de 
          Visualização de Dados, Sistema de ETL (Extração, Transformação e Carga),
          Dashboards Interativos para Análise de Desempenho, Data Lake para 
          Armazenamento de Dados Brutos, API para Integração de Dados, Soluções 
          de Data Warehousing"
        ></meta>
      </Head>
      <Breadcrumb
        pageList="Detalhes do Serviço"
        title="Solução Integrada de Gestão de Dados"
        pageName="DETALHES DO SERVIÇO"
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>Solução Integrada de Gestão de Dados</h2>
                  </div>
                  <p>
                    Nossa solução integra Arquitetura, Engenharia e Análise de
                    Dados para otimizar o valor das informações da sua empresa.
                    Oferecemos estruturas personalizadas para organização de
                    dados, pipelines eficientes para coleta e armazenamento, e
                    ferramentas avançadas que geram insights estratégicos. Com
                    essa abordagem, sua empresa transforma dados em ativos
                    estratégicos, impulsionando crescimento e inovação.
                  </p>
                  <ul className="about-featue">
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Plataforma de Gestão de Dados Empresariais
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Ferramenta de Visualização de Dados
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Sistema de ETL (Extração, Transformação e Carga)
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Dashboards Interativos para Análise de Desempenho
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Data Lake para Armazenamento de Dados Brutos
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      API para Integração de Dados
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Soluções de Data Warehousing
                    </li>
                    <li>
                      <svg
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.226556 4.90093C-0.148557 5.12756 -0.0348499 5.69917 0.398417 5.76502C0.746772 5.81799 0.914159 6.22206 0.705247 6.50583C0.445407 6.85872 0.769204 7.34333 1.19469 7.23832C1.53676 7.15388 1.84612 7.46322 1.76168 7.80531C1.65668 8.23081 2.14127 8.55459 2.49417 8.29475C2.77794 8.08586 3.18208 8.25324 3.23497 8.60158C3.30081 9.03483 3.87242 9.14856 4.09907 8.77344C4.28129 8.47186 4.71872 8.47186 4.90093 8.77344C5.12756 9.14856 5.69917 9.03485 5.76502 8.60158C5.818 8.25323 6.22206 8.08584 6.50583 8.29475C6.85873 8.55459 7.34333 8.2308 7.23832 7.80531C7.15388 7.46324 7.46322 7.15388 7.80531 7.23832C8.23081 7.34332 8.55459 6.85872 8.29475 6.50583C8.08586 6.22206 8.25324 5.81792 8.60158 5.76502C9.03484 5.69918 9.14856 5.12758 8.77344 4.90093C8.47186 4.71871 8.47186 4.28128 8.77344 4.09907C9.14856 3.87244 9.03485 3.30083 8.60158 3.23497C8.25323 3.182 8.08584 2.77794 8.29475 2.49417C8.55459 2.14127 8.23079 1.65667 7.80531 1.76168C7.46324 1.84612 7.15388 1.53678 7.23832 1.19469C7.34332 0.769192 6.85873 0.445407 6.50583 0.705247C6.22206 0.914139 5.81792 0.74676 5.76502 0.398417C5.69918 -0.0348359 5.12758 -0.148563 4.90093 0.226557C4.71871 0.528142 4.28128 0.528142 4.09907 0.226557C3.87244 -0.148557 3.30083 -0.03485 3.23497 0.398417C3.182 0.746772 2.77794 0.914159 2.49417 0.705247C2.14127 0.445407 1.65667 0.769204 1.76168 1.19469C1.84612 1.53676 1.53678 1.84612 1.19469 1.76168C0.769192 1.65668 0.445407 2.14127 0.705247 2.49417C0.914139 2.77794 0.74676 3.18208 0.398417 3.23497C-0.0348358 3.30081 -0.148563 3.87242 0.226556 4.09907C0.528142 4.28129 0.528142 4.71872 0.226556 4.90093Z" />
                      </svg>
                      Outros
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="service-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/about-service-img-03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div
              className="row mb-60 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Como trabalhamos</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="container-fluid">
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 justify-content-center">
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Levantamento de Requisitos</h3>
                      <p>
                        Coletamos informações sobre as necessidades e
                        expectativas do cliente por meio de entrevistas e
                        workshops, identificando requisitos funcionais e não
                        funcionais para alinhar objetivos.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Análise e Planejamento</h3>
                      <p>
                        Analisamos as informações coletadas para definir a
                        viabilidade do projeto, elaborar um cronograma e estimar
                        recursos, garantindo organização e clareza nas etapas
                        futuras.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Design e Desenvolvimento</h3>
                      <p>
                        Criamos wireframes e protótipos para a interface e, em
                        seguida, desenvolvemos o software com base nos
                        requisitos, seguindo as melhores práticas de
                        codificação.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Dispositivo de Teste e Lançamento</h3>
                      <p>
                        Realizamos testes rigorosos para identificar falhas e
                        garantir a qualidade do software. Após a validação pelo
                        cliente, o produto é liberado para uso.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-05.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Manutenção e Suporte</h3>
                      <p>
                        Oferecemos suporte contínuo e manutenção após o
                        lançamento, incluindo correções de bugs, atualizações de
                        segurança e melhorias baseadas no feedback dos usuários.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="driscription-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/service-driscription-img-3.png"
                    alt=""
                  />
                </div>
              </div>
              {/* <div className="driscription-content">
                <div className="row">
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu
                      ipsum fringilla, accumsan purus vel, pellentesque purus at
                      eros interdum, in dignissim nulla vestibulum. Nunc sit
                      amet finibus neque ac, aliquet nunc. In eu ipsum
                      fringilla, accumsan purus vel, pellentesque purus at eros
                      interdum, in dignissim nulla vestibulum. Nunc sit amet
                      finibus pellentesque quis magna eu vestibulum. Ut sed
                      commodo neque. Morbi erat ut, hendrerit vel tortor. In
                      pharetra lectus luctus ornare sollicitudin.
                    </p>
                  </div>
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu
                      ipsum fringilla, accumsan purus vel, pellentesque purus at
                      eros interdum, in dignissim nulla vestibulum. Nunc sit
                      amet finibus pellentesque quis magna eu vestibulum. Ut sed
                      commodo neque. Morbi erat ut, hendrerit vel tortor. In
                      pharetra lectus luctus ornare sollicitudin.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="faq-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/service-faq-img-01.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="faq-content-area">
                  <h2>Pricipais dúvidas dos Clientes</h2>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          O que é Data Analytics?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Data Analytics é o processo de examinar dados brutos
                          para extrair informações significativas, identificar
                          tendências e tomar decisões informadas com base em
                          evidências.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          Quais são os principais tipos de análise de dados?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Os principais tipos incluem análise descritiva (o que
                          aconteceu), análise diagnóstica (por que aconteceu),
                          análise preditiva (o que pode acontecer) e análise
                          prescritiva (o que deve ser feito).
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree2"
                          aria-expanded="false"
                          aria-controls="collapseThree2"
                        >
                          Como os dados são coletados para análise?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Os dados podem ser coletados de várias fontes, como
                          bancos de dados, pesquisas, sensores, redes sociais e
                          transações online, dependendo das necessidades
                          específicas do projeto.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour2"
                          aria-expanded="false"
                          aria-controls="collapseFour2"
                        >
                          Quais ferramentas são comumente usadas em Data
                          Analytics?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Ferramentas populares incluem Excel, Tableau, Power
                          BI, Google Analytics e linguagens de programação como
                          Python e R, que oferecem bibliotecas específicas para
                          análise de dados.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive2"
                          aria-expanded="false"
                          aria-controls="collapseFive2"
                        >
                          Como a análise de dados pode beneficiar meu negócio?
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A análise de dados ajuda a identificar padrões,
                          otimizar processos, melhorar a experiência do cliente
                          e tomar decisões estratégicas baseadas em dados,
                          resultando em maior eficiência e lucratividade.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix2"
                          aria-expanded="false"
                          aria-controls="collapseSix2"
                        >
                          O que é Big Data e como ele se relaciona com a análise
                          de dados?
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Big Data refere-se a conjuntos de dados extremamente
                          grandes e complexos. A análise de Big Data envolve
                          técnicas específicas para processar e analisar esses
                          dados, permitindo insights que não seriam possíveis
                          com conjuntos de dados menores.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home4-contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center magnetic-item">
                <h2 className="title">Eleve o potencial</h2>
                <h2 className="content">do seu negócio.</h2>
                <div className="contact-btn">
                  <Link legacyBehavior href="/contact">
                    <a className="magnetic-item">
                      Ajudamos você!
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;
