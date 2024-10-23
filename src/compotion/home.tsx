import Banner from "./baner";
import Menu from "./menu";
// import BanerBody from './banerBody'
// import TopFooter from './topFooter'
import "../assets/css/style.css";
import TopFooter from "./topFooter";
import OneListProduct from "./oneListProduct";
import BanerBody from "./banerBody";
import TwoListProduct from "./twoListProduct";
import { useEffect, useState } from "react";
import { Product } from "../interface/product";
import { getAllProduct } from "../sevies/product";

const Home = () => {
  const [listProduct, setlistProduct] = useState<Product[]>([]);
  const getProduct = async () => {
    try {
      const product: Product[] = await getAllProduct();
      setlistProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getProduct();
    })();
  }, []);
  return (
    <>
      <Banner />
      <Menu />
      <OneListProduct product={listProduct} setProduct={setlistProduct} />
      <BanerBody />
      <TwoListProduct product={listProduct} setProduct={setlistProduct} />
      <TopFooter />
    </>
  );
};

export default Home;
