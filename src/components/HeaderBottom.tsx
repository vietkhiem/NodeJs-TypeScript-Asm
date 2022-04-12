import React from "react";
import { NavLink } from "react-router-dom";

function HeaderBottom() {
  return (
    <div>
      <div className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="/">
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
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <NavLink to={"/products"}>
                    <li className="nav-item">
                      <a className="nav-link" href="/products">
                        {" "}
                        <div className="dropdown">
                          Category
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          ></div>
                        </div>
                      </a>
                    </li>
                  </NavLink>
                  <li className="nav-item">
                    <a className="nav-link" href="/products">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <NavLink to={"/blog"}>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        Blog
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
