import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/Product";

type ProducAddProps = {
  onAdd: (product: ProductType) => void;
};
type FromInput = {
  name: string;
  price: number;
  img: string;
};

const ProducAdd = (props: ProducAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FromInput> = (data) => {
    props.onAdd(data);
    navigate("/admin/products");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="mt-5 text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate mt-[30px] ">
                    Thêm Sản Phẩm Mới
                  </h2>
                  <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"></div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products" className="no-underline">
                      <button type="button" className="btn btn-primary mb-2">
                        Quay lai
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
              <div className="flex flex-col my-[20px]">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <div className="container mt-2">
                        <form
                          className="w-[800px] ml-[20px]"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="col-span-6 sm:col-span-4 py-[30px]">
                            <label className="block text-sm font-medium text-black">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              {...register("name")}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-4 pb-[30px]">
                            <label className="block text-sm font-medium text-black">
                              Price
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="price"
                              {...register("price")}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-4 pb-[30px]">
                            <label className="block text-sm font-medium text-black">
                              Image
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="img"
                              {...register("img")}
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4 pb-[30px]">
                            <label className="block text-sm font-medium text-black">
                              Details
                            </label>
                            <div className="mb-6">
                              <textarea
                                id="details"
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary ml-[20px] my-[30px] mt3 mb-3"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProducAdd;
