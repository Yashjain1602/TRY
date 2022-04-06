import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function IMAGBACKGROUND() {
    const image = { uri: "https://us.123rf.com/450wm/sabelskaya/sabelskaya1603/sabelskaya160300156/54119905-neon-square-neon-blue-light-.jpg?ver=6" };
    return
    (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>COUNTER:</Text>
    </ImageBackground>
  </View>
);}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  }
});
{/*
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
});*/}