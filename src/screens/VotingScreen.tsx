import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const VotingScreen = props => {
  return (
    <View>
      <Text>VotingScreen component</Text>
      <Button
        onPress={() => props.navigation.navigate('Main')}
        title={'Continue'}
      />
      <Button
        onPress={() => props.navigation.navigate('')}
        title={'Win'}
        disabled
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default VotingScreen
