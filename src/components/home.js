import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, ScrollView, Text, Image, useWindowDimensions, View, Linking } from 'react-native';
import { screenNames } from '../screenNames';
const PADDING = 16;
const URL_LOGO_FACULTAD =
  'https://camo.githubusercontent.com/f4a9c90c538f10fa55e98fa902bdbbeaba1d4ed65376b2bcdc5b2949926bdf0f/68747470733a2f2f7777772e667273662e75746e2e6564752e61722f74656d706c617465732f75746e31372f696d672f75746e73616e746166652d636f6c6f722e706e67';

const Home = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width - 2 * PADDING;

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.separator} />
      <Text style={styles.title}>🔥 Extras 🔥</Text>
      <Text style={styles.centeredText}>
        A partir de aqui comienzan algunos ejemplos de contenidos que no son parte de la materia pero son interesantes
        para construir aplicaciones
      </Text>
      <Text style={styles.title}>Redux</Text>
      <Text style={styles.centeredText}> Redux es un contenedor predecible del estado de aplicaciones JavaScript.</Text>
      <Text style={styles.centeredText}>
        Todo el estado de tu aplicación esta almacenado en un único árbol dentro de un único store. La única forma de
        cambiar el árbol de estado es emitiendo una acción (un objeto describiendo que ocurrió).
      </Text>
      <Text style={styles.centeredText}>
        Para especificar como las acciones transforman el árbol de estado se usas reducers (es como un gran switch que
        dice si recibi X accion modifica Y valores del estado).
      </Text>
      <Button
        title="Leer mas sobre Redux"
        onPress={() => {
          Linking.openURL('https://es.redux.js.org/');
        }}
      />
      <Text style={styles.centeredText}>
        Para estos ejemplos se utilizó una librería para simplificar el codigo de redux llamada Redux-Toolkit
      </Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingTop: PADDING,
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
