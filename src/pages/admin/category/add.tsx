import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { CategoryType } from "../../../types/category";

type ProducAddProps = {
  onAdd: (category: CategoryType) => void;
};
type FromInput = {
  name: string;
};

const CategoryAdd = (props: ProducAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FromInput> = (data) => {
    props.onAdd(data);
    navigate("/admin/category");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-black mt-3 ">
                    Thêm Danh Mục
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/category" className="no-underline">
                      <button
                        type="button"
                        className="btn btn-primary mb-2 ml-3"
                      >
                        Quay lại
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
              <div className="container mt-2">
                <form
                  className="w-[800px] ml-[20px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-span-6 sm:col-span-4 py-[30px]">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      {...register("name")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary ml-[20px] my-[30px] mt-2"
                  >
                    Thêm mới
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CategoryAdd;
