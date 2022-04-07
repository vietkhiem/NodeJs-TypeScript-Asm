import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { ProductType } from "../types/Product";

type ProductsProps = {
  products: ProductType[];
};

function Products(props: ProductsProps) {
  return (
    <>
      <Header />
      <ProductList products={props.products} />
    </>
  );
}

export default Products;
