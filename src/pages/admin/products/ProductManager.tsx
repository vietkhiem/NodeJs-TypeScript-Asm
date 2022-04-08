import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductType } from "../../../types/Product";

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number | string) => void;
};

const ProductManager = (props: ProductManagerProps) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-black mt-4 ">
                    Products
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products/add" className="no-underline">
                      <button type="button" className="btn btn-primary mb-5">
                        Add Products
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
              <table className="table table-success table-striped">
                <thead>
                  <tr className="border-bottom">
                    <th>
                      {" "}
                      <span className="ml-2">STT</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">Name</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">Image</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">Price</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">Status</span>{" "}
                    </th>

                    <th colSpan={2} className="">
                      {" "}
                      <span className="pl-[50px]">Action</span>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.products?.map((product, index) => {
                    console.log(product);
                    return (
                      <tr key={index} className="border-bottom text-[20px]">
                        <td className="">{index + 1}</td>
                        <td>{product.name}</td>
                        <td>
                          <img src={product.img} alt="" width="100px" />
                        </td>
                        <td>{product.price}</td>
                        <td>
                          {product.status ? "Kích hoạt" : "Không kích hoạt"}
                        </td>
                        <td colSpan={2}>
                          {" "}
                          <Link
                            to={`/admin/products/${product._id}/edit`}
                            className="btn btn-primary mr-2"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => props.onRemove(product._id)}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductManager;
