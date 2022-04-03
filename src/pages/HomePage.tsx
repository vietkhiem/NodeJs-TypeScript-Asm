import React from "react";
import Advise from "../components/Advise";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Blog from "../components/Blog";
import Partners from "../components/Partners";
import ProductList from "../components/ProductList";
import Review from "../components/Review";
import { CategoryType } from "../types/category";
import { PostType } from "../types/Post";

import { ProductType } from "../types/Product";

type HomePageProps = {
  products: ProductType[];
  posts: PostType[];
  categorys: CategoryType[];
};

const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Banner />

      <ProductList products={props.products} />

      <BannerBottom />

      <Partners />

      <Review />
    </div>
  );
};

export default HomePage;
