import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
	const [showIntro, setShowIntro] = useState(true);
	const introOpacity = new Animated.Value(0);
  
	useEffect(() => {
	  Animated.timing(introOpacity, {
		toValue: 1,
		duration: 5000,
		useNativeDriver: true,
	  }).start(() => {
		setShowIntro(false); 
	  });
	}, []);
  
	return (
	  <View className="flex flex-1"> 
		{showIntro && (
		  <Animated.View 
			className="flex flex-1 justify-center items-center bg-gray-200" 
			style={{ opacity: introOpacity }}
		  >
			<Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to My App!</Text>
			<Button title="Get Started" onPress={() => setShowIntro(false)} />
		  </Animated.View>
		)}
  
		{!showIntro && (
		  <View className="flex flex-1 justify-center items-center"> 
			<Text className="text-xl text-gray-700">This is the main content.</Text>
		  </View>
		)}
	  </View>
	);
}

