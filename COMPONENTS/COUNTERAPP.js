import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground} from "react-native";

export default function COUNTERAPP(){
  const [count, setCount] = useState(0);
  const image = { uri: "https://media.istockphoto.com/vectors/neon-frame-rectangle-or-square-shape-glow-border-on-the-black-vector-vector-id1187136688?k=20&m=1187136688&s=170667a&w=0&h=kl2zC7o0C9Egk6NozIedCQnK0hVijcrEHHhlYmfpFWc=" };
  const onPress = () => setCount(prevCount => prevCount + 1);
  const offPress = () => setCount(prevCount => prevCount - 1);
  return (
     <View style={styles.container}>
      <View style={styles.countContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>TAP COUNTER</Text>
      <Text style={styles.text}>TAPS:{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{fontSize: 50,fontFamily: 'sans-serif-condensed',color: 'darkorchid'}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={offPress}
      >
        <Text style={{fontSize: 50,fontFamily: 'sans-serif-condensed',color: 'darkorchid'}}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>BY- YASH JAIN</Text>
    </ImageBackground>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 5
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: 3,
    borderColor: "darkorchid",
    marginVertical: 10,
    marginLeft: 150,
    borderRadius: 15,
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 32
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    height: 800
  },
  countContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: "auto"
  },
  text: {
    alignItems: "flex-start",
    color: "darkorchid",
    fontSize: 42,
    fontFamily: 'sans-serif',
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  }
});