// ItemComponent.js
import React, { useState } from 'react';
import { Modal, Text, Pressable, Alert, Image, View, ScrollView, StyleSheet } from 'react-native';

const ItemComponent = ({ item, textColor }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        { backgroundColor: pressed ? 'rgba(0, 0, 0, 0.1)' : 'white' }, // Change background color on press
      ]}
      onPress={() => setModalVisible(true)}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Your existing ScrollView content here */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Your existing ScrollView content here */}
      </ScrollView>
    </Pressable>
  );
};

// Your existing styles here

export default ItemComponent;
