import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
{/* import MYBUTTON from './COMPONENTS/MYBUTTON';
import MYLOGIN from './COMPONENTS/MYLOGIN';
import MYIMAG from './COMPONENTS/MYIMAG'; */}
import COUNTERAPP from './COMPONENTS/COUNTERAPP';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <MYIMAG />
      <Text style={styles.headerText}>ENTER YOUR CREDENTIALS!</Text>
      <MYLOGIN placeholder="Username or Email address" />
      <MYLOGIN placeholder="Password" secureTextEntry={true} />
     <MYBUTTON /> */}
     <COUNTERAPP />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    color: 'aqua',
    fontFamily: 'system-ui',
  },
});