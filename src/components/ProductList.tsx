import React from "react";
import { NavLink } from "react-router-dom";
import { ProductType } from "../types/Product";
import HeaderBottom from "./HeaderBottom";

type ProductListProps = {
  products: ProductType[];
  onAddToCart: (cart: any) => void;
};
const ProductList = (props: ProductListProps) => {
  return (
    <div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Products</h2>
          </div>
          <div className="row">
            {props.products?.map((product, index) => {
              console.log(product);
              return (
                <div className="col-sm-6 col-lg-4">
                  <div className="box ">
                    <div className="img-box ">
                      <NavLink to={`/products/${product._id}`}>
                        {" "}
                        <img src={product.img} />
                      </NavLink>
                      <NavLink to={`/cart`}>
                        <a href="" className="add_cart_btn">
                          <span onClick={() => props.onAddToCart(product._id)}>
                            Add To Cart
                          </span>
                        </a>
                      </NavLink>
                    </div>
                    <div className="detail-box">
                      <NavLink to={`/products/${product._id}`}>
                        <h5>{product.name}</h5>
                      </NavLink>

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
    </div>
  );
};

export default ProductList;
