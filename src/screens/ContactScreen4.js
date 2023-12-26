

// import React, { useState } from 'react';
// import {
//     Text,
//     View,
//     TouchableOpacity,
//     StyleSheet,
//     CheckBox,
//     TextInput,
//     Animated,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import FeatherIcon from 'react-native-vector-icons/Feather';



import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Header, Input, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const windowHeight = Dimensions.get('window').height;

const ContactScreen4 = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const animatedHeight = new Animated.Value(330);

  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        animatedHeight.setValue(gestureState.dy);
      },
      onPanResponderRelease: () => {
        // Your logic when the pan responder is released
      },
    });
  }, [animatedHeight]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePaymentSelection = (paymentType) => {
    if (selectedPayment === paymentType) {
      setSelectedPayment(null); // Unselect if already selected
    } else {
      setSelectedPayment(paymentType);
    }
  };

  const handleConfirmCancel = () => {
    // Your logic for handling confirmation and cancellation
    navigation.navigate('TripHistory');
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#EE272E' }}
        rightComponent={<Icon name="user" type="font-awesome" color='#EE272E' />}
        containerStyle={styles.headerContainer}
      />

      <View style={styles.content}>
        <Animated.View style={[styles.inputContainer]}>
          <Input
            rightIcon={{ name: 'my-location', type: 'MaterialIcons', color: '#EE272E' }}
            placeholder="Starting Point"
            leftIcon={{ name: 'circle', type: 'font-awesome', color: 'green' }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <Input
            rightIcon={{ name: 'location-pin', type: 'SimpleLineIcons', color: 'green' }}
            placeholder="Ending Point"
            leftIcon={{ name: 'circle', type: 'font-awesome', color: '#EE272E' }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </Animated.View>
      </View>

      <View style={styles.content1}>
        <Icon name="my-location" type="MaterialIcons" size={40} color="black" />
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.rowContainer, { height: animatedHeight }]}
      >
        <View style={styles.profilePictureContainer}>
          {/* Add your profile picture here */}
        </View>
        <View style={styles.detailColumn}>
          <Text style={styles.detailTitle}>John Doe</Text>
          <Text style={styles.detailText}> Star Rating</Text>
          <FontAwesome name="star-half-o" size={18} color="red" />
          {/* Add star rating here */}

          
        </View>

        {/* Container 1: How is your trip with eztruck? */}
        <View style={styles.detailColumn}>
          <Text style={styles.detailTitle}>How is your trip with ezTruck?</Text>
        </View>

        {/* Container 2: Star Icons */}
        <View style={[styles.starContainer,styles.detailRow]}>
          <FontAwesome name="star" size={25} color="#EE272E" />
          <FontAwesome name="star" size={25} color="#EE272E" />
          <FontAwesome name="star" size={25} color="#EE272E" />
          <FontAwesome name="star" size={25} color="#EE272E" />
        </View>

        {/* Container 3: Feedback Input */}
        <View style={styles.feedbackInputContainer}>
          <TextInput
            placeholder="Write your feedback"
            placeholderTextColor="#999"
            style={styles.feedbackInput}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
          <Text style={styles.cancelButtonText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Icon name="close" type="ionicon" size={30} color="black" />
          </TouchableOpacity>

          <Text style={[styles.modalText, { color: 'black' }]}>Thank you</Text>
          <Text style={[styles.modalText2, { color: 'grey' }]}>Thank you for your valuable feedback and tip</Text>

          <TouchableOpacity style={styles.cancelButton} onPress={handleConfirmCancel}>
            <Text style={styles.buttonText}>Back Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#f0f0f0',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content1: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 340,
  },
  rowContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    width: '80%',
    borderRadius: 10,
    position: 'relative',
    height: 120,
  },
  waitingText: {
    fontSize: 18,
    color: '#EE272E',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#EE272E',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -150 }],
    width: '85%',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 56,
    borderRadius: 20,
    height: 280,
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 2,
    padding: 10,
    zIndex: 1,
  },
  button1: {
    backgroundColor: 'mistyrose',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'space-between',
    width: 320,
    borderRadius: 5,
    height: 41,
    borderColor: '#EE272E',
    fontColor: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: 'mistyrose',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'space-between',
    width: 320,
    borderRadius: 5,
    height: 41,
    borderColor: '#EE272E',
    fontColor: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  selectedPayment: {
    // No background color change for the selected payment
  },
  buttonTitle1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconWithTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  callIcon: {
    marginRight: 10,
  },
  
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  modalText2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePictureContainer: {
    // Your styles for the profile picture container
  },
  detailColumn: {
    // Your styles for the detail column
    marginTop: 10, // Increase the margin top
    alignItems: 'center', // Align items to center
  },
  detailTitle: {
    fontSize: 20, // Increase the font size
    color: 'black', // Change text color to red
  },
  starContainer: {
    // Your styles for the star container

    flexDirection: 'row', // Arrange stars in a row
    marginTop: 5, // Adjust margin top as needed
    alignItems: 'center',
    marginLeft:110,
  },
  starIcon: {
    marginHorizontal: 20, // Add margin between stars
    alignItems: 'center',
  },
  feedbackInputContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    width: '98%',
    borderRadius: 10,
    position: 'relative',
    height: 80, // Adjust the height as needed
    borderColor:'black',
    borderWidth: 1,
    marginVertical: 5,
  },
  feedbackInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default ContactScreen4;
