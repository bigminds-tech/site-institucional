import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Contactpage() {
  return (
    <Layout>
      <Breadcrumb pageList="Contato" title="Fale Conosco" pageName="CONTATO" />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>FALE CONOSCO</span>
                <h2>VAMOS TRABALHAR JUNTOS?</h2>
                <p>
                  Estamos aqui para ouvir você! Se tiver dúvidas, sugestões ou
                  quiser discutir como podemos trabalhar juntos, não hesite em
                  nos contatar. Nossa equipe está pronta para ajudá-lo a
                  encontrar as melhores soluções para o seu negócio. Vamos
                  transformar suas ideias em realidade!
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>
                        Av. Engenheiro Luís Carlos Berrini, 1681 - Cidade
                        Monções, São Paulo - SP, 04571-011
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:+5511972331450">+55 (11) 97233-1450</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto:contato@bigminds.tech">
                        contato@bigminds.tech
                      </a>
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">
                    Siga nossas Redes Sociais
                  </h5>
                  <p className="para">Para mais informações</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a
                          href="https://www.instagram.com/bigminds.tech/"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      {/* <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li> */}
                      <li>
                        <a
                          href="https://www.linkedin.com/company/bigmindstech/"
                          target="_blank"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Entre em contato</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Nome</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Sobrenome</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Empresa</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Telefone</label>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Mensagem</label>
                          <textarea defaultValue={""} />
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contactpage;
