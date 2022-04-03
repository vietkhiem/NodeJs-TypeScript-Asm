import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};
const stylelogo = {
  width: "75px",
};

const Header = (props: Props) => {
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="top_nav_container">
              <div className="contact_nav">
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call : +84 123456789</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>Email : khiemnvph10889@fpt.edu.vn</span>
                </a>
              </div>
              <form className="search_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <button className="" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
              <div className="user_option_box">
                <a href="" className="account-link">
                  <i className="fa fa-user" aria-hidden="true" />
                  <NavLink to={"/signin"}>
                    <span>Sign In</span>
                  </NavLink>
                </a>
                <a href="/cart" className="cart-link">
                  <i className="fa fa-shopping-cart mr-3" aria-hidden="true" />
                  <span>Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="/">
                <img src="/images/logo.png" style={stylelogo} alt="" />
                <span>Minics Phone</span>{" "}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="product.html">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
