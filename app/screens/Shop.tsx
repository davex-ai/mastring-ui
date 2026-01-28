import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import watch3 from '../../assets/images/0x0-removebg-preview 1.png'
import watch2 from '../../assets/images/6_44mm-blu_889c7c8b-e883-41ab-856c-38c9dd970d12_1200x-removebg-preview 2.png'
import watch1 from '../../assets/images/Mi-Smart-Band-4-832x558-1573195785-removebg-preview 1 (1).png'
import watch4 from '../../assets/images/Mi-Smart-Band-4-832x558-1573195785-removebg-preview 1.png'

const Shop = () => {
    const watches = [
        {
            pic: watch1,
            name: 'Redmi Note 4'
        },
        {
            pic: watch2,
            name: 'Apple Watch - series g'
        },
        {
            pic: watch3,
            name: 'Analog Sacchman Watch'
        },
        {
            pic: watch4,
            name: 'Smart band 4'
        },
    ]
    return (
        <View style={styles.cont}>
            <View style={{flexDirection: 'row', gap: 270 }}>
               <View style={styles.oneimg}> <Image source={require('../assets/images/align-left.png')} /> </View>
                <View style={styles.oneimg}> <Image source={require('../assets/images/search.png')} /> </View>
            </View>
            <View style={{flexDirection: 'row', gap: 20, marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
            <Text style={{fontWeight: 600, fontSize: 25}}>Hello Fola</Text>
             <Image source={require('../assets/Vector (5).png')} />
            </View>  
            <Text style={{fontWeight: 500, fontSize: 15, color: '#00000080', marginBottom: 20}}>Let&apos;s start shopping</Text>
            <View style={{backgroundColor: '#F17547', borderRadius: 20, width: 350, height: 160, padding: 30,}}>
            <Text style={{fontSize: 20, fontWeight: 600, color: '#fff'}}>20% OFF DURING THE WEEKEND</Text>
            <Text  style={{color: '#F17547', width: 100, padding: 10, marginTop: 20, textAlign:'center', borderRadius: 30, fontWeight: 700, fontSize: 15, backgroundColor: '#fff'}} >Get Now</Text>
            </View>  
            <View style={{flexDirection: 'row', gap: 160, alignItems: 'center', marginVertical: 30}}>
            <Text style={{fontWeight: 700, fontSize: 20}}>Top Categories</Text>    
            <Text style={{fontSize: 15, color: '#F17547'}}>See All</Text>    
            </View>  
            <View style={{flexDirection: 'row', gap: 10}}>
            <View style={{backgroundColor: '#F17547', borderWidth: 2, padding: 20, borderRadius: 10, borderColor: '#D8D3D380'}}><Image source={require('../assets/images/Vector (4).png')}/></View>
            <View style={styles.categoryCard}><Image source={require('../assets/images/Vector (3).png')}/></View>
            <View style={styles.categoryCard}><Image source={require('../assets/images/Vector.png')}/></View>
            <View style={styles.categoryCard}><Image source={require('../assets/images/Vector (2).png')}/></View>
            <View style={styles.categoryCard}><Image source={require('../assets/images/Vector (1).png')}/></View>
            </View>  
            <View style={styles.grid}>
                    {watches.map((img, index) => (
                      <Image key={index} source={img.pic} style={styles.image} />
                    ))}
                  </View>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        marginTop: 80
    },
    oneimg:{
        padding: 10, 
        backgroundColor: '#D9D9D940',
        borderRadius: 50,
    },
    categoryCard: {
        backgroundColor: '#D8D3D380',
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
        borderColor: '#D8D3D380'
    },
    grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  image: {
    width: '48%', 
    aspectRatio: 1, 
    marginBottom: 12,
    borderRadius: 12,
  },
}) 
