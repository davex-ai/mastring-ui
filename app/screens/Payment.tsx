import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Arrow from '../../components/Arrow'
import Icon from '../../components/Icon'
import MasterCard from '../../components/MasterCard.js'
import Card from '../../components/MasterCard.js'

const Payment = () => {
  return (
    <View>
      <View style={styles.heading}>
        <Arrow />
        <Text>Payment</Text>
      </View>
      <View style={styles.cardFlex}>
        <View style={styles.cardHold}><Icon name={"hand"} /></View>
        <View style={{objectFit: 'cover', padding: 20, paddingHorizontal: 35, paddingTop: 26,  borderRadius: 10, backgroundColor: '#F0F5FA'}}><Icon name={"visa"} /></View>
        <MasterCard />
      </View>
      <View style={styles.cardNameFlex}>
        <Text>Cash</Text>
        <Text >Visa</Text>
        <Text>MasterCard</Text>
      </View>
      <View style={styles.middle}>
        <Image style={{marginLeft: 30}}source={require('../assets/Group 48095676.png')} />
        <Text style={styles.thick}>No master card added</Text>
        <Text style={styles.normal}>You can add a mastercard and save it later</Text>
      </View>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>+ ADD NEW</Text>
    </TouchableOpacity>
      <View style={styles.priceBox}><Text style={styles.total}>TOTAL: </Text> <Text style={styles.price}>$96</Text></View>
      <TouchableOpacity >
      <Text style={styles.orangeBtn}>PAY & CONFIRM</Text>
    </TouchableOpacity>
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
    gap: 20,
    marginHorizontal: 'auto',
    marginBottom: 12,
  },
  cardNameFlex: {
    flexDirection: 'row',
    gap: 80,
    marginHorizontal: 'auto',
    marginBottom: 12,
    
  },
  middle: {
    backgroundColor: '#F7F8F9',
    paddingVertical: 40,
    paddingHorizontal: 70,
    marginHorizontal: 'auto',
    borderRadius: 20,
    marginVertical: 20,
    flexDirection: 'column',
    gap: 10
  },
  normal: {
    color: '#7f8286',
    letterSpacing: 1,
    width: 220,
    textAlign: 'center'
  },
  thick: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 700,
    letterSpacing: 2,
    fontFamily: 'sans'

  },
    button: {
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderColor: '#E0E0E0',     
    borderRadius: 8,            
    paddingVertical: 12,        
    textAlign: 'center',
  },
  
  text: {
    color: '#FF7A3D',           
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  total: {
    color: '#A0A5BA'
  },
  price: {
    fontSize: 30
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30
  },
   orangeBtn: {
    marginTop: 40,  
    backgroundColor: '#FF7A3D', 
    color: '#fff',
    fontWeight: 700,
    borderWidth: 1,
    borderColor: '#E0E0E0',     
    borderRadius: 8,            
    paddingVertical: 19,        
    textAlign: 'center',
  },
}) 
