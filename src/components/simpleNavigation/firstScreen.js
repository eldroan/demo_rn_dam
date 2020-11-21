import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SimpleNavigatorScreens } from './simpleNavigator';

const FirstScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primera Pantalla</Text>
      <Button
        title="Segunda Pantalla"
        onPress={() => {
          navigation.navigate(SimpleNavigatorScreens.SECOND);
        }}
      />
      <Button
        title="Volver"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
});
export default FirstScreen;
