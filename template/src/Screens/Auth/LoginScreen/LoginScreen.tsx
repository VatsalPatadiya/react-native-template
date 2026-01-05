import {memo} from 'react'
import {View} from 'react-native'

import {AppButton, AppContainer, AppHeader} from '@/Components'
import {CommonStyle} from '@/Theme'

import useLoginScreen from './hooks/useLoginScreen'

export default memo(() => {
  const {onSubmit} = useLoginScreen()

  return (
    <AppContainer>
      <View style={CommonStyle.commonPaddingWithFlex}>
        <AppHeader title="Login" />

        <AppButton title="Log in" onPress={onSubmit} />
      </View>
    </AppContainer>
  )
})
