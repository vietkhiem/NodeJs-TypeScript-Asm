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

  const mystyle = {
    width: "50px",
  };
  return (
    <>
      <div>
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="top_nav_container">
                <div className="contact_nav">
                  <NavLink to={"/"}>
                    <img
                      src="/public/images/logo.png"
                      alt=""
                      style={mystyle}
                      className="mr-2"
                    />
                  </NavLink>
                  <a href="" className="mt-3">
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
        </header>
      </div>
    </>
  );
};

export default Header;
