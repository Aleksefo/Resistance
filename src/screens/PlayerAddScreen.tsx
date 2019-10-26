import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PlayerAddScreen = props => {
  return (
    <View>
      <Text>PlayerAddScreen component</Text>
      <Text>Description</Text>
      <Text>Text input</Text>
      <Button
        onPress={() => props.navigation.navigate(' ')}
        title={'Reveal identity'}
        disabled
      />
      <Button
        onPress={() => props.navigation.navigate('Roster')}
        title={'Save'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default PlayerAddScreen
