// Assuming you have a WelcomeScreen component and a Navigator set up with React Navigation

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  primary: '#EE272E',
  title: 'white',
};

const SIZES = {
  h1: 32,
  h2: 24,
  h4: 18,
  width: 400,
};

const Onboarding = () => {
  const navigation = useNavigation();

  const slides = [
    {
      id: 1,
      title: 'eZTruck',
      description: 'Effortlessly book reliable mini trucks for all your logistics needs with our user-friendly app',
      image: require('../../../assets/onbordingImg1.png')
    },
    {
      id: 2,
      description: [
        'Onboard your vehicle with ',
        <Text key="ezTruck" style={{ fontWeight: 'bold' }}>ezTruck</Text>,
        ' and improve your income by ',
        <Text key="logistic" style={{ fontWeight: 'bold' }}>logistic transportation</Text>
      ],
      image: require('../../../assets/onbordingImg2.png')
    },
    {
      id: 3,
      description: [
        'Effortlessly book reliable',
        <Text key="mini" style={{ fontWeight: 'bold' }}> mini truck </Text>,
        'for all your logistics needs with our',
        <Text key="logistic" style={{ fontWeight: 'bold' }}> user-friendly app</Text>
      ],
      image: require('../../../assets/onbordingImg3.png')
    }
  ];
  const ovalButtonStyle = {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  };

  const buttonLabel = (label) => {
    return (
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '1600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    );
  };

  const handleOnboardingComplete = () => {
    // Navigate to the welcome screen or any other desired screen
    navigation.navigate('Welcome');
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.primary,
    }}>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width:'90%',
                  height: '50%',
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                color: COLORS.title
              }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: '#FFDCDC',
          width: 30,
        }}
        showSkipButton
        renderSkipButton={() => buttonLabel(<Text style={{ color: 'white' }}>Skip</Text>)}
        renderNextButton={() => buttonLabel(<Text style={{ color: 'white' }}>Next</Text>)}
        renderDoneButton={() => buttonLabel(<Text style={{ color: 'white' }}>Done</Text>)}
        onDone={handleOnboardingComplete}
      />
    </View>
  );
};

export default Onboarding;
