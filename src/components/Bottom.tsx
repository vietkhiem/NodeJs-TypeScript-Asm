import React from "react";

type Props = {};

const Bottom = (props: Props) => {
  return (
    <div>
      <>
        <section className="info_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_contact">
                  <h5>
                    <a href="" className="navbar-brand">
                      <span> Minics </span>
                    </a>
                  </h5>
                  <p>
                    <i className="fa fa-map-marker mr-2" aria-hidden="true" />
                    Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam
                    Từ Liêm, Hà Nội, Việt Nam
                  </p>
                  <p>
                    <i className="fa fa-phone mr-2" aria-hidden="true" />
                    +84 123456789
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-2" aria-hidden="true" />
                    Khiemnvph10889@fpt.edu.vn
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_info">
                  <h5>Information</h5>
                  <p>
                    Eligendi sunt, provident, debitis nemo, facilis cupiditate
                    velit libero dolorum aperiam enim nulla iste maxime corrupti
                    ad illo libero minus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_links">
                  <h5>Useful Link</h5>
                  <ul>
                    <li>
                      <a href="index.html"> Home </a>
                    </li>
                    <li>
                      <a href="about.html"> About </a>
                    </li>
                    <li>
                      <a href="product.html"> Products </a>
                    </li>
                    <li>
                      <a href="why.html"> Why Us </a>
                    </li>
                    <li>
                      <a href="testimonial.html"> Testimonial </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_form">
                  <h5>Newsletter</h5>
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form>
                  <div className="social_box">
                    <a href="">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="">
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <footer className="footer_section">
          <div className="container">
            <p>
              © <span id="displayYear" /> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Bottom;
