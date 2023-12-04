import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import SearchBar from "../search/SearchBar";

export default function HomeScreen2() {
  return (
    <View style={styles.container}>
      <MapView
      //...map styles
      />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
});
