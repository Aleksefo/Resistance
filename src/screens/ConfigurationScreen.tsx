import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ConfigurationScreen = props => {
  console.log('ConfigurationScreen, ConfigurationScreen')
  return (
    <View>
      <Text>Description</Text>
      <Button
        onPress={() => props.navigation.navigate('Roster')}
        title={'Add Player'}
        disabled
      />
      <Text>Night phase description</Text>
      <Button
        onPress={() => props.navigation.navigate('Roster')}
        title={'Start the night phase'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default ConfigurationScreen
