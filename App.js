import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/components/home';
import { screenNames } from './src/screenNames';
import CounterButtonScreen from './src/components/counter/counterButtonScreen';
import CounterDisplayScreen from './src/components/counter/counterDisplayScreen';
import DateTimeScreen from './src/components/datetime/dateTimeScreen';

// Un stack navigator es un navegador que reemplaza una pantalla
// por otra completamente
const Stack = createStackNavigator();

// El 'componente' <></> es un componente que no renderiza nada
// se usa cuando necesitamos pasar muchos elementos a algo que
// solo esperaba 1 (en este caso el comentario y Provider)

const App = () => (
  <>
    {/* Provider es quien se encarga que por
    detras todos tengan acceso a 'store' */}
    <Provider store={store}>
      {/* De manera simitar NavigationContainer se encarga que
      todas las pantallas puedan acceder a la navegacion */}
      <NavigationContainer>
        {/* Dentro de nuestro stack navigator definimos las
        pantallas de nuestra app con su nombre*/}
        <Stack.Navigator>
          <Stack.Screen name={screenNames.HOME} component={Home} options={{ headerShown: false }} />
          <Stack.Screen name={screenNames.COUNTER_BUTTON} component={CounterButtonScreen} />
          <Stack.Screen name={screenNames.COUNTER_DISPLAY} component={CounterDisplayScreen} />
          <Stack.Screen name={screenNames.GET_TIME} component={DateTimeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>
);

export default App;
