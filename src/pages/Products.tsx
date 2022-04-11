import React from "react";
import ProductList from "../components/ProductList";
import { ProductType } from "../types/Product";

type ProductsProps = {
  products: ProductType[];
};

function Products(props: ProductsProps) {
  return (
    <>
      <ProductList products={props.products} />
    </>
  );
}

export default Products;
