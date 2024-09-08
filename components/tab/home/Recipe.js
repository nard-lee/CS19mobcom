import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Recipe = () => {
  return (
    <View style={[styles.scene]}>
      <Text>Recipes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
	backgroundColor: "#fff",
    flex: 1,
	backgroundColor: 'red'
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	backgroundColor: "#0088cc"
  },
  tabBar: {
    flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
    backgroundColor: '#0077b3',
	position: 'absolute',
	bottom: 0,
	zIndex: 1,
	width: '100%'
  },
  tabItem: {

    padding: 16,
	position: 'relative'
  },
});

export default Recipe;