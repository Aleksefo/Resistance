import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = props => {
  console.log('HomeScreen, HomeScreen')
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}
    >
      <Text>Game description</Text>
      <Button
        onPress={() => props.navigation.navigate('Configuration')}
        title={'start'}
      />
      <Button
        onPress={() => props.navigation.navigate('Rules')}
        title={'rules'}
        disabled
      />
    </View>
  )
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  }
}

const st = StyleSheet.create({
  container: {},
})

export default HomeScreen
