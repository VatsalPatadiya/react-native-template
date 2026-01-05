import {StyleSheet} from 'react-native'

import {moderateScale, scale, verticalScale} from '@/Helpers'
import Fonts from '@/Helpers/Fonts'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: scale(20),
      rowGap: verticalScale(15)
    },
    forgotPasswordStyle: {
      alignSelf: 'flex-end'
    },
    forgotStyle: {
      color: colors.black,
      fontFamily: Fonts.ThemeRegular,
      fontSize: moderateScale(12),
      marginTop: verticalScale(10)
    }
  })
export default myStyles
