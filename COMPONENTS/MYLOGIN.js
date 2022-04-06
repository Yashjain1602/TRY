import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, username} from 'react-native';

export default function MYLOGIN({placeholder, secureTextEntry}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.login}
        keyboardType={'default'}
        maxLength={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    color: '#000',
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: '#4169e1',
    borderRadius: 18,
    padding: 15,
    width: '80%',
  },

  container: {
    borderColor: '#4169e1',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});