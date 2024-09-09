import React, { useEffect, useState } from "react";
import BottomTabView from "./components/tab/BottomTabView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Setting from "./components/tab/user/Setting";
import About from "./components/tab/user/About";
import { ThemeProvider } from "./context/ThemeContext";
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if(!fontLoaded) return;

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
              headerTitle: "",
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
