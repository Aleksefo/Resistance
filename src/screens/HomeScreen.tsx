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
      <Text>Home Screend</Text>
      <Button onPress={() => props.navigation.navigate('Configuration')} />
      <Button
        onPress={() => props.navigation.setParams({ otherParam: 'Updated!' })}
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
