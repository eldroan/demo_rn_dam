import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { counterValue } from '../../redux/selectors';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  numero: { fontSize: 60 },
});

const CounterDisplayReduxScreen = () => {
  const navigation = useNavigation();
  const valor = useSelector(counterValue);
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

export default CounterDisplayReduxScreen;
