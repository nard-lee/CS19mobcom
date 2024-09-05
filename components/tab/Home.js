
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Home = () => {
  return (
    <View style={[styles.scene]}>
      <Feather name="home" size={24} color="black" />
      <Text style={{ fontSize: 10 }}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  }
});

export default Home;