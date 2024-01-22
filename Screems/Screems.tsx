import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Welcom from "./Welcom";
import appColors from "../assets/style/appColors";
import Login from "./Login";

import Info from "../component/Info";
import Register from "./Register";


const Drawer = createDrawerNavigator();

const Screems = () => {


  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "Cubo Rubick",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: appColors.primary,
    },
    headerTintColor: "black",
    drawerItemStyle: {
      width: "100%",
    },
    drawerContentStyle: { width: 270, borderRadius: 30 },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: appColors.secondary,
    drawerInactiveTintColor: "black",
    drawerInactiveBackgroundColor: appColors.primary,
    drawerType: "back",
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={drawerNavigatorScreenOptions}
      >
        <Drawer.Screen name="Home" component={Welcom} />
       
          <Drawer.Screen name="Login" component={Login} />
      
          <Drawer.Screen name="Porfolio" component={Info} />
          <Drawer.Screen name="Registro" component={Register}/>
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});

export default Screems;
