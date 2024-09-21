import Link from "next/link";
import React from "react";
import blogData from "../../data/blogData.json";

function Home3Blog() {
  return (
    <div className="home3-blog-area sec-mar">
      <div className="container">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="section-title-3 text-center">
            <h2>Alguns Artigos</h2>
            <br />
          </div>
        </div>
        <div className="row g-lg-4 gy-5">
          {blogData.map((item) => {
            const { id, category, img, date, count_comment, title, link } =
              item;
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6 wow animate fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog magnetic-item">
                  <div className="blog-img">
                    <img className="img-fluid" src={img} alt="" />
                    <div className="blog-tag">
                      <Link legacyBehavior href={link}>
                        <a>{category}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>{date}</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Comentário(s) ({count_comment})</a>
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link legacyBehavior href={link}>
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <div className="blog-footer">
                      <div className="read-btn">
                        <Link legacyBehavior href={link}>
                          <a>
                            Continuar lendo
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                      <div className="social-area">
                        <ul>
                          <li>
                            <a
                              href="https://www.instagram.com/bigminds.tech/"
                              target="_blank"
                            >
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/bigmindstech/"
                              target="_blank"
                            >
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                        </ul>
                        <span>
                          <img src="/assets/img/home-3/plain-icon.svg" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {/* <li className="page-item disabled">
                  <a className="page-link">
                    <i className="bi bi-arrow-left" />
                  </a>
                </li> */}
              <li className="page-item">
                <a className="page-link active" href="#">
                  1
                </a>
              </li>
              {/* <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="bi bi-arrow-right" />
                  </a>
                </li> */}
            </ul>
            <br />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog;
