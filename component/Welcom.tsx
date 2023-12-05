import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import appColors from "../assets/style/appColors";
import Login from "./Login";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Welcom = ({navigation}) => {
   
  return (
    <View style={styles.fondo}>
      <View>
        <Image
          style={styles.imagen}
          source={require("./../assets/Logo-PLG.png")}
        />
      </View>
      <View>
      <Text>Bienvenidos</Text>
      </View>
      <View>
        <Button title="boton" onPress={() => navigation.navigate("Login")}/>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    alignItems: "center",
    alignContent: "center",
    height: 200,
    width: 200,
  },

  text: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  colorText: {
    color: "white",
    fontSize: 24,
  },
  Bstyle: {
    alignItems: "center",
    width: 100,
  },
  fondo: {
    backgroundColor: appColors.primary,
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  boton: {},
});

export default Welcom;
