import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { read } from "../../../api/products";
import { CategoryType } from "../../../types/category";
import { ProductType } from "../../../types/Product";

type ProductAddProps = {
  categorys: CategoryType[];
  onUpdate: (product: ProductType) => void;
};
type FormInputs = {
  name: string;
  price: number;
  img: string;
  desc: string;
  status: number;
  thumnail: string;
};

const ProductEdit = (props: ProductAddProps) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    };
    getProduct();
  }, [id]);

  const onSumbit: SubmitHandler<FormInputs> = (data) => {
    props.onUpdate(data);
    navigate("/admin/products");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="flex flex-col my-[20px]">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <h2 className="text-black mt-3 mb-2">Update Products</h2>

                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <div className="container mt-2">
                        <form
                          className="w-[800px] ml-[20px]"
                          onSubmit={handleSubmit(onSumbit)}
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
                              Image
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="img"
                              {...register("thumnail")}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-4 pb-[30px]">
                            <label className="block text-sm font-medium text-black">
                              Details
                            </label>
                            <div className="mb-6">
                              <textarea
                                id="details"
                                {...register("desc")}
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="">Status</label>
                            <input
                              type="radio"
                              {...register("status")}
                              value={0}
                            />
                            Không kích hoạt
                            <input
                              type="radio"
                              {...register("status")}
                              value={1}
                            />
                            Kích hoạt
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-black"></label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"></div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary ml-[20px] my-[30px] mb-4"
                          >
                            Update
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

export default ProductEdit;
