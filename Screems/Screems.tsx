import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Welcom from "./Welcom";
import appColors from "../assets/style/appColors";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { UserContext } from "../context/UserContext";


import Valle from "../component/Valle";

const Drawer = createDrawerNavigator();

const Screems = () => {
  const { user } = useContext(UserContext);

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
        {user ? (
          <>
            <Drawer.Screen name="Home" component={Welcom} />

            <Drawer.Screen name="Porfolio" component={Valle} />
            <Drawer.Screen name="Login" component={Login} />

            <Drawer.Screen name="Registro" component={Register} />
            <Drawer.Screen name="Logout" component={Logout} />
          
            
          </>
        ) : (
          <>
            <Drawer.Screen name="Login" component={Login} />

            <Drawer.Screen name="Registro" component={Register} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});

export default Screems;
