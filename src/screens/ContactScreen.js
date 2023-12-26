
// /////////////////////////////////////////////////////////ORIGINAL CODE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Header, Input, Icon, CheckBox } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState(Array(6).fill(false));
  const [isOtherReasonVisible, setOtherReasonVisible] = useState(false);
  const [otherReason, setOtherReason] = useState('');
  const [isMessageVisible, setMessageVisible] = useState(false);

  const animatedHeight = new Animated.Value(300);
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

  const handleReasonSelect = (index) => {
    const updatedReasons = [...selectedReasons];
    updatedReasons[index] = !updatedReasons[index];
    setSelectedReasons(updatedReasons);
  };

  const handleOtherReasons = () => {
    setOtherReasonVisible(!isOtherReasonVisible);
  };

  const handleSend = () => {
    setMessageVisible(true);
    setOtherReasonVisible(false);
  };

  const handleConfirmCancel = () => {
    setModalVisible(false);
    navigation.navigate('ContactScreen2');
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
        <Text style={styles.waitingText}>Waiting for Driver Cancellation...</Text>
        <TouchableOpacity style={styles.circleButton}>
          <Icon name="circle" type="font-awesome" color='#EE272E' size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </TouchableOpacity>
      </Animated.View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Icon name="close" type="ionicon" size={30} color="black" />
          </TouchableOpacity>
          <Text style={[styles.modalText, { color: '#EE272E' }]}>Want to cancel your booking?</Text>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(0)}
          >
            <CheckBox
              checked={selectedReasons[0]}
              onPress={() => handleReasonSelect(0)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[0] ? '#EE272E' : 'black' }]}>
              Waiting for a long time
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(1)}
          >
            <CheckBox
              checked={selectedReasons[1]}
              onPress={() => handleReasonSelect(1)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[1] ? '#EE272E' : 'black' }]}>
              Unable to contact the driver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(2)}
          >
            <CheckBox
              checked={selectedReasons[2]}
              onPress={() => handleReasonSelect(2)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[2] ? '#EE272E' : 'black' }]}>
              Driver denied to go to the destination
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(3)}
          >
            <CheckBox
              checked={selectedReasons[3]}
              onPress={() => handleReasonSelect(3)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[3] ? '#EE272E' : 'black' }]}>
              Wrong address shown
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(4)}
          >
            <CheckBox
              checked={selectedReasons[4]}
              onPress={() => handleReasonSelect(4)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[4] ? '#EE272E' :'black' }]}>
              The price is not reasonable
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reasonContainer}
            onPress={() => handleReasonSelect(5)}
          >
            <CheckBox
              checked={selectedReasons[5]}
              onPress={() => handleReasonSelect(5)}
              containerStyle={styles.checkBoxContainer}
              checkedColor="green"
            />
            <Text style={[styles.reasonText, { color: selectedReasons[5] ? '#EE272E' : 'black' }]}>
              Pay with Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reasonContainer} onPress={handleOtherReasons}>
            <Text style={styles.detailText1}>Other Reasons</Text>
          </TouchableOpacity>

          {isOtherReasonVisible && (
            <View style={styles.otherReasonContainer}>
              <TextInput
                style={styles.otherReasonInput}
                placeholder="Enter other reasons"
                value={otherReason}
                onChangeText={(text) => setOtherReason(text)}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={styles.cancelButton1} onPress={handleConfirmCancel}>
            <Text style={styles.buttonText}>Cancel Booking</Text>
          </TouchableOpacity>

          {isMessageVisible && (
            <View style={styles.messageContainer}>
              <Icon name="mail" type="ionicon" size={20} color="black" />
              <Text style={styles.messageText}>Your cancellation request has been sent.</Text>
            </View>
          )}
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
    marginBottom:320,
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
    height:120,
  },
  circleButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: '#EE272E',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    width:'85%',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cancelButton1: {
    backgroundColor: '#EE272E',
    padding: 13,
    borderRadius: 30,
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -140 }],
    width:'85%',
  },
  cancelButton1Text: {
    color: 'white',
    fontSize: 20,
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
  reasonsContainer: {
    marginTop: 10,
  },
  reasonContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderWidth: 2,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'absolute',
    height:50,
    marginBottom: 10,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: -10,
  },
  reasonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  modalButton: {
    backgroundColor: '#EE272E',
    marginTop: 10,
  },
  otherReasonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,                                                               
    borderBottomColor: '#ddd',
    padding: 10,
  },
  otherReasonInput: {
    flex: 1,
    height: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
     height:40,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#EE272E',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  messageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  messageText: {
    marginLeft: 5,
  },
});

export default HomeScreen;
