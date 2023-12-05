
import { StyleSheet, Text, View } from 'react-native';
import Screems from './component/Screems';


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
 
    
  },
});
