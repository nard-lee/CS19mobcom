import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { ThemeContext } from '../../../context/ThemeContext';

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.scene, { backgroundColor: theme.colors.background }]}>
            <Feather name="info" size={24} color="black" />
            <Text>About</Text>
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

export default About