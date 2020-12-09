import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../context/store';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  numero: { fontSize: 60 },
});

const CounterDisplayContextScreen = () => {
  const navigation = useNavigation();
  const {
    // StoreContext devuelve un objeto con la key 'counter', que contiene la key 'value' y renombramos como 'valor' en esta pantalla (no es necesario, es para mostrar que podemos renombrar las keys)
    counter: { value: valor },
  } = useContext(StoreContext);
  return (
    <View style={styles.container}>
      <Text>Hola! El contador actualmente esta en</Text>
      <Text style={styles.numero}>{valor}</Text>
      <Button
        title="Quiero seguir sumando!"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default CounterDisplayContextScreen;
