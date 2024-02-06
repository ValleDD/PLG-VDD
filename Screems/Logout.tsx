// Logout.tsx
import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

import { useUser } from "../provider/UserProvider";


interface LogoutProps{
    navigation: any;
}
const Logout: React.FC<LogoutProps> = ({navigation}) => {
  const { logout } = useUser();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Home')
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
