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
import Info from "../component/Info";
import { useAuth } from "../context/Context";





const Login: React.FC = ({navigation}) => {
 

 const [username,setUsername]= useState('');
 const [password,setPassword]= useState('');
 const {login} = useAuth();

 

  const handleLogin = () => {

    if (username === 'valle' && password === '1234') {
      login({username})
      navigation.navigate('home'as never)
    }
    
  }
   
  
  

  
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

function setError (arg0: string){
  throw new Error('funtion no implementada')
}
function setIsAuthenticated(arg0: boolean){
  throw new Error('funtion no implementada')
}
