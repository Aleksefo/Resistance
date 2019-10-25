import React from 'react'
// import { ActivityIndicator } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  ConfigurationScreen,
  HomeScreen,
  RosterScreen,
  RulesScreen,
} from 'screens'

const AppContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `Home`,
      }),
    },
    Configuration: {
      screen: ConfigurationScreen,
      navigationOptions: () => ({
        title: `Configuration`,
      }),
    },
    Rules: {
      screen: RulesScreen,
      navigationOptions: () => ({
        title: `Rules`,
      }),
    },
    Roster: {
      screen: RosterScreen,
      navigationOptions: () => ({
        title: `Roster`,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#f4511e',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
)
// function getPersistenceFunctions() {
//     return __DEV__ ? {
//         persistNavigationState: ...,
//         loadNavigationState: ...,
//         renderLoadingExperimental: () => <ActivityIndicator />
// } : undefined;
// }
let Navigation = createAppContainer(AppContainer)
// `theme` can be `light` or `dark`. It defaults to `light` if not specified.
export default () => (
  <Navigation
    theme="light"
    //{...getPersistenceFunctions()}
  />
)

// onPress={() => this.props.navigation.navigate('Details')}
// props.navigation.push('Details')
// this.props.navigation.goBack()
// TO HOME: navigate('Home') or navigation.popToTop()
// PASSING PROPS: props.navigation.navigate('Details', {itemId: 86, otherParam: 'anything',})
// GETTING PROPS: JSON.stringify(navigation.getParam('itemId', 'NO-ID'))
// NAV OPTIONS:
// HomeScreen.navigationOptions = ({ navigation, screenProps, navigationOptions }) => {
//   return {
//     title: navigation.getParam('title', 'A Nested Details Screen'),
//     headerStyle: { // applied to the View that wraps the header
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff', // back button and title both use this property
//     headerTitleStyle: { // fontFamily, fontWeight and other Text style properties for the title
//       fontWeight: 'bold',
//     },
//   }
// }
// props.navigation.setParams({ title: 'Updated!' })
// CUSTOM COMPONENT: headerTitle: () => <LogoTitle />,
// BUTTON: headerRight: () => <Button />,
