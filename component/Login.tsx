import React from 'react'
import { StyleSheet, View, Text, Image,Button, SafeAreaView, TextInput } from "react-native";
import appColors from '../assets/style/appColors';


const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    
      <View style={styles.fondo}>
     <SafeAreaView>
    
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      placeholder="Nombre"
    />
  </SafeAreaView>

      </View>
     
    
    
  
  )
}

const styles= StyleSheet.create({
fondo:{
  backgroundColor: appColors.primary,
  height: '100%',
  width: 'auto'
  
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
})
export default Login

