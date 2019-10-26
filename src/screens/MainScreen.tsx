import { Button } from 'common-components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainScreen = props => {
  return (
    <View>
      <Text>MainScreen component</Text>
      <Text>Mission number</Text>
      <Text>Leader name</Text>
      <Text>Score</Text>

      <Button
        onPress={() => props.navigation.navigate('')}
        title={'Mission Report'}
        disabled
      />
      <Button
        onPress={() => props.navigation.navigate('MissionSelection')}
        title={'Begin mission'}
      />
    </View>
  )
}

const st = StyleSheet.create({
  container: {},
})

export default MainScreen
