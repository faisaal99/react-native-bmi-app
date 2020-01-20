import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigatior } from 'react-navigation-stack'
import ResultPage from './ResultPage'
import HomePage from './HomePage';

import Card from './components/Card'

const colors = {
  darkGreen: '#39B394',
  lightGreen: '#37CCA6',
  pink: '#EE5EFF',
  darkPurple: '#A530B3',
  yellow: '#FFDD78',
  white: 'white',
}

const MainNavigation = createStackNavigatior({
  Home: {screen: HomePage},
  Results: {screen: ResultPage}
})

const App = createAppContainer(MainNavigation)

export default App

/*{
  // Shows a new page with the BMI results
  const showResults = () => {
    console.log('Showing results')
  }

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>BMI CALCULATOR</Text>
        <Text>by: Faisal A.</Text>
      </View>

      <Card initNumber={50} descriptionText='WEIGHT' unit='KG'/>

      <View style={{height: 20}}></View>

      <Card initNumber={160} descriptionText='HEIGHT' unit='CM' />

      <TouchableOpacity style={styles.calculateButton} activeOpacity={0.5} onPress={showResults}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>CALCULATE</Text>
      </TouchableOpacity>

    </View>
  );
}*/


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
  }
});
