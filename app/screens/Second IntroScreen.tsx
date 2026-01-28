import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SecondIntroScreen = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Stylish</Text>
        <Image source={require("../../assets/Group 34010.png")} style={styles.sumImage} />
    </View>
  )
}

export default SecondIntroScreen

const styles = StyleSheet.create({
  container:{ 
    flexDirection: 'row-reverse', 
    alignItems: "center",
    gap: 10
  },
  text: { 
    fontSize: 40,
    fontWeight: 500,
    color: '#F83758'
   },
  sumImage: {  
  width: 100,
  height: 300,
  resizeMode: "contain", 
}
})