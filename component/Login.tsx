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

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = () => {
    if (usuario === "usuario" && contraseña === "contraseña") {
      Alert.alert("Login exitoso", "Bienvenido");
    } else {
      Alert.alert(
        "Error de inicio de sesión",
        "Usuario o contraseña incorrectos"
      );
    }
  };
  return (
    <View style={styles.fondo}>
      <SafeAreaView style={styles.container}>
        <Text>Usuario: </Text>
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={contraseña}
          onChangeText={(text) => setContraseña(text)}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} />
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
