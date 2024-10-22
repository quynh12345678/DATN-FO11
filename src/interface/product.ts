export interface Product {
  id: string;
  name: string;
  images: string;
  price: number;
  description: string;
}

export type ProductLite = Pick<
  Product,
  "name" | "images" | "description" | "price"
>;
