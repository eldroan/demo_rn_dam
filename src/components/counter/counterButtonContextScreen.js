import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../../screenNames';
import { StoreContext } from '../../context/store';

const CounterButtonContextScreen = () => {
  const {
    //Nuestro StoreContext tiene una key 'counter' que adentro tiene value, increment, decrement
    counter: { value, increment, decrement },
  } = useContext(StoreContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En esta pantalla hay un contador y podes modificar su estado incrementandolo o decrementandolo.
      </Text>

      <View>
        <Text style={styles.text}>{`Valor --> ${value}`}</Text>
        <View style={styles.separator} />
        <View style={styles.horizontalContainer}>
          <Button title="Sumar" onPress={increment} />
          <View style={styles.separator} />
          <Button title="Restar" onPress={decrement} />
        </View>
      </View>

      <View>
        <Text style={styles.text}>
          Además, una funcionalidad util es pasar estos valores entre pantallas. Utilizando context no es necesario
          pasar props
        </Text>
        <View style={styles.separator} />
        <Button
          title="Quiero ver este valor pero en otra pantalla!"
          onPress={() => {
            navigation.navigate(screenNames.COUNTER_DISPLAY_CONTEXT); //  Miren!! Sin manos (ni props) como un jóven!
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

export default CounterButtonContextScreen;
