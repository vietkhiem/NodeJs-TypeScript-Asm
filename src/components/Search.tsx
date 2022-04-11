import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchProductByName } from "../api/products";

type Props = {
  onSearch: (keyword: string) => void;
};
type FormInputs = {
  q: string;
};
const Search = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    props.onSearch(data.q);
    navigate(`/search?q=${data.q}`);
  };
  return (
    <form className="search_form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="form-control"
        placeholder="Search here..."
        {...register("q")}
        name="q"
      />
      <button className="" type="submit">
        <i className="fa fa-search" aria-hidden="true" />
      </button>
    </form>
  );
};

export default Search;
