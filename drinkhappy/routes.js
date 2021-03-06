import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import InitialScreen from './src/screens/InitialScreen';
import Drinks from './src/screens/Drinks';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="InitialScreen"
        component={InitialScreen}
      />
      <Stack.Screen name="drinks" component={Drinks} />
    </Stack.Navigator>
  );
}

export default Routes;
