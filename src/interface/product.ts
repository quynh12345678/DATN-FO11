export interface Product {
  id_san_pham: string;
  name: string;
  images: string;
  price: number;
  description: string;
}

export type ProductLite = Pick<
  Product,
  "name" | "images" | "description" | "price"
>;
