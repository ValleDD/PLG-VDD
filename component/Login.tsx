import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import appColors from "../assets/style/appColors";

const users =[
{username:"valle",password:"valle"},
{username:"Carmen",password:"Carmen"},
{username:"Adassa",password:"Adassa"},
]

const Login = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Verifica si las credenciales coinciden con algún usuario en el array
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      navigation.navigate('Porfolio');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  
  return (
    <View style={styles.fondo}>
      <SafeAreaView style={styles.container}>
        <Text>Usuario: </Text>
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin}/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: appColors.primary,
    height: "100%",
    width: "auto",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});
export default Login;
