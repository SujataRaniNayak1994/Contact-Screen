import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
const ItemComponent = ({ item, onPress, backgroundColor, textColor }) => {
  const [modalVisible, setModalVisible] = useState(false);// Sample data for rates and charges
  const baseFare = 10;
  const ratePerKm = 0.5;
  const ratePerMinute = 0.2;
  const waitingCharges = 5;
  const calculateTotalAmount = () => {  // Function to calculate the total amount
    const distanceCharge = item.distance * ratePerKm;
    const timeCharge = item.time * ratePerMinute;
    const totalAmount = baseFare + distanceCharge + timeCharge + waitingCharges;
    return totalAmount.toFixed(2); // Round to 2 decimal places
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          styles.item,
          { backgroundColor, borderColor: "#EE272E", borderWidth: 1 },
        ]}
      >
        <Image
          source={item.image}
          style={[styles.image, { resizeMode: "cover" }]}
        />

        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
          <Text style={[styles.details, { color: textColor }]}>
            {item.imgDetails}
          </Text>
          <Text style={[styles.details, { color: textColor }]}>
            {item.capacity}
          </Text>
        </View>

        <Text style={[styles.price, { color: textColor }]}>$XX.XX</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={item.image} />
            <Text style={styles.modalText}>{item.weitage}</Text>
            <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
              {item.itemDetails}
            </Text>
            <View style={styles.dashedLine}></View>
            <View>
              <Text>Amount</Text>
              
                <Text style={[styles.detailValue, styles.totalAmount]}>
              ${calculateTotalAmount()}
            </Text>
            <Text>Total Estimated fare price including taxes</Text>
          
            </View>
            <View style={styles.farelist}>
          <View style={{ flexDirection: "column", alignItems: "flex-start",justifyContent:'space-around' }}>
            <Text style={styles.detailLabel}>Base Fare:</Text>
            <Text style={styles.detailLabel}>Rate per Km:</Text>
            <Text style={styles.detailLabel}>Rate per Minute:</Text>
            <Text style={styles.detailLabel}>Waiting Charges:</Text>
            {/* <Text style={[styles.detailLabel, styles.totalAmount]}>Total Amount:</Text> */}
          </View>

          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={styles.detailValue}>${baseFare.toFixed(2)}</Text>
            <Text style={styles.detailValue}>${ratePerKm.toFixed(2)}</Text>
            <Text style={styles.detailValue}>${ratePerMinute.toFixed(2)}</Text>
            <Text style={styles.detailValue}>${waitingCharges.toFixed(2)}</Text>
           
          </View>
        </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 30,
                margin:30
              }}
            >
              <Image source={require("../../assets/groupimg.png")}/>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.closeButton}>Got It</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    width: 332,
    height: 110,
  },
  image: {
    width: 100,
    height: 70,
    marginRight: 16,
    resizeMode: "cover",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    width: 330, // set the desired width
    height: 550, // set the desired height
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#EE272E",
    textAlign: "center",
  },
  closeButton: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    // marginTop: 20,
    backgroundColor: "#EE272E",
    width: 130,
    height: 40,
    borderRadius: 40,
    alignSelf: "center",
    padding: 9,
    // marginLeft:10
  },

  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderStyle: "dashed",
    marginVertical: 10,
    width: "100%", // Adjust the width as needed
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 10,
    width: "100%",
  },
  farelist: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight:30,
    marginBottom: 5, // Add spacing between label and value
  },
  detailValue: {
    fontSize: 16,
    marginLeft:30,
    marginBottom: 5, 
  },
  totalAmount: {
    color: "#EE272E",
    fontWeight: "bold",
  },
});
export default ItemComponent;
