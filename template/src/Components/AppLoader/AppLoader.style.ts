import {StyleSheet} from 'react-native'

import {moderateScale} from '@/Helpers/Responsive'
import {CommonStyle, Opacity} from '@/Theme'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      ...CommonStyle.centerItem,
      ...CommonStyle.fullWidthHeight,
      backgroundColor: `${colors.black}${Opacity[50]}`
    },
    innerContainer: {
      height: moderateScale(100),
      width: moderateScale(100),
      ...CommonStyle.centerItem,
      backgroundColor: colors.white,
      borderRadius: moderateScale(20),
      elevation: 7,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65
    }
  })
export default myStyles
