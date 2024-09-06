
import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Link } from '@react-navigation/native';

const Profile = () => {
  return (
    <View style={[styles.scene]}>
      <Text>Profile</Text>
      <Link to={{ screen: 'Login' }}>Login</Link>
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

