import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Product } from "../models/Product";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../views/screens/HomeScreen";
import { ProductDetailsScreen } from "../views/screens/ProductDetailsScreen";
import configData from "../configs/appConfig.json";

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: configData.ProductDetailsScreen.title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
