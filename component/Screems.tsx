import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Welcom from "./Welcom";
import appColors from "../assets/style/appColors";
import Login from "./Login";
const Drawer = createDrawerNavigator();


const Screems = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    // header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: 'My App Name',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: appColors.primary
    },
    headerTintColor: appColors.primary,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: 'blue',
    drawerActiveBackgroundColor: 'blue',
    drawerInactiveTintColor: 'write',
    drawerInactiveBackgroundColor: appColors.primary,
    drawerType: 'slide'
  }
  return (
    <NavigationContainer   >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            width: 240,
          },
          drawerInactiveBackgroundColor: appColors.primary ,
        }}
      >
        <Drawer.Screen name="Home" component={Welcom} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});

export default Screems;
