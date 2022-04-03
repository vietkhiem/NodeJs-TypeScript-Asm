import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import BannerBottom from "../../components/BannerBottom";
import Bottom from "../../components/Bottom";
import Header from "../../components/Header";
import Partners from "../../components/Partners";
import ProductList from "../../components/ProductList";
import Review from "../../components/Review";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div className="">
      <Header />

      <Banner />

      <ProductList />

      <BannerBottom />

      <Partners />

      <Review />

      <Bottom />
    </div>
  );
};

export default WebsiteLayout;
