import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: {
    paletteName: string;
    colors: { colorName: string; hexCode: string }[];
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={navigation => ({
            title: navigation.route.params.paletteName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
