import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Arrow from '../components/Arrow'
import Icon from '../components/Icon'
import MasterCard from '../components/MasterCard.js'

const Payment = () => {
  return (
    <View>
    <View style={styles.heading}>
        <Arrow />
      <Text>Payment</Text>
    </View>
    <View style={styles.cardFlex}>
      <View style={styles.cardHold}><Icon name={"hand"}/></View>
      <View style={styles.cardHold}><Icon name={"hand"}/></View>
      <MasterCard/>
    </View>
    <View styles={styles.middle}></View>
    <View></View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
    left: 10,
    marginVertical: 20
  },
  cardHold: {
    padding: 20,
    paddingHorizontal: 35,
    borderRadius: 10,
    backgroundColor: '#F0F5FA'
  },
  cardFlex: {
    flexDirection: 'row',
    gap: 20
  },
  middle: {
    color: '#F7F8F9'
  }
})
