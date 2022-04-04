import React from "react";
import { Outlet } from "react-router-dom";
import Headeradmin from "../../components/AdminPase/Headeradmin";
import NavAdmin from "../../components/AdminPase/NavAdmin";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <NavAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
