import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Pages
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

const App = createStackNavigator({
    HomePage: {screen: HomePage},
    ResultsPage: {screen: ResultsPage},
  },
  {
    initialRouteName: 'HomePage',
  },
)

export default createAppContainer(App)