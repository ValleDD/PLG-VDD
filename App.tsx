
import { StyleSheet, Text, View } from 'react-native';
import Screems from './Screems/Screems';
import appColors from './assets/style/appColors';



export default function App() {
  return (
    <View style={styles.container}>
    
     <Screems/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.fifth
 
    
  },
});
