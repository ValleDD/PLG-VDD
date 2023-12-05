import React from "react";
import { StyleSheet, View, Text, Image,Button } from "react-native";

const Welcom = () => {
  return (
    <View >
      <View style={styles.imagenP}>
        <Image
          style={styles.imagen}
          source={require("./../assets/Logo-PLG.png")}
        />
      </View >
      <View style={styles.text}>
        <Text style={styles.colorText}>Bienvenidos</Text>
        <Text style={styles.colorText}>La app donde encontraras informacion variada</Text>
      </View>
      <View style={styles.Bstyle}>
        <Button title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    margin: 2,
    height: 200,
    width: 200,
  },
  imagenP:{
    display: 'flex',
    flex: 1,
  },
  text:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  colorText:{
    color: 'white',
    fontSize:24,
  },
  Bstyle:{
    flex: 1,
    borderColor:'red',
   
    
  }
 
});

export default Welcom;
