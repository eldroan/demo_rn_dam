import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../../screenNames';
import { useDispatch, useSelector } from 'react-redux';
import { currentTime, loadingCurrentTime } from '../../redux/selectors';
import { getTime } from '../../redux/timeSlice';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  separator: { height: 30 },
  text: { textAlign: 'center' },
});

const DateTimeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const time = useSelector(currentTime);
  const loading = useSelector(loadingCurrentTime);
  const showText = !loading && time;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esta pantalla le pregunta la hora a internet a una api que se encuentra alojada en
        'https://worldtimeapi.org/api/ip'
      </Text>
      {loading && <ActivityIndicator />}
      {showText && <Text>{time}</Text>}
      <View>
        <Button
          title="Que hora es?"
          onPress={() => {
            if (!loading) {
              dispatch(getTime());
            }
          }}
        />
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
