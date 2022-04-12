import React from "react";
import { CategoryType } from "../types/category";
import { NavLink } from "react-router-dom";

type Props = {
  categorys: CategoryType[];
};

const Advise = ({ categorys }: Props) => {
  return (
    <>
      <h3 className="side-title text-black">Category</h3>
      {categorys?.map((category, index) => {
        console.log(category);
        return (
          <>
            {" "}
            <div className="row">
              <div className="col-sm-4">
                {/* Category */}
                <div className="single category">
                  <h3 className="side-title">Category</h3>
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
                    <li>
                      <a href="" title="">
                        Technology <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        Web <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        Ecommerce <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        Wordpress <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        Android <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        IOS <span className="pull-right">13</span>
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        Windows <span className="pull-right">13</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Advise;
