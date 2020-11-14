import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, ScrollView, Text, Image, useWindowDimensions } from 'react-native';
import { screenNames } from '../screenNames';
const PADDING = 16;
const URL_LOGO_FACULTAD =
  'https://camo.githubusercontent.com/f4a9c90c538f10fa55e98fa902bdbbeaba1d4ed65376b2bcdc5b2949926bdf0f/68747470733a2f2f7777772e667273662e75746e2e6564752e61722f74656d706c617465732f75746e31372f696d672f75746e73616e746166652d636f6c6f722e706e67';

const Home = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width - 2 * PADDING;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: URL_LOGO_FACULTAD }} style={[{ width }, styles.image]} />
      <Text style={styles.title}>Esta es una app demo, desde acá podes ir a los distintos ejemplos.</Text>
      <Button
        title="Ejemplo de Contador con Redux"
        onPress={() => {
          navigation.navigate(screenNames.COUNTER_BUTTON);
        }}
      />
      <Button
        title="Ejemplo de API de Hora"
        onPress={() => {
          navigation.navigate(screenNames.GET_TIME);
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
});

export default Home;
