import { useState, useEffect } from "react";
import { Product } from "../models/Product";
import { fetchProducts } from "../services/ProductService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, products]);

  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    const favoriteIdsString = await AsyncStorage.getItem("favorites");
    const favoriteIds: number[] = favoriteIdsString
      ? JSON.parse(favoriteIdsString)
      : [];
    const updatedProducts = fetchedProducts.map((p) => ({
      ...p,
      isFavorite: favoriteIds.includes(p.id),
    }));
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const toggleFavorite = async (productId: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, isFavorite: !product.isFavorite };
      }
      return product;
    });
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    const favoriteIds = updatedProducts
    .filter((p) => p.isFavorite)
    .map((p) => p.id);
    await AsyncStorage.setItem("favorites", JSON.stringify(favoriteIds));
  };

  return {
    products: filteredProducts,
    searchQuery,
    setSearchQuery,
    toggleFavorite,
  };
};
