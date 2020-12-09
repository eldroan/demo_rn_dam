import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/components/home';
import { screenNames } from './src/screenNames';
import CounterButtonReduxScreen from './src/components/counter/counterButtonReduxScreen';
import CounterDisplayReduxScreen from './src/components/counter/counterDisplayReduxScreen';
import DateTimeReduxScreen from './src/components/datetime/dateTimeScreenRedux';
import SimpleNavigator from './src/components/simpleNavigation/simpleNavigator';
import CounterButtonScreen from './src/components/counter/counterButtonScreen';
import CounterDisplayScreen from './src/components/counter/counterDisplayScreen';
import DateTimeScreen from './src/components/datetime/dateTimeScreen';
import { ContextProvider } from './src/context/store';
import CounterButtonContextScreen from './src/components/counter/counterButtonContextScreen';
import CounterDisplayContextScreen from './src/components/counter/counterDisplayContextScreen';
import DateTimeContextScreen from './src/components/datetime/dateTimeContextScreen';

// Un stack navigator es un navegador que reemplaza una pantalla
// por otra completamente
const Stack = createStackNavigator();

// El 'componente' <></> es un componente que no renderiza nada
// se usa cuando necesitamos pasar muchos elementos a algo que
// solo esperaba 1 (en este caso el comentario y Provider)

const App = () => (
  <>
    {/* Provider de REDUX es quien se encarga que por
    detras todos tengan acceso a 'store' ( nota: el nombre
    default es Provider, aquí se renombro a ReduxProvider
    para distinguirlo de ContextProvider )*/}
    <ReduxProvider store={store}>
      {/* Provider que definimos usando Context quien se encarga que por
      detras todos tengan acceso a los keys definidas en 'providerProps' */}
      <ContextProvider>
        {/* De manera similar NavigationContainer se encarga que
      todas las pantallas puedan acceder a la navegacion */}
        <NavigationContainer>
          {/* Dentro de nuestro stack navigator definimos las
        pantallas de nuestra app con su nombre*/}
          <Stack.Navigator>
            <Stack.Screen name={screenNames.HOME} component={Home} options={{ headerShown: false }} />
            <Stack.Screen
              name={screenNames.SIMPLE_NAVIGATOR}
              component={SimpleNavigator}
              options={{ headerShown: false }} //Si borras esta linea vas a ver 2 app bars cuando entres a esta pantalla (una del navegador y otra de la pantalla dentro de el)
            />

            {/* Ejemplos sin redux */}
            <Stack.Screen name={screenNames.COUNTER_BUTTON} component={CounterButtonScreen} />
            <Stack.Screen name={screenNames.COUNTER_DISPLAY} component={CounterDisplayScreen} />
            <Stack.Screen name={screenNames.GET_TIME} component={DateTimeScreen} />

            {/* Ejemplos con context */}
            <Stack.Screen name={screenNames.COUNTER_BUTTON_CONTEXT} component={CounterButtonContextScreen} />
            <Stack.Screen name={screenNames.COUNTER_DISPLAY_CONTEXT} component={CounterDisplayContextScreen} />
            <Stack.Screen name={screenNames.GET_TIME_CONTEXT} component={DateTimeContextScreen} />

            {/* Ejemplos con redux */}
            <Stack.Screen name={screenNames.COUNTER_BUTTON_REDUX} component={CounterButtonReduxScreen} />
            <Stack.Screen name={screenNames.COUNTER_DISPLAY_REDUX} component={CounterDisplayReduxScreen} />
            <Stack.Screen name={screenNames.GET_TIME_REDUX} component={DateTimeReduxScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </ReduxProvider>
  </>
);

export default App;
