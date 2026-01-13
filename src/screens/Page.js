import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Arrow from '../components/Arrow'

const Page = () => {
  return (
    <View style={styles.heading}>
        <Arrow />
      <Text>Payment</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})
