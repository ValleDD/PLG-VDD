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
import { User, UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const {setUser}= useContext(UserContext);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      // Envía los datos a la API para verificar la autenticación
      const response = await fetch('http://192.168.1.36:8888/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      // Controla las posibles respuestas de la API
      if (response.ok) {
        // Si la respuesta es exitosa, obtén la cookie del encabezado de la respuesta
        const cookie = response.headers.get('Set-Cookie');

        // Almacena la cookie en el local storage del dispositivo
        await AsyncStorage.setItem('authCookie', cookie || '');
        setUser({name,password, isLoggedIn:true});
        // Redirige a la pantalla principal o realiza alguna acción adicional
        // Puedes usar la navegación o cualquier otro método según tu aplicación
         navigation.navigate('Cierre');
      } else {
        // Maneja las respuestas no exitosas de la API
        Alert.alert('Error', 'Credenciales incorrectas')
      }
    } catch (error) {
      console.error('Error al realizar la autenticación:', error);
    }
  };
  
 

  return (
    <View style={styles.fondo}>
      <SafeAreaView style={styles.container}>
        <Text>Usuario: </Text>
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          value={name}
          onChangeText={(e) => setName(e)}
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
