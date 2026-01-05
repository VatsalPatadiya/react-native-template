import React, {useCallback} from 'react'
import {View} from 'react-native'

import {AppButton, AppContainer, AppHeader} from '@/Components'
import Screens from '@/Helpers/Screens'
import {resetStack} from '@/Router/Rootnavigation'
import {CommonStyle} from '@/Theme'

export default () => {
  const handleLogout = useCallback(() => {
    resetStack([{name: Screens.AuthStack}])
  }, [])
  return (
    <AppContainer>
      <View style={CommonStyle.commonPaddingWithFlex}>
        <AppHeader title="Home" />
        <AppButton title="Log Out" onPress={handleLogout} />
      </View>
    </AppContainer>
  )
}
