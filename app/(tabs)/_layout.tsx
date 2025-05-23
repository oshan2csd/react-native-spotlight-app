import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { COLORS } from '../constants/theme'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Feed',
            tabBarIcon: ({ color,size }) => (
                <Ionicons name="home" color={COLORS.primary} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="bookmarks"
            options={{
            title: 'Bookmarks',
            tabBarIcon: ({ color, size }) => (
                 <Ionicons name="bookmark" color={COLORS.primary} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
            title: 'Create',
            tabBarIcon: ({ color,size }) => (
                 <Ionicons name="add-circle" color={COLORS.primary} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{
            title: 'Notifications',
            tabBarIcon: ({ color,size }) => (
                 <Ionicons name="heart" color={COLORS.primary} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
                 <Ionicons name="person-circle" color={COLORS.primary} size={size} />
            ),
            }}
        />
    </Tabs>
  )
}