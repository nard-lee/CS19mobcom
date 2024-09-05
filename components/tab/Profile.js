
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={[styles.scene]}>
      <Text>Profile</Text>
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

export default Profile;

