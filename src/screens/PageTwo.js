import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Arrow from '../components/Arrow'
import Icon from '../components/Icon'
import Separator from '../components/Seperator'

const PageTwo = () => {
    return (
        <View>
            <View style={styles.top_container}>
                <Arrow />
                {/* <Image style={styles.arr} source={require("../assets/Back.png")} /> */}
                <Image style={styles.image} source={require("../assets/Img.png")} />
            </View>
            <Text style={styles.text}> Contact Us</Text>
            <View style={styles.body}>
                <Text style={styles.bodyTextHead}> Social Media Platforms</Text>
                <View style={styles.wholeLine}>
                    <View style={styles.left}> <View style={styles.social} ><Icon name="icon3"/> </View> <Text style={styles.bodyText}>WhatsApp</Text> </View>
                     <View style={styles.arrowLine}><Icon name="arrowLine"/></View>
                </View>
                <Separator/>
                <View style={styles.tiktokWholeLine}>
                    <View style={styles.left}> <View style={styles.social} ><Icon name="icon6"/> </View> <Text style={styles.bodyText}>Twitter</Text> </View>
                     <View style={styles.arrowLine}><Icon name="arrowLine"/></View>
                </View>
                <Separator/>
                <View style={styles.wholeLine}>
                    <View style={styles.left}> <View style={styles.social} ><Icon name="icon2"/> </View> <Text style={styles.bodyText}>Instagram</Text> </View>
                     <View style={styles.arrowLine}><Icon name="arrowLine"/></View>
                </View>
                <Separator/>
                <View style={styles.wholeLine}>
                    <View style={styles.left}> <View style={styles.social} ><Icon name="icon7"/> </View> <Text style={styles.bodyText}>Snap Chat</Text> </View>
                     <View style={styles.arrowLine}><Icon name="arrowLine"/></View>
                </View>
                <Separator/>
                <View style={styles.tiktokWholeLine}>
                    <View style={styles.left}> <View style={styles.social} ><Icon name="icon1"/> </View> <Text style={styles.bodyText}>Tik Tok</Text> </View>
                     <View style={styles.arrowLine}><Icon name="arrowLine"/></View>
                </View>
                
                {/* <Icon name="icon2"/>
                <Icon name="icon3"/>
                <Icon name="icon6"/>
                <Icon name="icon7"/> */}
                
            </View>
        </View>
    )
}

export default PageTwo

const styles = StyleSheet.create({
    top_container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 39,
        gap: 300
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Poppins',
        marginTop: 20,
        marginBottom: 20
    },
    body: {
        backgroundColor: '#F5F5FA',
        borderRadius: 20,
        paddingHorizontal: 12

    },
    bodyTextHead: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Poppins',
        marginTop: 50,
        marginBottom: 30
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    bodyText: {
        fontSize: 20,
        color: '#8083A3'
    },
    wholeLine: { 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 100,
        marginVertical: 15
    },
    tiktokWholeLine: { 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 130,
        marginVertical: 15
    },
    arrowLine: {
        backgroundColor: '#1077AF', 
        borderRadius: 30, 
        padding: 15,
    },
    social: {
        // backgroundColor: '#E4E6E8',
        borderWidth: 2, 
        borderColor: '#E4E6E8',
        outlineColor: '#E4E6E8',
        borderRadius: 90, 
        padding: 15
    }
})