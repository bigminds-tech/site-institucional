import React, { useState } from "react";

function Home3Team({ showTitle = true, showDescription = true }) {
  return (
    <div className="home3-team-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              {showTitle && <h2>Nossa Equipe</h2>}
              {showDescription && (
                <p>
                  Nossa equipe é formada por profissionais apaixonados e
                  especializados, que colaboram para criar soluções inovadoras.
                  Com foco em resultados e excelência, estamos prontos para
                  atender às suas necessidades.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-sm-6 experts wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="experts-card magnetic-item">
              <div className="experts-img">
                <img
                  className="img-fluid"
                  src="assets/img/home-4/experts-01.png"
                  alt=""
                />
                <div className="expert-social">
                  <ul>
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
              <div className="experts-content">
                <h4>Luís Varas</h4>
                <span>
                  Co-Founder,
                  <br /> CEO & Data Science
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 experts wow animate fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="experts-card magnetic-item">
              <div className="experts-img">
                <img
                  className="img-fluid"
                  src="assets/img/home-4/experts-02.png"
                  alt=""
                />
                <div className="expert-social">
                  <ul>
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
              <div className="experts-content">
                <h4>Ailton Macedo</h4>
                <span>
                  Co-Founder, <br />
                  CTO Software Engineer & Data Analytics
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 experts wow animate fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="experts-card magnetic-item">
              <div className="experts-img">
                <img
                  className="img-fluid"
                  src="assets/img/home-4/experts-04.png"
                  alt=""
                />
                <div className="expert-social">
                  <ul>
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
              <div className="experts-content">
                <h4>Renata Ribeiro</h4>
                <span>
                  Co-Founder, <br />
                  Head of Product and Project Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Team;
