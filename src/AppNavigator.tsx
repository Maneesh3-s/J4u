import React from 'react';
import * as Route from './Routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import landingPagescreen from './screens/phase1'; // Assuming the path to your landingPage file

// Create a stack navigator
const Stack = createNativeStackNavigator<Route.RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Route.landingPage}
          component={landingPagescreen.Mobile.landingPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
