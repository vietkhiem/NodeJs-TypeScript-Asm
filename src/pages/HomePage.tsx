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

type HomePageProps = {
  products: ProductType[];
  posts: PostType[];
  categorys: CategoryType[];
  onAddToCart: (cart: any) => void;
};

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Advise categorys={props.categorys} />
                    {/* <div className="detail-box">
                      <h1>Welcome To Minics Phone</h1>
                      <p>
                        The world is quickly moving to 5G. Streaming,
                        downloading — everything happens so much faster. 5G is
                        even fast enough for serious multiplayer gaming, sharing
                        AR videos, and more. With Smart Data mode, iPhone will
                        downshift automatically to save power when you don’t
                        need all that speed.
                      </p>
                      <a href=""> Read More </a>
                    </div> */}
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/dark.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Welcome to our shop</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iste quam velit saepe dolorem deserunt quo quidem
                        ad optio.
                      </p>
                      <a href=""> Read More </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Welcome to our shop</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iste quam velit saepe dolorem deserunt quo quidem
                        ad optio.
                      </p>
                      <a href=""> Read More </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn_box">
            {/* <a
              className="carousel-control-prev"
              href="#customCarousel1"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a> */}
            {/* <a
              className="carousel-control-next"
              href="#customCarousel1"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        </div>
      </section>

      <ProductList products={props.products} onAddToCart={props.onAddToCart} />

      <BannerBottom />

      <Blog posts={props.posts} />

      <Partners />

      <Review />
    </>
  );
};

export default HomePage;
