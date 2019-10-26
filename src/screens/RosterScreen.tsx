import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RosterScreen = props => {
  return (
    <View>
      <Button
        onPress={() => props.navigation.navigate('PlayerAdd')}
        title={'Add Player'}
      />
      <Text>RosterScreen component</Text>
      <Button
        onPress={() => props.navigation.navigate('Night')}
        title={'Start the night phase'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default RosterScreen
