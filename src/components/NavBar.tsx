import React from "react";
import { View, TextInput, StyleSheet, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import configData from "../configs/appConfig.json";

interface NavBarProps {
  query: string;
  onChangeText: (text: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ query, onChangeText }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logo}>
        <Icon name={configData.Homepage.navIconName} size={26} />
        <Text style={styles.logoText}>{configData.Homepage.navText}</Text>
      </View>
      <TextInput
        placeholder={configData.Homepage.searchPlaceHolderText}
        value={query}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: { fontSize: 24, fontWeight: "500", paddingLeft: 10 },
});
