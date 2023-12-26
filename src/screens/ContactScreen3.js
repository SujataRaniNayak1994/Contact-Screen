
import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { Header, Input, Icon, CheckBox } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowHeight = Dimensions.get('window').height;

const ContactScreen3 = () => {
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

    navigation.navigate('ContactScreen4');
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

        <TouchableOpacity
          style={[
            styles.button1,
            styles.detailRow,
            selectedPayment === 'Tata ACE' && styles.selectedPayment
          ]}
          onPress={() => handlePaymentSelection('Tata ACE')}
        >
          <Text style={styles.buttonTitle1}>Tata ACE</Text>
        </TouchableOpacity>

        <Text style={styles.waitingText}>Select Payment Method</Text>

        {[
          { label: 'Pay with wallet', icon: 'wallet' },
          { label: 'Pay Online', icon: 'creditcard' },
          { label: 'Pay with Cash', icon: 'coin' },
        ].map((paymentOption) => (
          <TouchableOpacity
            key={paymentOption.label}
            style={styles.buttonContainer}
            onPress={() => handlePaymentSelection(paymentOption.label)}
          >
            <View style={styles.iconWithTitleContainer}>
              <AntDesign name={paymentOption.icon} size={25} color="#EE272E" style={styles.callIcon} />
              <Text style={styles.buttonTitle1}>{paymentOption.label}</Text>
              <CheckBox
                checked={selectedPayment === paymentOption.label}
                onPress={() => handlePaymentSelection(paymentOption.label)}
                checkedColor="green"
                containerStyle={styles.checkboxContainer}
              />
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
          <Text style={styles.cancelButtonText}>Pay</Text>
        </TouchableOpacity>

      </Animated.View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Icon name="close" type="ionicon" size={30} color="black" />
          </TouchableOpacity>

          {/* Additional content for the modal */}
          <Text style={[styles.modalText, { color: 'black' }]}>Payment Successful</Text>
          <View style={styles.reasonsContainer}>
            {/* ... (previous code) */}
            <Text style={styles.modalText2}>Your money has been successfully sent to Prince P</Text>
            <Text style={styles.modalText2}>Amount</Text>
            <Text style={styles.modalText}>$878</Text>
            <Text style={styles.modalText}>How is your trip?</Text>
            <Text style={styles.modalText2}>Your feedback will help us to improve your driving experience better</Text>
          </View>

          <TouchableOpacity style={styles.cancelButton} onPress={handleConfirmCancel}>
            <Text style={styles.buttonText}>Please Feedback</Text>
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
    padding: 16,
    borderRadius: 20,
    height: 380,
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
  detailContainer3: {
    backgroundColor: 'mistypink',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
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
});

export default ContactScreen3;
