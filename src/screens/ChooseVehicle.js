import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import ItemComponent from "./ItemComponent";

const ChooseVehicle = () => {
  const snapPoints = useMemo(() => ["50%", "70%", "80%"], []);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Dala Auto",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Tata Ace",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Pickup",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#EE272E" : "transparent";
    const color = item.id === selectedId ? "white" : "#EE272E";

    return (
      <ItemComponent
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.text1}>Choose Vehicle</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.BookNow}
              // onPress={handleChooseVehicle}
              // onPress={() => navigation.navigate('ChooseVehicle')}
            >
              <Text style={styles.BookNowText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ChooseVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  text1: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  BookNow: {
    backgroundColor: "#EE272E",
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    margin: 8,
    width:340
  },
  BookNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
