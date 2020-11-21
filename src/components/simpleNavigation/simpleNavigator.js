import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './firstScreen';
import SecondScreen from './secondScreen';

// Un stack navigator es un navegador que reemplaza una pantalla
// por otra completamente
const Stack = createStackNavigator();

export const SimpleNavigatorScreens = {
  FIRST: 'Primera',
  SECOND: 'Segunda',
};

const SimpleNavigator = () => {
  return (
    // <NavigationContainer> // Esta comentado porque ya estamos dentro de un NavigationContainer (en app.js) pero siempre debe existir uno que contenga nuestras pantallas
    <Stack.Navigator>
      <Stack.Screen name={SimpleNavigatorScreens.FIRST} component={FirstScreen} />
      <Stack.Screen name={SimpleNavigatorScreens.SECOND} component={SecondScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default SimpleNavigator;
