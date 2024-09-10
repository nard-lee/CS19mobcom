import React, { useEffect, useState, useContext } from "react";
import BottomTabView from "./components/tab/BottomTabView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Setting from "./components/tab/user/Setting";
import About from "./components/tab/user/About";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const { theme } = useContext(ThemeContext);
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "Aclonica-Regular": require("./assets/fonts/Aclonica-Regular.ttf"),
      "Monoton-Regular": require("./assets/fonts/Matemasie-Regular.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) return;

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              borderWidth: 0,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={BottomTabView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitle: "Signup",
              headerShown: false,
            }}
          />
          <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
