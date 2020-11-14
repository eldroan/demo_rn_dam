import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../../screenNames';
import { useDispatch } from 'react-redux';
import { decremented, incremented } from '../../redux/counterSlice';

const CounterButtonScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En esta pantalla hay un contador y podes afectar incrementandolo o decrementandolo desde esta pantalla. El valor
        de este contador lo mostramos recién en la siguiente pantalla. Lo interesante es que no le estamos pasando el
        dato de forma directa sino que lo hacemos mediante Redux.
      </Text>
      <View style={styles.horizontalContainer}>
        <Button
          title="Sumar"
          onPress={() => {
            dispatch(incremented());
          }}
        />
        <View style={styles.separator} />
        <Button
          title="Restar"
          onPress={() => {
            dispatch(decremented());
          }}
        />
      </View>
      <Button
        title="Quiero ver cuanto sume!"
        onPress={() => {
          navigation.navigate(screenNames.COUNTER_DISPLAY);
        }}
      />

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
