import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import appColors from "../assets/style/appColors";
import { User, UserContext } from "../context/UserContext";

const Register:React.FC = () => {
    const {user,setUser}=useContext(UserContext);
    const [password,setPassword]= useState<String>('');

    const handleRegister=async () => {
        try {
            const response = await fetch('URL_DE_TU_API/registro', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...user,
                password: password,
              }),
            });
            if (!response.ok) {
                throw new Error("error en la solicitud");
                
            }
            
      // Si la solicitud es exitosa, actualiza el contexto con el nuevo usuario registrado
      const newUser: User = await response.json();
      setUser(newUser);
      console.log('Registro exitoso:', newUser);
    } catch (error) {
      console.error('Error al registrar el usuario:');
    }
  
        
    }
    

  return (
    <View style={styles.fondo}>
      <View style={styles.centrarTt} >
        <Text style={styles.titulo}>Nuevo Registro</Text>
      </View>

      <View style={styles.container}>
        <Text>Nombre:</Text>
        <TextInput  style={styles.input}/>
        <Text>Email:</Text>
        <TextInput style={styles.input} />
        <Text>Contraseña:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.centrarButton}>
        <Pressable style={styles.stButtons}>
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
    width: "auto",
  },
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    width: "70%",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius:23,
    paddingTop:21,
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
