export interface Product {
  id: string;
  name: string;
  img_thumbnail: string;
  price_regular: number;
  description: string;
  price_sale: number;
}

export type ProductLite = Pick<
  Product,
  "name" | "img_thumbnail" | "description" | "price_regular" | "price_sale"
>;
