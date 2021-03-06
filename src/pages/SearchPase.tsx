import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SearchProductByName } from "../api/products";
import { ProductType } from "../types/Product";

type Props = {
  products: ProductType[];
};

const SearchPase = (props: Props) => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Products</h2>
        </div>
        <div className="row">
          {props.products.map((product, index) => {
            console.log(product);
            return (
              <div className="col-sm-6 col-lg-4">
                <div className="box ">
                  <div className="img-box ">
                    <NavLink to={`/products/${product._id}`}>
                      {" "}
                      <img src={product.img} />
                    </NavLink>
                    <NavLink to={`/products/${product._id}`}>
                      <a href="" className="add_cart_btn">
                        <span> Product Details </span>
                      </a>
                    </NavLink>
                  </div>
                  <div className="detail-box">
                    <h5>{product.name}</h5>
                    <div className="product_info">
                      <h5>
                        <span>$</span> {product.price}
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
            );
          })}
        </div>
        <div className="btn_box">
          <a href="" className="view_more-link">
            {" "}
            View More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SearchPase;
