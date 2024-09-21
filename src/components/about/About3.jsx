import { useRouter } from "next/router";
import React from "react";

function About3() {
  const currentRoute = useRouter().pathname;
  return (
    <div
      className={`home3-about-section ${
        currentRoute === "/about" ? "sec-mar" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div
              className="section-title-3 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>Nossa Abordagem</h2>
              <p>
                Adotamos uma abordagem colaborativa e centrada no cliente,
                dedicando tempo para entender suas necessidades e desafios.
                Valorizamos a comunicação aberta e o feedback contínuo,
                permitindo-nos criar soluções personalizadas que se alinham
                perfeitamente aos seus objetivos. Com foco em inovação e
                qualidade, garantimos que cada projeto não só atenda, mas supere
                suas expectativas.
              </p>
            </div>
            <div className="about-left">
              <div
                className="about-img  wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/home3-about-1.png"
                  alt=""
                />
              </div>
              <div
                className="about-content wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>Eleve o potencial do seu negócio.</h2>
                <p>
                  Acreditamos em entregar soluções personalizadas que são
                  projetadas para atender às suas necessidades exclusivas. Nós
                  dedicamos tempo para entender o seu negócio e fornecer
                  serviços personalizados que se alinham com seus objetivos.
                </p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>Soluções Personalizadas</h5>
                    <p>
                      Desenvolvemos soluções sob medida, alinhadas às
                      necessidades específicas do seu negócio, garantindo
                      resultados eficazes.
                    </p>
                  </li>
                  <li>
                    <h5>Qualidade & Confiabilidade</h5>
                    <p>
                      Comprometemo-nos com altos padrões de qualidade,
                      oferecendo serviços confiáveis que você pode contar para
                      alcançar seus objetivos.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/home3-about-2.png"
                  alt=""
                />
              </div>
              <div
                className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="exp-text">
                  <img src="assets/img/home-3/rotate-text.png" alt="" />
                </div>
                <div className="years">
                  <h2>
                    +15
                    <br />
                    <span>Anos</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
