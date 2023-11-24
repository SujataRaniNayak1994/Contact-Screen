// ItemComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, ScrollView } from 'react-native';

const ItemComponent = ({ item, onPress, backgroundColor, textColor }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor, borderColor: '#EE272E', borderWidth: 1 }]}
    >
      {/* Add your image here */}
      <Image source={require('../../assets/choose1.png')} style={[styles.image, { objectFit: 'cover' }]} />

      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        <Text style={[styles.details, { color: textColor }]}>{item.imgDetails}</Text>
        <Text style={[styles.details, { color: textColor }]}>{item.capacity}</Text>
      </View>

      <Text style={[styles.price, { color: textColor }]}>$XX.XX</Text>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    width:332,
    height:110,
  },
  image: {
    width: 100,
    height: 70,
    marginRight: 16,
    objectFit: 'cover'
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    marginRight: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ItemComponent;
