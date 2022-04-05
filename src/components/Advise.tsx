import React from "react";
import { CategoryType } from "../types/category";

type Props = {
  categorys: CategoryType[];
};

const Advise = ({ categorys }: Props) => {
  return (
    <>
      {categorys?.map((category, index) => {
        console.log(category);
        return (
          <>
            {" "}
            <a href="/category" className="dropdown-item">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action dropp">
                  {category.name}{" "}
                </li>
              </ul>
            </a>
          </>
        );
      })}
    </>
  );
};

export default Advise;
