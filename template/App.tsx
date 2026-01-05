import React from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {RootSiblingParent} from 'react-native-root-siblings'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {AppLoader, StartComponent} from '@/Components'
import {CommonStyle} from '@/Theme'

export default () => {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <GestureHandlerRootView style={CommonStyle.flex}>
          <StartComponent />
          <AppLoader />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </RootSiblingParent>
  )
}
