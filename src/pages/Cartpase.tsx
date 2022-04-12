import React from "react";
import { NavLink } from "react-router-dom";
import { currencyPrice } from "../utils/formatMoney";

type Props = {
  onIncreaseItemInCart: (id: number) => void;
  onDecreaseItemInCart: (id: number) => void;
  onRemoveCart: (id: number) => void;
};

const CartPage = (props: Props) => {
  let cart: any = [];
  cart = JSON.parse(localStorage.getItem("cart") as string);
  let total = 0;
  return (
    <section className="">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" className="h5 ">
                      Products
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart &&
                    cart.map((item: any, index: number) => {
                      return (
                        <tr key={index}>
                          <td className="">{index + 1}</td>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <img
                                src={item.img}
                                className="img-fluid rounded-3"
                                style={{ width: 120 }}
                                alt="Book"
                              />
                              <div className="flex-column ms-4">
                                <NavLink
                                  to={`/products/${item._id}`}
                                  className="no-underline"
                                >
                                  {item.name}
                                </NavLink>
                              </div>
                            </div>
                          </th>
                          <td className="align-middle">
                            <p className="mb-5" style={{ fontWeight: 500 }}>
                              {currencyPrice(`${item.price * item.quantity}`)} $
                            </p>
                          </td>
                          <td className="pt-4">
                            <button
                              onClick={() =>
                                props.onDecreaseItemInCart(item._id)
                              }
                              className="btn increase border border-black "
                            >
                              -
                            </button>
                            <span className="">{item.quantity}</span>
                            <button
                              onClick={() =>
                                props.onIncreaseItemInCart(item._id)
                              }
                              className="btn decrease border border-black"
                            >
                              +
                            </button>
                          </td>
                          <td className="">
                            <button
                              onClick={() => props.onRemoveCart(item._id)}
                              className="btn btn-primary mt-3"
                            >
                              Remove
                            </button>
                          </td>
                          <td hidden>
                            {(total += item.price * item.quantity)}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="col-lg-4 bg-grey float-right ">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price:</h5>
                    <h5>${total}</h5>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark"
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
