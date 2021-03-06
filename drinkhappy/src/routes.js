import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import InitialScreen from './screens/InitialScreen';
import Drinks from './screens/Drinks';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="InitialScreen"
        component={InitialScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="drinks"
        component={Drinks}
      />
    </Stack.Navigator>
  );
}

export default Routes;
