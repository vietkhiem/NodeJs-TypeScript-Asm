import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { read } from "../api/products";
import Header from "../components/Header";
import { ProductType } from "../types/Product";

type Props = {};

const ProductsDetail = (props: Props) => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <a href="">
                      <img src={product?.img} />
                    </a>
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <a href="">
                        <img src={product?.thumnail} />
                      </a>
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <a href="">
                        <img src={product?.thumnail} />
                      </a>
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <a href="">
                        <img src={product?.thumnail} />
                      </a>
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <a href="">
                        <img src={product?.thumnail} />
                      </a>
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <a href="">
                        <img src={product?.thumnail} />
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product?.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">{product?.desc}</p>
                <h4 className="price">
                  current price: <span>${product?.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                {/* <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    xl
                  </span>
                </h5> */}
                {/* <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  />
                  <span className="color green" />
                  <span className="color blue" />
                </h5> */}
                <div className="action">
                  <NavLink to={"/cart"}>
                    <button
                      className="add-to-cart btn btn-default "
                      type="button"
                    >
                      add to cart
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
