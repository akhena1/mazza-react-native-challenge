import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import InitialScreen from './screens/InitialScreen';
import Drinks from './screens/Drinks';
import DrinkDetails from './screens/DrinkDetails';

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="drink-details"
        component={DrinkDetails}
      />
    </Stack.Navigator>
  );
}

export default Routes;
