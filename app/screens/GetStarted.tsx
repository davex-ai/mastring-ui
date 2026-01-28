import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

const GetStarted = () => {
  return (
    <View style={styles.mainContainer}>
      <Image 
        style={styles.bg} 
        source={require('../../assets/unsplash_fouVDmGXoPI.png')} 
        resizeMode="cover" 
      />

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
    backgroundColor: '#000', 
  },
  bg: {
    ...StyleSheet.absoluteFillObject, 
    width: width,
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', 
    paddingBottom: 50,
    alignItems: 'center',     
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },
  title: {
    fontSize: 45, 
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
    overflow: 'hidden', 
  }
})