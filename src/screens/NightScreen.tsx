import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NightScreen = props => {
  return (
    <View>
      <Text>NightScreen component</Text>
      <Text>Description</Text>
      <Text>Timer</Text>
      <Button
        onPress={() => props.navigation.navigate('Main')}
        title={'Continue'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default NightScreen
