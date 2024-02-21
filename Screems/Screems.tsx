import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Welcom from "./Welcom";
import appColors from "../assets/style/appColors";
import Login from "./Login";
import Register from "./Register";
import PorfolioValle from "../component/PorfolioValle";
import { useUser } from "../provider/UserProvider";
import Recording from "./Recording";

const Drawer = createDrawerNavigator();

const Screems = () => {
  const { isLoggedIn } = useUser();

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
        {isLoggedIn ? (
          <>
            <Drawer.Screen name="Home" component={Welcom} />
            <Drawer.Screen name="Porfolio" component={PorfolioValle} />
            <Drawer.Screen name="Audio" component={Recording} />
            
          </>
        ) : (
          <>
            <Drawer.Screen name="Home" component={Welcom} />
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
