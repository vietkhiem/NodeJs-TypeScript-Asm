import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../api/auth";
import Bottom from "../components/Bottom";
import Header from "../components/Header";

type FormInputs = {
  name: string;
  email: string;
  password: string | number;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signup(user);
    if (data) {
      toast.success("Bạn đã đăng ký thành công, chờ 3s");
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-form">
        <form
          method="Post"
          action=""
          className="mt-10"
          id="formSignup"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required
                id="username"
                {...register("name")}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-paper-plane" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                v-model="form.email"
                required
                id="email-address"
                {...register("email")}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Password"
                v-model="form.password"
                type="password"
                required
                autoComplete="current-password"
                id="password"
                {...register("password")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Signup;
