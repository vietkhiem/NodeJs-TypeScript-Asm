import React from "react";
import { CategoryType } from "../types/category";
import { NavLink } from "react-router-dom";

type Props = {
  categorys: CategoryType[];
};

const Advise = ({ categorys }: Props) => {
  return (
    <>
      {/* Category */}
      <div className="single category">
        {categorys?.map((category, index) => {
          console.log(category);
          return (
            <>
              {" "}
              <ul className="list-unstyled">
                <li>
                  <a href="" title="">
                    <NavLink
                      to={`/productID/${category._id}`}
                      className="no-underline "
                    >
                      {category.name}
                    </NavLink>
                  </a>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Advise;
