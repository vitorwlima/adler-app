import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LinkingConfiguration from './LinkingConfiguration'
import { Phrases } from '../screens/Phrases'
import { Calendar } from '../screens/Calendar'
import { Diary } from '../screens/Diary'
import { Graph } from '../screens/Graph'
import { Settings } from '../screens/Settings'

export default function Navigation () {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function RootNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator () {
  return (
    <BottomTab.Navigator initialRouteName="Diary">
      <BottomTab.Screen
        name="phrases"
        component={Phrases}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon name="book" focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="calendar"
        component={Calendar}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon name="calendar" focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="diary"
        component={Diary}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon name="pencil" focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="graph"
        component={Graph}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon name="percent" focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="settings"
        component={Settings}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon name="gear" focused={focused} />
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon ({ name, focused }: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  focused: boolean
}) {
  const color = focused ? '#3FC2CA' : '#72787E'

  return <FontAwesome size={24} style={{ marginBottom: -3 }} color={color} name={name} />
}
