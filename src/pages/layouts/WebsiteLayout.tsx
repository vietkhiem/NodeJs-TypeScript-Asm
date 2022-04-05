import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "../../components/Bottom";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div className="">
      <Outlet />

      <Bottom />
    </div>
  );
};

export default WebsiteLayout;
