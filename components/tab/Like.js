import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const Like = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.scene, { backgroundColor: theme.colors.background }]}>
      <Text>Like</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff",
    }
  });

export default Like