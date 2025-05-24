import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { COLORS } from '../constants/theme'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: "black",
            borderTopWidth: 0,
            height: 80,
            paddingBottom: 8,
        },
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Feed',
            tabBarIcon: ({ color,size }) => (
                <Ionicons name="home" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="bookmarks"
            options={{
            title: 'Bookmarks',
            tabBarIcon: ({ color, size }) => (
                 <Ionicons name="bookmark" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
            title: 'Create',
            tabBarIcon: ({ color,size }) => (
                 <Ionicons name="add-circle" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{
            title: 'Notifications',
            tabBarIcon: ({ color,size }) => (
                 <Ionicons name="heart" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
                 <Ionicons name="person-circle" color={color} size={size} />
            ),
            }}
        />
    </Tabs>
  )
}