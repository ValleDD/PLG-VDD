import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
 
} from "react-native";

import appColors from "../assets/style/appColors";

interface WelcomProps {
  navigation: any;
}

const Welcom: React.FC<WelcomProps> = ({ navigation }) => {
 
  return (
    <View style={styles.fondo}>
      <View>
        <Image
          style={styles.imagen}
          source={require("./../assets/Logo-PLG.png")}
        />
      </View>
      <View>
        <Image source={require("./../assets/cubo2.png")} />
      </View>
      <View>
        <Text style={styles.textBV}>Bienvenidos</Text>
      </View>
    
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textB}>Login</Text>
        </TouchableOpacity>
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
    backgroundColor: appColors.secondary,
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  boton: {
    backgroundColor: "#9FB9E9",
    borderRadius: 80,
    padding: 25,
    margin: 100,
    alignItems: "center",
    borderColor: "black",
  },
  textBV: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textB: {
    fontSize: 20,
  },
});

export default Welcom;
