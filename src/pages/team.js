import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Team() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Nossa Equipe"
        title="Conheça nossa Equipe"
        pageName="NOSSA EQUIPE"
      />
      <div className="home3-team-area sec-mar">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
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
                  <span>Co-Founder, CEO & Data Science</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
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
                  <span>Co-Founder, COO & Data Analytics</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="experts-card magnetic-item">
                <div className="experts-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-4/experts-03.png"
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
                  <h4>Wesley Eufrasio</h4>
                  <span>Co-Founder, CTO & Software Engeenier</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 experts wow animate fadeInUp"
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
                  <h4>Renata Ribeiro </h4>
                  <span>Co-Founder, Head of Product and Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Team;
