// Logout.tsx
import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LogoutProps{
    navigation: any;
}
const Logout: React.FC<LogoutProps> = ({navigation}) => {
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      // Get the authentication cookie from AsyncStorage
      const authCookie = await AsyncStorage.getItem('authCookie');

      // Check if the user is already logged out
      if (!authCookie) {
        Alert.alert('Error', 'User is already logged out');
        return;
      }

      // Perform a POST request to the logout endpoint
      const response = await fetch('http://192.168.1.36:8888/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': authCookie,
        },
      });

      // Check if the logout was successful
      if (response.ok) {
        // Clear the authentication cookie from AsyncStorage
        await AsyncStorage.removeItem('authCookie');

        // Update the user context to indicate that the user is logged out
        setUser({ name: '', password: '', isLoggedIn: false });

        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logout;
