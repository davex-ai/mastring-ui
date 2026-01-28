import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SvgLogo from '../../components/SvgLogo';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <SvgLogo/>
        <Image source={require("../../assets/Ellipse 1006 2.png")}
        style={styles.sumImage}
      />
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sumImage: {
  position: "absolute",
  bottom: -69,
  right: 0,
  width: 150,
  height: 300,
  resizeMode: "contain", // Ensures the image maintains its aspect ratio

  
}
})