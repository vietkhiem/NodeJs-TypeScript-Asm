import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CategoryType } from "../../../types/category";

type ProductManagerProps = {
  categorys: CategoryType[];
  onRemove: (id: number | string) => void;
};

const CategoryAdmin = (props: ProductManagerProps) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-[30px] ">
                    Danh Mục
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/category/add" className="no-underline">
                      <button type="button" className="btn btn-primary mb-2">
                        Thêm mới danh mục
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

                    <th colSpan={2} className="">
                      {" "}
                      <span className="pl-[50px]">Action</span>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.categorys?.map((category, index) => {
                    console.log(category);
                    return (
                      <tr key={index} className="border-bottom text-[20px]">
                        <td className="">{index + 1}</td>

                        <td> {category.name} </td>

                        <td colSpan={2}>
                          {" "}
                          <Link
                            to={`/admin/category/${category._id}/edit`}
                            className="btn btn-primary"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => props.onRemove(category._id)}
                            className="btn btn-danger ml-3"
                          >
                            Delete
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

export default CategoryAdmin;
