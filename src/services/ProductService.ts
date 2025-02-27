import { Product } from "../models/Product";

export const baseUrl = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(baseUrl + "/products");
    const data = await response.json();
    const products: Product[] = data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
      isFavorite: false,
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
