import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { ColorPalette as ColorPaletteParam } from './types';
import AddNewPaletteModal from './screens/AddNewPaletteModal';

export type RootStackParamList = {
  Main: undefined;
  ColorPaletteModal: undefined;
};

export type MainStackParamList = {
  Home: { newColorPalette?: ColorPaletteParam };
  ColorPalette: ColorPaletteParam;
};

const RootStack = createStackNavigator<RootStackParamList>();
const MainStack = createStackNavigator<MainStackParamList>();

const MainScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Color Schemes' }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={navigation => ({
          title: navigation.route.params.paletteName,
        })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={AddNewPaletteModal}
          options={{ title: 'Add color palette' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
