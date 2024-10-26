export interface Product {
  id: string;
  name: string;
  images: string;
  price: number;
  description: string;
  price_sale: number;
  category: string;
  views: string;
}

export type ProductLite = Pick<
  Product,
  "name" | "images" | "description" | "price" | "price_sale"
>;
