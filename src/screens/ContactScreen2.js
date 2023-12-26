


import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import { Header, Input, Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const animatedHeight = new Animated.Value(340);
  const animatedInputHeight = animatedHeight.interpolate({
    inputRange: [0, windowHeight],
    outputRange: [0, windowHeight * 0.4],
    extrapolate: 'clamp',
  });

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

  const handleCancelBooking = () => {
    // Additional logic for canceling booking if needed
    // Navigate to ContactScreen3
    navigation.navigate('ContactScreen3');
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
          {/* Your existing Input components */}

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
        {/* Your existing Icon component */}
        <Icon name="my-location" type="MaterialIcons" size={40} color="black" />
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.rowContainer, { height: animatedHeight }]}
      >

        <View style={[styles.confirmContainer, styles.detailRow, { justifyContent: 'space-between' }]}>
          <Text style={styles.waitingText}>Your booking is confirmed.</Text>
          <TouchableOpacity style={styles.otpButton} onPress={toggleModal}>
            <Text style={styles.otpButtonText}>OTP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelBooking}>
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </TouchableOpacity>

        {/* New content added to the Animated.View */}
        <View style={styles.driverInfoContainer}>
          {/* Add your driver information content here */}
          {/* For example, uncomment the following lines if you want to include a driver's profile picture */}
          {/* <Image source={driverInfo.profilePic} style={styles.profilePictureContainer} /> */}
          <Image source={require("../../assets/driverimage.png")} />
          <View>
            <Text>Driver Name</Text>
            <Text>Vehicle Name</Text>
            <Text>Vehicle No</Text>
            <Text>Distance</Text>
            <Text>Star Ratings: 5</Text>
          </View>
        </View>

        {/* Container 2: Call and Message Buttons */}
        <View style={[styles.detailContainer2, styles.detailRow, { justifyContent: 'space-between' }]}>
          <TouchableOpacity style={[styles.button, styles.detailRow]}>
            <FontAwesome name="phone" size={20} color="white" style={styles.callIcon} />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.detailRow]}>
            <AntDesign name="message1" size={20} color="white" style={styles.callIcon} />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailContainer2}>
          <View style={styles.detailRow}>
            {/* Add your vehicle picture here */}
            <Image source={require("../../assets/tempo-.png")} />
            <View style={{ marginRight: 10 }}>
              {/* Add your vehicle picture here */}
            </View>

            <View style={styles.detailColumn}>
              <Text style={styles.detailText}>Distance:</Text>
              <Text style={styles.detailText}> 5 km</Text>
            </View>

            <View style={styles.detailColumn}>
              <Text style={styles.detailText}> Time:</Text>
              <Text style={styles.detailText}> 15</Text>
            </View>

            <View style={styles.detailColumn}>
              <Text style={styles.detailText}> Price:</Text>
              <Text style={styles.detailText}> $10</Text>
            </View>
          </View>
        </View>
      </Animated.View>
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
    marginBottom: 350,
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
    padding: 16,
    borderRadius: 20,
    height: 630,
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 2,
    padding: 10,
    zIndex: 1,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
 
  buttonText: {
    color: 'white',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  messageText: {
    marginLeft: 5,
  },
  // New styles for driver information and call/message buttons
  driverInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailContainer2: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#EE272E',
    padding: 10,
    borderRadius: 25,
    marginTop: 5,
    justifyContent: 'space-between',
    width:100,
  },
  callIcon: {
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
  },
  detailColumn: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  detailText: {
    fontSize: 16,
  },
  otpButton: {
    backgroundColor: '#EE272E', // You can change the color to your preference
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:60,
    right: -15,
    top:-15,
    borderTopRightRadius:40,
    borderBottomLeftRadius:27,
    width:80,
  },

  otpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
