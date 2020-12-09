import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  useWindowDimensions,
  View,
  Linking,
  SafeAreaView,
} from 'react-native';
import { screenNames } from '../screenNames';
const PADDING = 16;
const URL_LOGO_FACULTAD =
  'https://camo.githubusercontent.com/f4a9c90c538f10fa55e98fa902bdbbeaba1d4ed65376b2bcdc5b2949926bdf0f/68747470733a2f2f7777772e667273662e75746e2e6564752e61722f74656d706c617465732f75746e31372f696d672f75746e73616e746166652d636f6c6f722e706e67';

const Home = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width - 2 * PADDING;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Image source={{ uri: URL_LOGO_FACULTAD }} style={[{ width }, styles.image]} />
        <Text style={styles.title}>Esta es una app demo, desde acá podes ir a los distintos ejemplos.</Text>
        <Button
          title="Navegación de pantallas"
          onPress={() => {
            navigation.navigate(screenNames.SIMPLE_NAVIGATOR);
          }}
        />
        <Button
          title="Contador con estado propio"
          onPress={() => {
            navigation.navigate(screenNames.COUNTER_BUTTON);
          }}
        />
        <Button
          title="Llamada a API externa"
          onPress={() => {
            navigation.navigate(screenNames.GET_TIME);
          }}
        />
        <Button
          title="Contador con estado guardado en Context"
          onPress={() => {
            navigation.navigate(screenNames.COUNTER_BUTTON_CONTEXT);
          }}
        />
        <Button
          title="Llamada a API externa usando Context"
          onPress={() => {
            navigation.navigate(screenNames.GET_TIME_CONTEXT);
          }}
        />
        <View style={styles.separator} />
        <Text style={styles.title}>🔥 Extras 🔥</Text>
        <Text style={styles.centeredText}>
          A partir de aqui comienzan algunos ejemplos de contenidos que no son parte de la materia pero son interesantes
          para construir aplicaciones
        </Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Awesome React-Native</Text>
        <Text style={styles.centeredText}>
          Awesome React-Native es un repositorio que contiene una lista curada de contenido, ya sean tutoriales,
          librerias, herramientas o artículos. La sección 'Components' suele ser de las más útiles para ahorrarnos
          reinventar la rueda.
        </Text>
        <Button
          title="Ir al repo"
          onPress={() => {
            Linking.openURL('https://github.com/jondot/awesome-react-native');
          }}
        />
        <View style={styles.separator} />
        <Text style={styles.title}>Redux</Text>
        <Text style={styles.centeredText}>
          {' '}
          Redux es un contenedor predecible del estado de aplicaciones JavaScript.
        </Text>
        <Text style={styles.centeredText}>
          Todo el estado de tu aplicación esta almacenado en un único árbol dentro de un único store. La única forma de
          cambiar el árbol de estado es emitiendo una acción (un objeto describiendo que ocurrió).
        </Text>
        <Text style={styles.centeredText}>
          Para especificar como las acciones transforman el árbol de estado se usas reducers (es como un gran switch que
          dice si recibi X accion modifica Y valores del estado).
        </Text>
        <Text style={styles.centeredText}>
          Para estos ejemplos se utilizó una librería para simplificar el codigo de redux llamada Redux-Toolkit, no es
          la implementación estandar de Redux la cual es bastante repetitiva y tediosa para configurar
        </Text>
        <Text style={styles.centeredText}>
          Un detalle sobre esta implementación es que es muy similar a lo que se puede lograr utilizando Context.
          Siempre es un tema bastante debatido cual es nuestra estrategia para el manejo de estado de nuestra app (si es
          context, redux, mobx, etc..), la bala de plata no existe y depende siempre desde nuestra aplicación. La
          ventaja de context es que utiliza apis nativas de react, haciendo que nuestra app pese un poco menos, ademas,
          es mas sencillo de setear que Redux el cual tiene mucho codigo repetitivo o 'boilerplate' (redux-toolkit trata
          de ayudar en este aspecto). La desventa de context empieza a notarse en aplicaciones con un estado complejo
          (lease, mucho objeto nesteado) que se actualiza con alta frecuencia ya que un cambio en cualquier parte del
          state causara un re-renderizado y en estos casos, una optimización manual para solucionarlo, suele ser mas
          complejo que directamente utilizar redux
        </Text>
        <Button
          title="Leer mas sobre Redux"
          onPress={() => {
            Linking.openURL('https://es.redux.js.org/');
          }}
        />
        <Button
          title="Leer mas sobre Redux vs Context"
          onPress={() => {
            Linking.openURL('https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh');
          }}
        />
        <Button
          title="Leer mas sobre Redux-Toolkit"
          onPress={() => {
            Linking.openURL('https://redux-toolkit.js.org/');
          }}
        />
        <Text style={styles.centeredText}>---- Ejemplos ----</Text>
        <Button
          title="Contador con estado en Redux"
          onPress={() => {
            navigation.navigate(screenNames.COUNTER_BUTTON_REDUX);
          }}
        />
        <Button
          title="Llamada a API externa usando Redux"
          onPress={() => {
            navigation.navigate(screenNames.GET_TIME_REDUX);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: PADDING,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
    marginTop: PADDING,
  },
  separator: {
    backgroundColor: 'grey',
    height: StyleSheet.hairlineWidth,
    marginVertical: 15,
  },
  centeredText: { textAlign: 'center', marginBottom: 10 },
});

export default Home;
