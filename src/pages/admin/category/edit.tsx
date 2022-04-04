import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CategoryType } from "../../../types/category";
import { readCategory } from "../../../api/category";

type ProducAddProps = {
  onUpdate: (category: CategoryType) => void;
};
type FormInputs = {
  name: string;
};

const CategoryEdit = (props: ProducAddProps) => {
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
      const { data } = await readCategory(id);
      reset(data);
    };
    getProduct();
  }, [id]);

  const onSumbit: SubmitHandler<FormInputs> = (data) => {
    props.onUpdate(data);
    navigate("/admin/category");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products" className="no-underline">
                      <button type="button" className="btn btn-primary">
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
                      <div className="container mt-2 ">
                        <form
                          className="w-[800px] ml-[20px]"
                          onSubmit={handleSubmit(onSumbit)}
                        >
                          <div className="col-span-6 sm:col-span-4 py-3 ">
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
                          <button
                            type="submit"
                            className="btn btn-primary ml-[20px] mb-3"
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

export default CategoryEdit;
