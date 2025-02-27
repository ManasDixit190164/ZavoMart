# React Native Expo Product List App

## Overview

This is a simple React Native application built with Expo that displays a list of products fetched from the Fake Store API. Users can view product details, search for products by name, and mark products as favorites.

## Features

- **Home Screen**: Displays a list of products.
- **Product Details Screen**: Shows detailed product information.
- **Search**: Filter products by name.
- **Favorites**: Mark/unmark products as favorites (persisted with AsyncStorage).
- **API Used**: Added API calls Fake Store API ( http://fakestoreapi.com/products ).
- **App Config**: Added App configuration in json file.

## Project Structure

ZavoMart/
├── App.tsx
├── package.json
└── src
    ├── components
    │   ├── ProductItem.tsx
    │   └── NavBar.tsx
    ├── models
    │   └── Product.ts
    ├── navigation
    │   └── AppNavigator.tsx
    ├── services
    │   └── ProductService.ts
    ├── configs
    │   └── appConfig.json
    ├── viewmodels
    │   └── ProductViewModel.ts
    └── views
        └── screens
            ├── HomeScreen.tsx
            └── ProductDetailsScreen.tsx


