import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import Welcome from "./src/authentication/Welcome";
import MapScreen from "./src/screens/MapScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Registration from "./src/authentication/Registration";
import Login from "./src/authentication/Login";
import ChooseVehicle from "./src/screens/ChooseVehicle";
import OtpScreen from "./src/authentication/OtpScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: "Back" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Back" }} />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="ChooseVehicle"
          component={ChooseVehicle}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ title: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
