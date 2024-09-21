import Link from "next/link";
import React from "react";

function Choose6() {
  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div
                className="col-lg-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose-title">
                  <span>Por que nos escolher</span>
                  <h2>Eleve o potencial do seu negócio.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/choose-img-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="assets/img/logo.svg" alt="" />
                  </div>
                  <h4>
                    Empresa líder em soluções criativas de TI,
                    <br />
                    <span>reconhecida pela inovação e excelência.</span>
                  </h4>
                  <p>
                    Com uma abordagem centrada no cliente, oferecemos soluções
                    personalizadas que impulsionam o crescimento e a eficiência
                    dos negócios. Nossa equipe de especialistas está sempre
                    pronta para transformar suas ideias em realidade, garantindo
                    resultados impactantes e duradouros.
                  </p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link legacyBehavior href="/about">
                      <a>
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        Saiba mais
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>+ Estratégia</h4>
                          <p>
                            Uma estratégia sólida é fundamental para o sucesso.
                            Na BigMinds Tech, garantimos que cada ação esteja
                            alinhada aos objetivos do seu negócio.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>+ Audiência</h4>
                          <p>
                            Entender sua audiência é essencial. Nossas soluções
                            criam conexões significativas, aumentando o
                            engajamento e a lealdade.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>+ Resultados</h4>
                          <p>
                            Focamos em resultados concretos. Com tecnologia e
                            insights estratégicos, ajudamos sua empresa a
                            superar metas e alcançar desempenho excepcional.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
