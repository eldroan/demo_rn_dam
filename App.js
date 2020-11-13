import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screens = {
  HOME: 'HOME',
  PROFILE: 'PROFILE',
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
});

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Anda a la home"
        onPress={() => {
          navigation.navigate(screens.PROFILE);
        }}
      />
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Anda al perfil"
        onPress={() => {
          navigation.navigate(screens.HOME);
        }}
      />
    </View>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={screens.HOME} component={Home} />
      <Stack.Screen name={screens.PROFILE} component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
