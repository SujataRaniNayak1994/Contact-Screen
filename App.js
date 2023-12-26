import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Splash from "./src/screens/Splash";
//import Welcome from "./src/authentication/Welcome";
// import MapScreen from "./src/screens/MapScreen";
// import HomeScreen from "./src/screens/HomeScreen";
//import Registration from "./src/authentication/Registration";
//import Login from "./src/authentication/Login";
// import ChooseVehicle from "./src/screens/ChooseVehicle";
//import OtpScreen from "./src/authentication/OtpScreen";
//import HomeScreen2 from "./src/screens/HomeScreen2";
//import Onboarding from "./src/screens/onboardingScreens/Onboarding";
//import Onboard from "./src/screens/onboardingScreens/Onboard";
// import TripHistory from "./src/screens/TripHistory";
// import RequestScreen from "./src/screens/requestscreen/RequestScreen";
import ContactScreen from "./src/screens/ContactScreen";
import ContactScreen2 from "./src/screens/ContactScreen2";
import ContactScreen3 from "./src/screens/ContactScreen3";
import ContactScreen4 from "./src/screens/ContactScreen4";
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Map" component={MapScreen} options={{ title: "Back" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Back" }} /> */}
        {/* <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Back" }}
        />
        {/* <Stack.Screen */}
          {/* name="ChooseVehicle"
          component={ChooseVehicle}
          // options={{ title: "Back" }}
          options={{ headerShown: false }}
        /> */} 
        {/* <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ title: "Back" }}
      />*/}
          {/* <Stack.Screen
          name="TripHistory"
          component={TripHistory}
          options={{ title: "Back" }}
        />  */}
      {/* <Stack.Screen
          name="HomeScreen2"
          component={HomeScreen2}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
         {/* <Stack.Screen
          name="RequestScreen"
          component={RequestScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactScreen2"
          component={ContactScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactScreen3"
          component={ContactScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactScreen4"
          component={ContactScreen4}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

