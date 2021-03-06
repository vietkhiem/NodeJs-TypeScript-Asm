import React from "react";
import Advise from "../components/Advise";
import BannerBottom from "../components/BannerBottom";
import Blog from "../components/Blog";
import Partners from "../components/Partners";
import ProductList from "../components/ProductList";
import Review from "../components/Review";
import { CategoryType } from "../types/category";
import { PostType } from "../types/Post";
import { NavLink } from "react-router-dom";

import { ProductType } from "../types/Product";
import Banner from "../components/Banner";

type HomePageProps = {
  products: ProductType[];
  posts: PostType[];
  categorys: CategoryType[];
  onAddToCart: (cart: any) => void;
};

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <div className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <NavLink to={"/"}>
                <a className="navbar-brand" href="/">
                  <span>Minics Phone</span>{" "}
                </a>
              </NavLink>
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
                          >
                            <Advise categorys={props.categorys} />
                          </div>
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

      <Banner />

      <ProductList products={props.products} onAddToCart={props.onAddToCart} />

      <BannerBottom />

      <Blog posts={props.posts} />

      <Partners />

      <Review />
    </>
  );
};

export default HomePage;
