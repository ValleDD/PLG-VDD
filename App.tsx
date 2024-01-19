import { StyleSheet, Text, View } from "react-native";
import Screems from "./Screems/Screems";
import appColors from "./assets/style/appColors";
import UserProvider from "./provider/UserProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <UserProvider>
        <Screems />
      </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.fifth,
  },
});
