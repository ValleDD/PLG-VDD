import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import appColors from "../assets/style/appColors";
import {  UserContext } from "../context/UserContext";
import { useUser } from "../provider/UserProvider";


interface ApiRespose {
  success: boolean;
  message?: string;
  cookie?: string;
  name?: string;
}

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const {login}= useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(username, password);
      // Si la petición de inicio de sesión es exitosa
      navigation.navigate('Home');
    } catch (error) {
      // Si hay un error en la petición de inicio de sesión
      console.error('Error en el inicio de sesión:', error);
      // Puedes mostrar un mensaje de error o manejar de otra manera según tus necesidades
      Alert.alert('Error', 'Credenciales incorrectas');
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
          onChangeText={(e) => setUsername(e)}
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} />
       
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: appColors.secondary,
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
