import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import {Constant} from '@/Helpers'
import Screens from '@/Helpers/Screens'

import AuthNavigation from './AuthNavigation'
import HomeNavigation from './HomeNavigation'
import {navigationRef} from './Rootnavigation'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          ...Constant.navigationOptions
        }}
      >
        <Stack.Screen name={Screens.AuthStack} component={AuthNavigation} />
        <Stack.Screen name={Screens.MainStack} component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
