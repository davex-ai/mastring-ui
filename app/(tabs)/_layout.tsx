import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Second IntroScreen"
        options={{
          title: 'Intro',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="heart" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="Shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="cart-outline" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="PageTwo"
        options={{
          title: 'Socials',
          tabBarIcon: ({ color, size }) => <Ionicons size={28} name="person-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
