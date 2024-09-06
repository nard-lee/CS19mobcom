import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const LandPage = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.popupContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>
            <AntDesign name="close" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>Welcome to </Text>
        <Text style={{ fontSize: 30 }}>
          Healthy Recipe
        </Text>
        <Text style={{ fontSize: 20 }}>Sign up for Updates or Login</Text>
        <Pressable style={styles.button}>
          <Link to={{ screen: 'Login' }}>Login</Link>
        </Pressable>
        <Pressable style={styles.button}>
          <Link to={{ screen: 'Signup' }}>Signup</Link>
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  popupContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center' 
  },
});


export default LandPage;