import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  numero: { fontSize: 60 },
});

const CounterDisplayScreen = props => {
  const valor = props.route.params.counter; //Este es el valor que nos pasamos por parametro
  const navigation = useNavigation();
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

export default CounterDisplayScreen;
