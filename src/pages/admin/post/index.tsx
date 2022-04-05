import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PostType } from "../../../types/Post";

type ProductManagerProps = {
  posts: PostType[];
  onRemove: (id: number | string) => void;
};

const PostAdmin = (props: ProductManagerProps) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="mt-5 text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate mt-[30px] ">
                    Bài viết
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/post/add" className="no-underline">
                      <button type="button" className=" btn btn-primary mb-3">
                        Thêm Mới
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
                      <span className="ml-2 text-[20px]">STT</span>{" "}
                    </th>

                    <th>
                      {" "}
                      <span className="ml-2">Name</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">img</span>{" "}
                    </th>
                    <th>
                      {" "}
                      <span className="ml-2">Conten</span>{" "}
                    </th>

                    <th colSpan={2} className="">
                      {" "}
                      <span className="pl-[50px]">Action</span>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.posts?.map((post, index) => {
                    console.log(post);
                    return (
                      <tr key={index} className="border-bottom text-[20px]">
                        <td className="">{index + 1}</td>

                        <td> {post.title} </td>
                        <td>
                          <img src={post.img} alt="" width="150px" />{" "}
                        </td>
                        <td> {post.content} </td>

                        <td colSpan={2}>
                          {" "}
                          <Link
                            to={`/admin/post/${post._id}/edit`}
                            className="btn btn-primary mr-3"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => props.onRemove(post._id)}
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

export default PostAdmin;
