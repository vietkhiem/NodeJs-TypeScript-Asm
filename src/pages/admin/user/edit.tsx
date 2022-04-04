import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { readusers } from "../../../api/user";
import { UserType } from "../../../types/user";

type ProducAddProps = {
  onUpdate: (users: UserType) => void;
};
type FromInput = {
  name: string;
  email: string;
  password: string | number;
};

const UserEdit = (props: ProducAddProps) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FromInput>();
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readusers(id);
      reset(data);
    };
    getProduct();
  }, [id]);

  const onSumbit: SubmitHandler<FromInput> = (data) => {
    props.onUpdate(data);
    navigate("/admin/user");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-[30px] ">
                    Sửa tài khoản
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products" className="no-underline">
                      <button type="button" className=" btn btn-primary mb-2">
                        Quayyy Lại
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
                          onSubmit={handleSubmit(onSumbit)}
                          method="post"
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
                          <div className="col-span-6 sm:col-span-4 py-[30px]">
                            <label className="block text-sm font-medium text-gray-700">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              {...register("email")}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-4 py-[30px]">
                            <label className="block text-sm font-medium text-gray-700">
                              Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              {...register("password")}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary ml-[20px] my-[30px] mb-4 mt-4"
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

export default UserEdit;
