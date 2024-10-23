import { useEffect, useState } from "react";
import LoadListProduct from "./loadAllProduct";
import "/src/assets/css/style.css";
import { Product } from "../interface/product";
import { getAllProduct } from "../sevies/product";

const Products = () => {
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
      <LoadListProduct product={listProduct} setProduct={setlistProduct} />
    </>
  );
};

export default Products;
