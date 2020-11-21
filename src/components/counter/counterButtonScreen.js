import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../../screenNames';

const CounterButtonScreen = () => {
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En esta pantalla hay un contador y podes modificar su estado incrementandolo o decrementandolo.
      </Text>

      <View>
        <Text style={styles.text}>{`Valor --> ${counter}`}</Text>
        <View style={styles.separator} />
        <View style={styles.horizontalContainer}>
          <Button
            title="Sumar"
            onPress={() => {
              setCounter(counter + 1);
            }}
          />
          <View style={styles.separator} />
          <Button
            title="Restar"
            onPress={() => {
              setCounter(counter - 1);
            }}
          />
        </View>
      </View>

      <View>
        <Text style={styles.text}>
          Además, una funcionalidad util es pasar estos valores entre pantallas. De forma similar a lo que haciamos en
          Android en react native podemos hacerlo
        </Text>
        <View style={styles.separator} />
        <Button
          title="Quiero ver este valor pero en otra pantalla!"
          onPress={() => {
            navigation.navigate(screenNames.COUNTER_DISPLAY, { counter: counter }); //Le pasamos el valor del contador por parametro
          }}
        />
      </View>

      <Button
        title="Me aburri, quiero volver..."
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  horizontalContainer: { flexDirection: 'row' },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  separator: {
    width: 40,
  },
});

export default CounterButtonScreen;
