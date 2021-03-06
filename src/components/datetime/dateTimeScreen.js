import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  separator: { height: 30 },
  text: { textAlign: 'center' },
});

const DateTimeScreen = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const showText = !loading && time;

  const fetchTime = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await Axios.get('https://worldtimeapi.org/api/ip');
        setTime(response.data.datetime);
      } catch {
        //Fallo la request
        setTime('No se pudo recuperar la hora');
      }
      setLoading(false);

      /* Tip: No usar 'finally' en un try/catch si estamos usando 'await' ya que
      ese bloque de código se ejecutara cuando se bloquee esperando respuesta y
      no suele ser lo que buscamos, lo que nos puede traer dolores de cabeza. */
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esta pantalla le pregunta la hora a internet a una api que se encuentra alojada en
        'https://worldtimeapi.org/api/ip'
      </Text>
      {loading && <ActivityIndicator />}
      {showText && <Text>{time}</Text>}
      <View>
        <Button title="Que hora es?" onPress={fetchTime} />
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

export default DateTimeScreen;
