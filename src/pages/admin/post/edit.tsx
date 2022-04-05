import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { readPost } from "../../../api/post";
import { PostType } from "../../../types/Post";

type ProducAddProps = {
  onUpdate: (posts: PostType) => void;
};
type FromInput = {
  title: string;
  content: string;
  img: string;
};

const PostEdit = (props: ProducAddProps) => {
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
      const { data } = await readPost(id);
      reset(data);
    };
    getProduct();
  }, [id]);

  const onSumbit: SubmitHandler<FromInput> = (data) => {
    props.onUpdate(data);
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
                  <h2 className="text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate mt-[30px] ">
                    Sửa Bài Viế
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/products" className="no-underline">
                      <button type="button" className=" btn btn-primary">
                        Quay Lại
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
                        >
                          <div className="col-span-6 sm:col-span-4 py-[30px]">
                            <label className="block text-sm font-medium text-gray-700">
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
                            <label className="block text-sm font-medium text-gray-700">
                              img
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              {...register("img")}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-4 py-[30px]">
                            <label className="block text-sm font-medium text-gray-700">
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
                            className="btn btn-primary ml-[20px] my-[30px]"
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

export default PostEdit;
