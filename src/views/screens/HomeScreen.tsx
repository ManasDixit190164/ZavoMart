import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useProducts } from "../../viewmodels/ProductViewModel";
import { ProductItem } from "../../components/ProductItem";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { NavBar } from "../../components/NavBar";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
  const { products, searchQuery, setSearchQuery, toggleFavorite } =
    useProducts();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderItem = ({ item }: { item: any }) => (
    <ProductItem
      product={item}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      onToggleFavorite={toggleFavorite}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar query={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
