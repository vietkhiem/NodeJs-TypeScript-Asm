import React, { useEffect, useState } from "react";
import { isAuthenticate } from "../utils/localStorage";
import { NavLink } from "react-router-dom";
import Search from "./Search";

type Props = {
  search: (keyword: string) => void;
};

const Header = (props: Props) => {
  const user = isAuthenticate();
  const [signout, setSignout] = useState(true);

  const check = () => {
    if (signout == true && user) {
      return (
        <div className="">
          <p>Xin chào: {user?.user.name} !</p>
          <NavLink
            to=""
            onClick={() => {
              localStorage.removeItem("user"), setSignout(false);
            }}
          >
            Đăng xuất
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="">
          <p>Xin chào!</p>

          <NavLink
            to="/signin"
            onClick={() => {
              setSignout(true);
            }}
          >
            Đăng nhập
          </NavLink>
        </div>
      );
    }
  };
  useEffect(() => {
    console.log(1);
    // setSignout(true)
  });
  return (
    <>
      <div>
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="top_nav_container">
                <div className="contact_nav">
                  <a href="">
                    <i className="fa fa-phone mr-2" aria-hidden="true" />
                    <span className="">Call : +84 123456789</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope mr-2" aria-hidden="true" />
                    <span>Email : khiemnvph10889@fpt.edu.vn</span>
                  </a>
                </div>
                {/* <form className="search_form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                  <button className="" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form> */}
                <Search onSearch={props.search} />

                <div className="user_option_box">
                  {/* <a href="" className="account-link">
                    <i className="fa fa-user" aria-hidden="true" />
                    <NavLink to={"/signin"}>
                      <span>Sign In</span>
                    </NavLink>
                  </a> */}
                  <a href="/cart" className="cart-link">
                    <i
                      className="fa fa-shopping-cart mr-3"
                      aria-hidden="true"
                    />
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
                            {/* <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            ></div> */}
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
        </header>
      </div>
    </>
  );
};

export default Header;
