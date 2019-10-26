import React from 'react'
import { StatusBar } from 'react-native'
import AppContainer from 'navigation/AppContainer'
import { useScreens } from 'react-native-screens'
import { Provider } from 'state/AppContext'
useScreens()

const App = () => {
  return (
    <Provider>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </Provider>
  )
}

export default App
