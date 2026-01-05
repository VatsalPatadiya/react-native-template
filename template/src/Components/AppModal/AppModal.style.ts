import {StyleSheet} from 'react-native'

import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    innerContainer: {
      backgroundColor: colors.white,
      borderTopLeftRadius: moderateScale(14),
      borderTopRightRadius: moderateScale(14),
      paddingVertical: verticalScale(15),
      width: '100%'
    },
    modelContainer: {
      justifyContent: 'flex-end',
      margin: 0
    },
    notchStyle: {
      alignSelf: 'center',
      backgroundColor: colors.grayShadeF8,
      borderRadius: moderateScale(4),
      height: verticalScale(4),
      marginBottom: verticalScale(6),
      width: scale(71)
    }
  })

export default myStyles
