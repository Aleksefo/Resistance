import React from 'react'
import { StatusBar } from 'react-native'
import AppContainer from 'navigation/AppContainer'
import { useScreens } from 'react-native-screens'
useScreens()

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  )
}

export default App
