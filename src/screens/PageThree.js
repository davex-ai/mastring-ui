import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import meditate1 from '../assets/Frame 33733 (1).png'
import meditate2 from '../assets/Frame 33733.png'
import meditate3 from '../assets/Frame 33734 (1).png'
import meditate4 from '../assets/Frame 33734.png'
import meditate5 from '../assets/Frame 33735.png'

const PageThree = () => {
  const images = {
    pic1: {
      name: meditate1
    },
    pic2: {
      name: meditate2
    },
    pic3: {
      name: meditate3
    },
    pic4: {
      name: meditate4
    },
    pic5: {
      name: meditate5
    },
    pic6: {
      name: meditate5
    },
   }
  return (
    <View>
      <Text>Meditation</Text>
      <Text>Lorem Ipsum is simply dummy text</Text>
      {/* <Image source={}/> */}

    </View>
  )
}

export default PageThree

const styles = StyleSheet.create({})