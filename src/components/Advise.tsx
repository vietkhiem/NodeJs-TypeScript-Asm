import React from "react";
import { CategoryType } from "../types/category";
import { NavLink } from "react-router-dom";

type Props = {
  categorys: CategoryType[];
};

const Advise = ({ categorys }: Props) => {
  return (
    <>
      <h3 className="side-title">Category</h3>

      {categorys?.map((category, index) => {
        console.log(category);
        return (
          <>
            {" "}
            <div>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <NavLink
                      to={`/productID/${category._id}`}
                      className="no-underline "
                    >
                      {category.name}
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Advise;
