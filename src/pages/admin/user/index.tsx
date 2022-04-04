import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserType } from "../../../types/user";

type ProductManagerProps = {
  users: UserType[];
  onRemove: (id: number | string) => void;
};

const UserAdmin = (props: ProductManagerProps) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0 ">
                  <h2 className="text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate mt-[30px] mt-5 ">
                    Tài Khoản
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span className="sm:ml-3">
                    <NavLink to="/admin/user/add" className="no-underline">
                      <button type="button" className="btn btn-primary mb-2">
                        List User
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
              <div className="flex flex-col my-[20px]">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <div className="container mt-5">
                        <table className="table table-borderless table-responsive card-1 p-4">
                          <thead>
                            <tr className="border-bottom">
                              <th>
                                {" "}
                                <span className="ml-2 text-[20px]">
                                  STT
                                </span>{" "}
                              </th>

                              <th>
                                {" "}
                                <span className="ml-2">Name</span>{" "}
                              </th>
                              <th>
                                {" "}
                                <span className="ml-2">Email</span>{" "}
                              </th>
                              <th>
                                {" "}
                                <span className="ml-2">Password</span>{" "}
                              </th>

                              <th colSpan={2} className="">
                                {" "}
                                <span className="pl-[50px]">Action</span>{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {props.users?.map((user, index) => {
                              console.log(user);
                              return (
                                <tr
                                  key={index}
                                  className="border-bottom text-[20px]"
                                >
                                  <td className="">{index + 1}</td>

                                  <td> {user.name} </td>
                                  <td> {user.email} </td>
                                  <td> {user.password} </td>

                                  <td colSpan={2}>
                                    {" "}
                                    <Link
                                      to={`/admin/user/${user._id}/edit`}
                                      className="btn btn-primary mb-2"
                                    >
                                      Update
                                    </Link>
                                    <button
                                      onClick={() => props.onRemove(user._id)}
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

export default UserAdmin;
