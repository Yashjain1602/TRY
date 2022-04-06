import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Image} from 'react-native';

export default function Myimage() {
  return (
    <Image
      source={{
        uri: 'https://img.search.brave.com/e59w9Mc3YtZPp_yfzpewkOX8LhdoFlrcIxdoTyp2-gE/rs:fit:634:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/ejhiRzNCX2Z5bFJh/ZjhOSGltNDZRSGFG/aSZwaWQ9QXBp',
      }}
      style={styles.design}
    />
  );
}

const styles = StyleSheet.create({
  design: {
    height: 100,
    width: 200,
  },
});