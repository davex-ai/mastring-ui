import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const GetStarted = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Background Image */}
      <Image 
        style={styles.bg} 
        source={require('../assets/unsplash_fouVDmGXoPI.png')} 
        resizeMode="cover" 
      />

      {/* Content Layer */}
      <View style={styles.overlay}>
        <Text style={styles.title}>You want Authentic, here you go!</Text>
        <Text style={styles.subtitle}>Find it here, buy it now!</Text>
        
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000', // Fallback color
  },
  bg: {
    ...StyleSheet.absoluteFillObject, // Makes image cover the entire background
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)', // Optional: darkens image to make text pop
  },
  title: {
    fontSize: 45, // Slightly reduced for better mobile fit
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '200',
    marginVertical: 20,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F83758',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 15,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden', // Ensures borderRadius works on iOS
  }
})