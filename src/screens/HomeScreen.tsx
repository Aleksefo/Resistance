import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = props => {
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
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default HomeScreen
