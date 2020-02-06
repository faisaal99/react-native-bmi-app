import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import Card from '../components/Card'

const colors = {
    darkGreen: '#39B394',
    lightGreen: '#37CCA6',
    pink: '#EE5EFF',
    darkPurple: '#A530B3',
    yellow: '#FFDD78',
    white: 'white',
}

export default class HomePage extends Component {
    static navigationOptions = {
        headerShown: false,
    }

    inputData = { weight: 50, height: 160, BMI: 19.5, status: 'NORMAL'}

    retrieveDataFromCards = (data, type) => {
        if (type === "WEIGHT") {
            this.inputData.weight = data
        }
        else if (type === "HEIGHT") {
            this.inputData.height = data
        }

        // Calculate BMI
        const w = this.inputData.weight
        const h = this.inputData.height / 100
        this.inputData.BMI = (w / (h * h)).toFixed(1)

        // Check if overweight, normal or underweight
        const bmi = this.inputData.BMI
        if (bmi > 25 ) {this.inputData.status = 'OVERWEIGHT'}
        else if (bmi < 18.5) {this.inputData.status = 'UNDERWEIGHT'}
        else {this.inputData.status = 'NORMAL'} 
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>BMI CALCULATOR</Text>
                    <Text>by: Faisal A.</Text>
                </View>

                <Card initNumber={50} descriptionText='WEIGHT' unit='KG' sendBackData={this.retrieveDataFromCards} />

                <View style={{height: 20}}></View>

                <Card initNumber={160} descriptionText='HEIGHT' unit='CM' sendBackData={this.retrieveDataFromCards} />

                <TouchableOpacity style={styles.calculateButton} activeOpacity={0.5} onPress={() => navigate('ResultsPage', {bmi: this.inputData.BMI, status: this.inputData.status})}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>CALCULATE</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGreen, //8ab0ed
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 40,
        fontWeight: 'bold',
    },
    titleContainer: {
        backgroundColor: colors.yellow,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    calculateButton: {
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        backgroundColor: colors.pink,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        elevation: 5,
    }
});