import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';


const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
    
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;