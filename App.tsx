import React from 'react';
import { MovieDetail } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />

        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;