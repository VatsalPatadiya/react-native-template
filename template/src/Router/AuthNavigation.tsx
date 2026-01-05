import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import {Constant} from '@/Helpers'
import Screens from '@/Helpers/Screens'
import {LoginScreen} from '@/Screens'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      screenOptions={Constant.navigationOptions}
      initialRouteName={Screens.LoginScreen}
    >
      <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  )
}
