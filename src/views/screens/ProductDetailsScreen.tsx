import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import { useProducts } from "../../viewmodels/ProductViewModel";
import configData from "../../configs/appConfig.json";

type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetails"
>;

interface Props {
  route: ProductDetailsScreenRouteProp;
}

export const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { product: initialProduct } = route.params;
  const navigation = useNavigation();
  const { toggleFavorite, products } = useProducts();
  const product =
    products.find((p) => p.id === initialProduct.id) || initialProduct;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => toggleFavorite(product.id)}
        style={styles.fav}
      >
        {product.isFavorite ? (
          <Icon
            name={configData.ProductDetailsScreen.iconActiveName}
            size={18}
            color="red"
          />
        ) : (
          <Icon
            name={configData.ProductDetailsScreen.iconInactiveName}
            size={18}
            color="#000"
          />
        )}
      </TouchableOpacity>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.divider} />
      <Text numberOfLines={1} style={styles.name}>
        {product.name}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.footerContainer}>
        <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btn}
        >
          <Text>{configData.ProductDetailsScreen.ctaText}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "#000",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  fav: {
    padding: 5,
    position: "absolute",
    top: 15,
    right: 25,
  },
  divider: {
    borderWidth: 0.4,
    borderColor: "grey",
    width: "100%",
    marginBottom: 4,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    width: "100%",
    marginTop: 30,
    padding: 5,
    borderRadius: 10,
    borderColor: "#c7c7c7",
    paddingHorizontal: 10,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 14,
    borderColor: "#000",
    backgroundColor: "#c7c7c7",
  },
});
