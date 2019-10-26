import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MissionSelectionScreen = props => {
  return (
    <View>
      <Text>MissionSelectionScreen component</Text>
      <Text>Mission number</Text>
      <Text>Mission leader</Text>
      <Text>Players checkboxes</Text>
      <Button
        onPress={() => props.navigation.navigate('')}
        title={'Mission Report'}
        disabled
      />
      <Button
        onPress={() => props.navigation.navigate('VotingPreparation')}
        title={'Confirm selection'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default MissionSelectionScreen
