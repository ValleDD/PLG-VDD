import React, { useState } from "react";
import { StyleSheet, View, Text, Image,Button, Modal, Alert, Pressable } from "react-native";
import appColors from "../assets/style/appColors";
import Login from "./Login";

const Welcom = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View  style={styles.fondo}>
      <View>
        <Image
          style={styles.imagen}
          source={require("./../assets/Logo-PLG.png")}
        />
      </View >
      <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View >
          <View >
            <Login/>
          </View>
        </View>
      </Modal>
      <Pressable
      
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    alignItems:"center",
    alignContent:"center",
    height: 200,
    width: 200,
  },
  
  text:{
    
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
    
  },
  colorText:{
    color: 'white',
    fontSize:24,
  },
  Bstyle:{
    alignItems: 'center',
    width:100,
  },
  fondo:{
    backgroundColor: appColors.primary,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
 
});

export default Welcom;
