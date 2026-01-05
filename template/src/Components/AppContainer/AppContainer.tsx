import React, {memo} from 'react'
import {Platform, SafeAreaView, StatusBar, View} from 'react-native'
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'

import useColor from '@/Hooks/useColor'
import {CommonStyle} from '@/Theme'

type AppContainerProps = {
  isTopSafeArea?: boolean
  isBottomSafeArea?: boolean
  children: React.ReactNode
  isTranscalent?: boolean
  isStatusBarHidden?: boolean
  statusBarColor?: any
}

export default memo((props: AppContainerProps) => {
  const {
    isTopSafeArea = true,
    isBottomSafeArea = true,
    children,
    isTranscalent = false,
    isStatusBarHidden = false,
    statusBarColor
  } = props

  const TopComponent = isTopSafeArea
    ? Platform.OS === 'ios'
      ? SafeAreaView
      : RNSafeAreaView
    : View
  const BottomComponent = isBottomSafeArea
    ? Platform.OS === 'ios'
      ? SafeAreaView
      : RNSafeAreaView
    : View

  const colors = useColor()

  return (
    <View style={CommonStyle.flex}>
      <TopComponent style={{backgroundColor: statusBarColor ?? colors.grayShadeF8}} />
      <StatusBar
        barStyle={'dark-content'}
        translucent={isTranscalent}
        backgroundColor={(statusBarColor as any) ?? colors.grayShadeF8}
        hidden={isStatusBarHidden}
      />
      <View style={CommonStyle.flex}>{children}</View>
      <BottomComponent />
    </View>
  )
})
