import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import appColors from "../assets/style/appColors";
import Info from "./Info";




const Login: React.FC = ( {navigation}) => {
 
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
 

  const handleLogin = () => {
    if(username=="valle" && password=="1234")
    navigation.navigate("Porfolio")
  
  
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
