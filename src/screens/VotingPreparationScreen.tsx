import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const VotingPreparationScreen = props => {
  return (
    <View>
      <Text>VotingPreparationScreen component</Text>
      <Text>Name</Text>
      <Button
        onPress={() => props.navigation.navigate('Voting')}
        title={'Vote'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default VotingPreparationScreen
