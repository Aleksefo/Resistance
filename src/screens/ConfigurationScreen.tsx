import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ConfigurationScreen = props => {
  console.log('ConfigurationScreen, ConfigurationScreen')
  return (
    <View>
      <Text>Player number selector</Text>
      <Text>Description</Text>
      <Button
        onPress={() => props.navigation.navigate('Roster')}
        title={'Add Players'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default ConfigurationScreen
