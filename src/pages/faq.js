import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { useState } from "react";

function Faqpage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Adicione sua chave de acesso aqui
    formData.append("access_key", "cc349223-96e0-45b9-a20a-74c286434005");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Submission failed: " + error.message);
    }
  };

  return (
    <Layout>
      <Head>
        <title>FAQ | Transformamos Ideias em Inovação.</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Encontre respostas para as perguntas mais frequentes sobre 
          os serviços da BigMinds Tech. Esclareça suas dúvidas sobre Desenvolvimento 
          Web, Soluções Cloud, Pagamento via QR Code e muito mais."
        />
        <meta
          name="keywords"
          content="FAQ, perguntas frequentes, BigMinds Tech, desenvolvimento web, 
          soluções cloud, pagamento via QR Code, automação de processos, 
          consultoria em tecnologia"
        ></meta>
      </Head>
      <Breadcrumb pageList="FAQ" title="Perguntas frequentes?" pageName="FAQ" />
      <div className="faq-page sec-mar">
        <div className="container">
          <div className="row gy-5 justify-content-lg-between justify-content-center">
            <div className="col-lg-4">
              <div className="faq-items">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="ac01-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac01"
                      type="button"
                      role="tab"
                      aria-controls="ac01"
                      aria-selected="true"
                    >
                      Desenvolvimento Web & Mobile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac02-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac02"
                      type="button"
                      role="tab"
                      aria-controls="ac02"
                      aria-selected="false"
                    >
                      Desenvolvimento de Software
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac03-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac03"
                      type="button"
                      role="tab"
                      aria-controls="ac03"
                      aria-selected="false"
                    >
                      Solução Integrada de Gestão de Dados
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac04-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac04"
                      type="button"
                      role="tab"
                      aria-controls="ac04"
                      aria-selected="false"
                    >
                      Automação de Processos
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac05-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac05"
                      type="button"
                      role="tab"
                      aria-controls="ac05"
                      aria-selected="false"
                    >
                      Solução de Pagamento via QR Code
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac06-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac06"
                      type="button"
                      role="tab"
                      aria-controls="ac06"
                      aria-selected="false"
                    >
                      Soluções Cloud
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="ac07-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ac07"
                      type="button"
                      role="tab"
                      aria-controls="ac07"
                      aria-selected="false"
                    >
                      UX/UI
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>TEM ALGUMA PERGUNTA?</h5>
                </div>
                <div className="contact-form">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Nome</label>
                          <input type="text" name="firstName" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Sobrenome</label>
                          <input type="text" name="lastName" required />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Empresa</label>
                          <input type="text" name="company" required />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" name="email" required />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Telefone</label>
                          <input type="text" name="phone" required />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Mensagem</label>
                          <textarea name="message" required></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="ac01"
                  role="tabpanel"
                  aria-labelledby="ac01-tab"
                >
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          O que é Desenvolvimento Web & Mobile?
                        </button>
                      </h5>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          O Desenvolvimento Web & Mobile refere-se à criação de
                          sites e aplicações para a internet. Isso inclui
                          design, programação e manutenção de páginas web.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Quais são as etapas do processo de desenvolvimento
                          web?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          As etapas principais incluem planejamento, design,
                          desenvolvimento, testes e lançamento. Cada fase é
                          crucial para garantir um produto final de qualidade.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Quanto tempo leva para desenvolver um site?
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          O tempo de desenvolvimento varia conforme a
                          complexidade do projeto. Sites simples podem ser
                          concluídos em algumas semanas, enquanto soluções mais
                          complexas podem levar meses.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          O que é um site responsivo?
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Um site responsivo é projetado para funcionar em
                          diferentes dispositivos e tamanhos de tela, garantindo
                          uma boa experiência para os usuários,
                          independentemente de como eles acessam o site.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Como posso melhorar o SEO do meu site?
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Melhorar o SEO envolve otimizar conteúdo, usar
                          palavras-chave relevantes, melhorar a velocidade de
                          carregamento e garantir que o site seja fácil de
                          navegar tanto para usuários quanto para mecanismos de
                          busca.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          O que acontece após o lançamento do meu site?
                        </button>
                      </h5>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Após o lançamento, é importante monitorar o
                          desempenho, realizar atualizações regulares e
                          implementar melhorias com base no feedback dos
                          usuários e nas análises de tráfego.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ac02"
                  role="tabpanel"
                  aria-labelledby="ac02-tab"
                >
                  <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          O que é desenvolvimento de software?
                        </button>
                      </h5>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Desenvolvimento de software é o processo de concepção,
                          codificação, testes e manutenção de aplicações e
                          sistemas para atender a necessidades específicas dos
                          usuários.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo1"
                          aria-expanded="false"
                          aria-controls="collapseTwo1"
                        >
                          Quais são as principais etapas do desenvolvimento de
                          software?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          As etapas incluem levantamento de requisitos, design,
                          implementação, testes, implantação e manutenção. Cada
                          fase é essencial para garantir um produto de alta
                          qualidade.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree1"
                          aria-expanded="false"
                          aria-controls="collapseThree1"
                        >
                          Qual é a diferença entre software sob demanda e
                          software pronto?
                        </button>
                      </h5>
                      <div
                        id="collapseThree1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Software sob demanda é personalizado para atender às
                          necessidades específicas de um cliente, enquanto
                          software pronto é uma solução genérica que pode ser
                          usada por qualquer pessoa.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour1"
                          aria-expanded="false"
                          aria-controls="collapseFour1"
                        >
                          Como garantir a qualidade do software desenvolvido?
                        </button>
                      </h5>
                      <div
                        id="collapseFour1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A qualidade é garantida por meio de testes rigorosos
                          em várias etapas do desenvolvimento, incluindo testes
                          unitários, de integração e de aceitação, além de
                          revisões de código.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive1"
                          aria-expanded="false"
                          aria-controls="collapseFive1"
                        >
                          O que é Agile e como ele se aplica ao desenvolvimento
                          de software?
                        </button>
                      </h5>
                      <div
                        id="collapseFive1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Agile é uma abordagem de desenvolvimento que enfatiza
                          a flexibilidade, colaboração e entregas incrementais.
                          Ele permite que equipes se adaptem rapidamente às
                          mudanças nas necessidades do cliente.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix1"
                          aria-expanded="false"
                          aria-controls="collapseSix1"
                        >
                          Após o lançamento, como é feita a manutenção do
                          software?
                        </button>
                      </h5>
                      <div
                        id="collapseSix1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A manutenção envolve atualizações regulares, correção
                          de bugs e melhorias com base no feedback dos usuários.
                          É importante garantir que o software continue a
                          atender às necessidades do negócio.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ac03"
                  role="tabpanel"
                  aria-labelledby="ac03-tab"
                >
                  <div className="accordion" id="accordionExample3">
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
                <div
                  className="tab-pane fade"
                  id="ac04"
                  role="tabpanel"
                  aria-labelledby="ac04-tab"
                >
                  <div className="accordion" id="accordionExample3">
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
                          O que são Automações de Processos?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Automação de processos refere-se ao uso de tecnologia
                          para executar tarefas e fluxos de trabalho
                          repetitivos, reduzindo a necessidade de intervenção
                          manual. Isso pode incluir desde simples automações até
                          sistemas complexos de gerenciamento de processos.
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
                          Quais são os benefícios da automação de processos?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Os principais benefícios incluem:
                          <ul>
                            <li>
                              Aumento da eficiência: Redução de tempo e esforço
                              em tarefas repetitivas.
                            </li>
                            <li>
                              Redução de erros: Minimização de erros humanos nas
                              operações.
                            </li>
                            <li>
                              Economia de custos: Diminuição de custos
                              operacionais ao liberar recursos para atividades
                              mais estratégicas.
                            </li>
                          </ul>
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
                          Quais processos podem ser automatizados?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Praticamente qualquer processo repetitivo pode ser
                          automatizado, incluindo:
                          <br />
                          <ul>
                            <li>Processamento de dados.</li>
                            <li>Gestão de inventário.</li>
                            <li>Atendimento ao cliente.</li>
                            <li>Faturamento e contabilidade.</li>
                          </ul>
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
                          Como implementar a automação de processos?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Para implementar a automação, siga etapas como:
                          <br />
                          <ul>
                            <li>
                              Identificar processos que podem ser automatizados.
                            </li>
                            <li>Definir objetivos claros.</li>
                            <li>
                              Escolher ferramentas de automação adequadas.
                            </li>
                            <li>
                              Testar e monitorar o desempenho após a
                              implementação.
                            </li>
                          </ul>
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
                          A automação de processos substitui trabalhadores
                          humanos?
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Embora a automação possa substituir algumas funções
                          repetitivas, ela geralmente complementa o trabalho
                          humano, permitindo que os funcionários se concentrem
                          em tarefas mais estratégicas e criativas. A automação
                          deve ser vista como uma ferramenta para aumentar a
                          produtividade.
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
                          Quais ferramentas são comumente usadas para automação
                          de processos?
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Algumas ferramentas populares incluem:
                          <br />
                          <ul>
                            <li>
                              Zapier: Conecta diferentes aplicativos para
                              automação de tarefas.
                            </li>
                            <li>
                              UiPath: Focada em automação robótica de processos
                              (RPA).
                            </li>
                            <li>
                              Microsoft Power Automate: Facilita a automação de
                              fluxos de trabalho dentro do ecossistema
                              Microsoft.
                            </li>
                            <li>Entre outros.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ac05"
                  role="tabpanel"
                  aria-labelledby="ac05-tab"
                >
                  <div className="accordion" id="accordionExample3">
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
                          O que são soluções de Pagamento via QR Code?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">...</div>
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
                          Quais são os principais tipos de serviços em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              IaaS (Infrastructure as a Service): Infraestrutura
                              básica como servidores e armazenamento.
                            </li>
                            <li>
                              PaaS (Platform as a Service): Plataformas para
                              desenvolvimento e implementação de aplicativos.
                            </li>
                            <li>
                              SaaS (Software as a Service): Software acessado
                              via internet, como e-mails e ferramentas de
                              colaboração.
                            </li>
                          </ul>
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
                          Quais são as vantagens das soluções em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Algumas vantagens incluem:
                          <br />
                          <ul>
                            <li>Redução de custos com infraestrutura.</li>
                            <li>Escalabilidade fácil e rápida.</li>
                            <li>Acesso remoto a dados e aplicativos.</li>
                            <li>Atualizações automáticas de software.</li>
                          </ul>
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
                          A segurança é garantida em soluções em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Embora muitos provedores ofereçam robustas medidas de
                          segurança, a responsabilidade pela segurança dos dados
                          é compartilhada entre o provedor e o usuário. É
                          essencial implementar práticas de segurança como
                          criptografia e autenticação de múltiplos fatores.
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
                          Como escolher um provedor de nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Ao escolher um provedor, considere fatores como:
                          <br />
                          <ul>
                            <li>Confiabilidade e uptime.</li>
                            <li>Segurança e conformidade.</li>
                            <li>Suporte técnico.</li>
                            <li>Custo e modelos de pagamento.</li>
                          </ul>
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
                          O que é a nuvem híbrida?
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A nuvem híbrida combina soluções de nuvem pública e
                          privada, permitindo que as empresas aproveitem os
                          benefícios de ambas. Isso proporciona maior
                          flexibilidade e opções de escalabilidade, além de
                          permitir que dados sensíveis sejam mantidos em
                          ambientes privados.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ac06"
                  role="tabpanel"
                  aria-labelledby="ac06-tab"
                >
                  <div className="accordion" id="accordionExample3">
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
                          O que são soluções em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Soluções em nuvem referem-se a serviços que são
                          entregues pela internet, permitindo que empresas
                          armazenem, gerenciem e processem dados em servidores
                          remotos, ao invés de em servidores locais.
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
                          Quais são os principais tipos de serviços em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              IaaS (Infrastructure as a Service): Infraestrutura
                              básica como servidores e armazenamento.
                            </li>
                            <li>
                              PaaS (Platform as a Service): Plataformas para
                              desenvolvimento e implementação de aplicativos.
                            </li>
                            <li>
                              SaaS (Software as a Service): Software acessado
                              via internet, como e-mails e ferramentas de
                              colaboração.
                            </li>
                          </ul>
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
                          Quais são as vantagens das soluções em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Algumas vantagens incluem:
                          <br />
                          <ul>
                            <li>Redução de custos com infraestrutura.</li>
                            <li>Escalabilidade fácil e rápida.</li>
                            <li>Acesso remoto a dados e aplicativos.</li>
                            <li>Atualizações automáticas de software.</li>
                          </ul>
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
                          A segurança é garantida em soluções em nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Embora muitos provedores ofereçam robustas medidas de
                          segurança, a responsabilidade pela segurança dos dados
                          é compartilhada entre o provedor e o usuário. É
                          essencial implementar práticas de segurança como
                          criptografia e autenticação de múltiplos fatores.
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
                          Como escolher um provedor de nuvem?
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Ao escolher um provedor, considere fatores como:
                          <br />
                          <ul>
                            <li>Confiabilidade e uptime.</li>
                            <li>Segurança e conformidade.</li>
                            <li>Suporte técnico.</li>
                            <li>Custo e modelos de pagamento.</li>
                          </ul>
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
                          O que é a nuvem híbrida?
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A nuvem híbrida combina soluções de nuvem pública e
                          privada, permitindo que as empresas aproveitem os
                          benefícios de ambas. Isso proporciona maior
                          flexibilidade e opções de escalabilidade, além de
                          permitir que dados sensíveis sejam mantidos em
                          ambientes privados.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ac07"
                  role="tabpanel"
                  aria-labelledby="ac07-tab"
                >
                  <div className="accordion" id="accordionExample3">
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
                          Qual é a diferença entre UX e UI?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          UX se refere à experiência geral do usuário ao
                          interagir com um produto, focando na usabilidade,
                          acessibilidade e satisfação. UI, por outro lado, diz
                          respeito ao design visual e à interação do usuário com
                          a interface, incluindo botões, cores e tipografia.
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
                          Por que a pesquisa de usuários é importante?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A pesquisa de usuários é crucial para entender as
                          necessidades, comportamentos e expectativas do
                          público-alvo. Isso ajuda a criar produtos mais
                          relevantes e eficazes, melhorando a experiência do
                          usuário.
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
                          Quais são as melhores práticas de design de UI?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Algumas melhores práticas incluem: <br />
                          <ul>
                            <li>
                              Manter aconsistência nas cores e tipografia.
                            </li>
                            <li>
                              Utilizar espaçamento adequado para facilitar a
                              leitura.
                            </li>
                            <li>
                              Garantir que os botões sejam intuitivos e
                              acessíveis.
                            </li>
                          </ul>
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
                          Como testar a experiência do usuário?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Os testes de usabilidade podem ser realizados através
                          de métodos como entrevistas, testes A/B, protótipos
                          interativos e feedback direto dos usuários. Essas
                          abordagens ajudam a identificar problemas e áreas de
                          melhoria.
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
                          O que é design responsivo?
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          O design responsivo garante que um site ou aplicativo
                          funcione bem em uma variedade de dispositivos e
                          tamanhos de tela. Isso envolve o uso de grades
                          fluidas, imagens flexíveis e media queries para
                          adaptar o layout.
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
                          Como a acessibilidade se relaciona com UX/UI?
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          A acessibilidade é uma parte vital do design de UX/UI,
                          garantindo que todos os usuários, incluindo aqueles
                          com deficiências, possam interagir com o produto. Isso
                          envolve práticas como uso de contrastes adequados,
                          navegação por teclado e textos alternativos para
                          imagens.
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
    </Layout>
  );
}

export default Faqpage;
