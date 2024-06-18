import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import NoteScreen from "../screens/NoteScreen";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen" // Defina sua tela inicial aqui
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: "Início",
          tabBarIcon: "home",
        }}
        component={HomeScreen}
      />
      <Tabs.Screen
        name="NoteScreen"
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: "note",
        }}
        component={NoteScreen}
      />
            <Tabs.Screen
        name="LoginScreen"
        options={{
          tabBarLabel: "Login",
          tabBarIcon: "login",
        }}
        component={LoginScreen}
      />
    </Tabs.Navigator>
  );
};
