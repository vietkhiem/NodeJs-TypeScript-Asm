import React from "react";
import { NavLink } from "react-router-dom";
import { ProductType } from "../types/Product";

type ProductListProps = {
  products: ProductType[];
};
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Products</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="images/p7.png" alt="" />
                  <a href="" className="add_cart_btn">
                    <span> Add To Cart </span>
                  </a>
                </div>
                <div className="detail-box">
                  <h5>Product Name</h5>
                  <div className="product_info">
                    <h5>
                      <span>$</span> 300
                    </h5>
                    <div className="star_container">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_box">
            <a href="" className="view_more-link">
              {" "}
              View More{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
