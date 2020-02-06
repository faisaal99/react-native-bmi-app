import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

const colors = {
    darkGreen: '#39B394',
    lightGreen: '#37CCA6',
    pink: '#EE5EFF',
    darkPurple: '#A530B3',
    yellow: '#FFDD78',
    white: 'white',
  }

const Card = (props) => {

    // Holds value for the current number
    const [number, setNumber] = useState(props.initNumber)

    // Adds by one
    const addToNumber = () => {
        setNumber(propertyNumber => propertyNumber + 1)
        sendData(1)
    }

    // Subracts by one
    const subtractFromNumber = () => {
        setNumber(propertyNumber => propertyNumber - 1)
        sendData(-1)
    }

    // Sends back data to parent
    const sendData = extra => {
        props.sendBackData(number + extra, props.descriptionText)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.descriptionText}>{props.descriptionText}</Text>

            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.text}>{number}</Text>

                <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 20}}>{props.unit}</Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={subtractFromNumber}>
                    <Image style={styles.button} source={require('./../src/subtractIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={addToNumber}>
                    <Image style={styles.button} source={require('./../src/addIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGreen, //'#6e8ab5',
        padding: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
    },
    descriptionText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 60,
        height: 69,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: colors.pink,
        margin: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.white,
    },
    button: {
        height: 35,
        width: 35,
    }
})

export default Card
