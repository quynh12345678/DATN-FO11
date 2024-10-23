import axiosIinstance from "../config/axiot";
import { ProductLite } from "../interface/product";

export const getAllProduct = async () => {
  try {
    const { data } = await axiosIinstance.get("/api/products");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getIdProduct = async (id: number) => {
  try {
    const { data } = await axiosIinstance.get("/api/products/" + id);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const postProduct = async (product: ProductLite) => {
  try {
    const { data } = await axiosIinstance.post("/api/products", product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putProduct = async (id: string, product: ProductLite) => {
  try {
    const { data } = await axiosIinstance.put("/api/products/" + id, product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axiosIinstance.delete("/api/products/" + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
