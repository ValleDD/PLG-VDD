import React, { useContext, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import appColors from "../assets/style/appColors";
import { UserContext } from "../context/UserContext";

interface LoginProps{
  navigation: any;
}


const Login: React.FC<LoginProps> = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const [name,setName]= useState<string>("");
  const [password,setPassword]= useState<string>("");

  const handleLogin = () => {

    setUser({name,password});

    navigation.navigate('Porfolio')

  }
   
  
  

  
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


