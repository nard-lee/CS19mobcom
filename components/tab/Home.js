
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { ThemeContext } from '../../context/ThemeContext';


const Home = () => {

  const images = [
    { id: 1, image: require('../../assets/hfood.jpeg') },
    { id: 2, image: require('../../assets/hfood.jpeg') },
    { id: 3, image: require('../../assets/hfood.jpeg') },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.scene, { backgroundColor: theme.colors.background }]}>

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