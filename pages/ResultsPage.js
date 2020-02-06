import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

const colors = {
    darkGreen: '#39B394',
    lightGreen: '#37CCA6',
    pink: '#EE5EFF',
    darkPurple: '#A530B3',
    yellow: '#FFDD78',
    white: 'white',
}

export default class ResultsPage extends Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: colors.darkGreen,
        }
    }

    render() {
        const { navigation } = this.props
        const bmi = navigation.getParam('bmi', 0)
        const status = navigation.getParam('status', 'err')

        let statusColor = ''

        if (status === 'NORMAL') { statusColor = '#48f542'}
        else { statusColor = 'red'}

        return (
            <View style={styles.screen}>
                <View style={styles.resultView}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={styles.resultText}>{bmi}</Text>
                        <Text style={{color: 'white', fontSize: 25}}>kg/m²</Text>
                    </View>
                    <Text style={styles.resultStatus}>{status}</Text>
                    <View style={[styles.resultStatusColor, {backgroundColor: statusColor}]}></View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGreen,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    resultView: {
        backgroundColor: colors.darkGreen,
        padding: 30,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '80%',
        marginBottom: 5
    },
    resultText: {
        color: colors.white,
        fontSize: 80,
        fontWeight: 'bold',
        height: 90,
        marginRight: 10,
    },
    resultStatus: {
        color: colors.white,
        fontSize: 20,
        marginTop: 10
    },
    resultStatusColor: {
        height: 5,
        width: 100,
        marginTop: 10
    },
    saveButton: {
        backgroundColor: colors.pink,
        width: '80%',
        padding: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    saveText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    previousSavesView: {
        width: '80%',
        padding: 10,
        backgroundColor: colors.darkGreen,
        borderBottomRightRadius: 20,
        alignItems: 'center',
    },
    previousSaveText: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
    },
})

