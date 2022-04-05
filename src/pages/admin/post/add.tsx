import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { PostType } from "../../../types/Post";

type ProducAddProps = {
  onAdd: (posts: PostType) => void;
};
type FromInput = {
  title: string;
  content: string;
  img: string;
};

const PostAdd = (props: ProducAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FromInput> = (data) => {
    props.onAdd(data);
    navigate("/admin/post");
  };
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-black mt-5 sm:text-3xl sm:truncate mt-[30px] ">
                    Thêm Bài Viết
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products" className="no-underline">
                      <button type="button" className=" btn btn-primary mb-3">
                        Quay lai
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
              <form
                className="w-[800px] ml-[20px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-span-6 sm:col-span-4 py-[30px]">
                  <label className="block text-sm font-medium text-black">
                    Titlte
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("title")}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 py-[30px]">
                  <label className="block text-sm font-medium text-black">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("img")}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 py-[30px]">
                  <label className="block text-sm font-medium text-black">
                    Conten
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("content")}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary ml-[20px] my-[30px] mt-3 mb-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PostAdd;
