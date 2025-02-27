import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Product } from "../models/Product";

interface ProductItemProps {
  product: Product;
  onPress: () => void;
  onToggleFavorite: (id: number) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onPress,
  onToggleFavorite,
}) => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
      >
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => onToggleFavorite(product.id)}
          style={styles.favoriteButton}
        >
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  favoriteButton: {
    padding: 5,
    borderRadius: 5,
  },
  favoriteText: {
    fontSize: 12,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    marginVertical: 4,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
