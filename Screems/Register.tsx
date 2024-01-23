import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import appColors from "../assets/style/appColors";
import { User, UserContext } from "../context/UserContext";

const Register:React.FC = () => {
    const [name,setName]= useState<String>('');
    const [password,setPassword]= useState<String>('');
    const [email,setEmail]= useState<String>('');

    const handleRegister=async () => {
        try {
            const response = await fetch('http://172.16.100.165:8888/users/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                email: email,
                password: password
                
              }),
            });
            if (!response.ok) {
                throw new Error("error en la solicitud");
                
            }
            
      // Si la solicitud es exitosa, actualiza el contexto con el nuevo usuario registrado
      const newUser: User = await response.json();
      setName('');
      console.log('Registro exitoso:', newUser);
     
     
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  
        
    }
    

  return (
    <View style={styles.fondo}>
      <View style={styles.centrarTt} >
        <Text style={styles.titulo}>Nuevo Registro</Text>
      </View>

      <View style={styles.container}>
        <Text>Nombre:</Text>
        <TextInput   placeholder="Ingresa tu nombre" onChangeText={(text)=>setName(text)}  style={styles.input} />
        <Text>Email:</Text>
        <TextInput placeholder="Ingrese su email" onChangeText={(text)=>setEmail(text)} keyboardType="email-address" style={styles.input} />
        <Text>Contraseña:</Text>
        <TextInput  onChangeText={(text)=> setPassword(text)} placeholder="Ingrese su contraseña" secureTextEntry style={styles.input} />
      </View>
      <View style={styles.centrarButton}>
        <Pressable style={styles.stButtons} onPress={handleRegister}>
            <Text style={styles.textButton}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  fondo: {
    backgroundColor: appColors.secondary,
    height: "100%",
    //width: "auto",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    width: "70%",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 18,
    paddingLeft: 'auto',
    borderRadius:23,
    paddingTop:'auto',
   
   
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 23,
  },
  centrarTt:{
    alignItems: 'center',
    paddingTop:40,
    paddingBottom:80
  },
  stButtons:{
    width:'50%',
    height:'20%',
    lineHeight: 'auto',
    alignItems: 'center',
    borderRadius:34,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  textButton: {
    fontSize: 23,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    
  },
  centrarButton:{
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default Register;
