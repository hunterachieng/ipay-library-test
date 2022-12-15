import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cashout from './src/components/Cashout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CashLink from './src/components/Link';
import InitialScreen from './src/components/Splashscreen';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createStackNavigator();
export default function App() {
  return (
    <RootSiblingParent>
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Splash Screen"
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cashout" component={Cashout} />
      <Stack.Screen name="CashLink" component={CashLink} />
      <Stack.Screen name="Splash Screen" component={InitialScreen} />

    </Stack.Navigator>
   </NavigationContainer>
   </RootSiblingParent>
  )
}


