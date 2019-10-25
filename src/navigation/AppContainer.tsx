import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from 'screens/HomeScreen'
import ConfigurationScreen from '../screens/ConfigurationScreen'

const AppContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Configuration: {
      screen: ConfigurationScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
)

export default createAppContainer(AppContainer)

// onPress={() => this.props.navigation.navigate('Details')}
// props.navigation.push('Details')
// this.props.navigation.goBack()
// navigate('Home') or navigation.popToTop()
