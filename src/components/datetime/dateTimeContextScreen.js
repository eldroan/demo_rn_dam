import React, { useContext } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../context/store';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  separator: { height: 30 },
  text: { textAlign: 'center' },
});

const DateTimeContextScreen = () => {
  const navigation = useNavigation();
  const {
    //Nuestro StoreContext tiene una key 'time' que adentro tiene value, getTime, isLoading
    time: { value, getTime, isLoading },
  } = useContext(StoreContext);
  const showText = !isLoading && !!value;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esta pantalla le pregunta la hora a internet a una api que se encuentra alojada en
        'https://worldtimeapi.org/api/ip'
      </Text>
      {isLoading && <ActivityIndicator />}
      {showText && <Text>{value}</Text>}
      <View>
        <Button title="Que hora es?" onPress={getTime} />
        <View style={styles.separator} />
        <Button
          title="Volver"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default DateTimeContextScreen;
