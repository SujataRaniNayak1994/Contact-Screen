import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import Registration from './src/authentication/Registration';
import Login from './src/authentication/Login';
import Welcome from './src/authentication/Welcome';
import WhereTo from './src/screens/WhereTo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Splash/> */}
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <Welcome/> */}
      <WhereTo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
