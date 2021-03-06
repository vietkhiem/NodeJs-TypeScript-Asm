import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signin, signup } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Bottom from "../components/Bottom";

type FormInputs = {
  email: string;
  password: string | number;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSumbit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signin(user);
    if (data) {
      toast.success("Bạn đã đăng nhập thành công, bạn sẽ chuyển về trang chủ");
      setTimeout(() => {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(data));
      }, 3000);
    }
  };

  return (
    <div>
      <Header />
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form
                method="Post"
                action=""
                className="mt-10"
                id="formSignup"
                onSubmit={handleSubmit(onSumbit)}
              >
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3 fs-1">Sign In </p>
                </div>
                <div className="divider d-flex align-items-center my-4"></div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    className="form-control form-control-lg"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Email"
                    id="email-address"
                    {...register("email")}
                  />
                  <label className="form-label" htmlFor="username">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                    id="password"
                    {...register("password")}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="">
                      Register
                    </a>
                  </p>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </div>
  );
};

export default Signin;
