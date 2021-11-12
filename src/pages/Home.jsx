import React from "react";

import { ProductList } from "../containers/ProductList.jsx";
import { useGetProducts } from "../hooks/useGetProducts.js";




const Home = () => {
  const {products, error, loading} = useGetProducts();
   return (
    <>
      
      <ProductList
        products={products}
        error= {error}
        loading= {loading}
       />
    </>
  );
};

const Clothes = () => {
  const {products, error, loading} = useGetProducts();
  const categoriesClothes = products.filter( (product) => product.category.id === 1 );
  return(
    <ProductList 
      products={categoriesClothes}
      error= {error}
      loading= {loading}
    />
  );
}
const Electronics = () => {
  const {products, error, loading} = useGetProducts();
  const categoriesElectronics = products.filter( (product) => product.category.id === 2 );

  return(
    <ProductList 
      products={categoriesElectronics}
      error= {error}
      loading= {loading}
    />
  );
}
const Forniture = () => {
  const {products, error, loading} = useGetProducts();
  const categoriesForniture = products.filter( (product) => product.category.id === 3 );

  return(
    <ProductList 
      products={categoriesForniture}
      error= {error}
      loading= {loading}
    />
  );
}
const Toys = () => {
  const {products, error, loading} = useGetProducts();
  const categoriesToys = products.filter( (product) => product.category.id === 4 );

  return(
    <ProductList 
      products={categoriesToys}
      error= {error}
      loading= {loading}
    />
  );
}
const Others = () => {
  const {products, error, loading} = useGetProducts();
  const categoriOters = products.filter( (product) => product.category.id === 5 );

  return(
    <ProductList 
      products={categoriOters}
      error= {error}
      loading= {loading}
    />
  );
}

export { Home, Clothes, Electronics, Forniture, Toys, Others };