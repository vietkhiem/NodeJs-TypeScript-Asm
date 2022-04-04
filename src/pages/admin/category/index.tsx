import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CategoryType } from "../../../types/category";

type ProductManagerProps = {
  categorys: CategoryType[];
  onRemove: (id: number | string) => void;
};

const CategoryAdmin = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  className="rounded-circle"
                  alt=""
                  style={{ width: 45, height: 45 }}
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Kate Hunington</p>
                  <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Designer</p>
              <p className="text-muted mb-0">UI/UX</p>
            </td>
            <td>
              <span className="badge badge-warning rounded-pill d-inline">
                Awaiting
              </span>
            </td>
            <td>Senior</td>
            <td>
              <button
                type="button"
                className="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoryAdmin;
