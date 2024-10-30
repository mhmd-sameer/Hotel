// src/components/HomePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

import Home from './Home';
import Notifications from './Notifications';
import Settings from './Settings';
import StaffProfile from './StaffProfile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Staff Profile and Settings
const StaffProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="StaffProfile" 
      component={StaffProfile} 
      options={{ headerShown: false, title: 'Staff Profile' }} 
    />
    <Stack.Screen 
      name="Settings" 
      component={Settings} 
      options={{ headerShown: false, title: 'Settings' }} 
    />
  </Stack.Navigator>
);

// Main Tab Navigator
const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="bed" color="#FFA500" size={24} />, // Bed icon for Rooms
        }} 
      />
      <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="bell" color="#FFA500" size={24} />, // Bell icon for Services
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={StaffProfileStack} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="user" color="#FFA500" size={24} />, // User icon for Profile
        }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Navigation;
