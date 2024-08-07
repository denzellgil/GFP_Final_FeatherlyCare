import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
  <>
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="faq"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerShown: false
        }}
      />
        <Stack.Screen
        name="checklist"
        options={{
          headerShown: false
        }}
      />
    </Stack>

    <StatusBar backgroundColor="#161622"
    style="light"
    />
  </>
  )
}

export default AuthLayout