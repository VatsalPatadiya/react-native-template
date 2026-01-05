import {StyleSheet} from 'react-native'

import Fonts from '@/Helpers/Fonts'
import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.grayShadeED,
      borderRadius: moderateScale(10),
      borderWidth: 0.5,
      flexDirection: 'row',
      height: verticalScale(42),
      paddingHorizontal: scale(10),
      width: '100%'
    },
    leftImageContainer: {
      height: verticalScale(16),
      width: verticalScale(16)
    },
    rightImageContainer: {
      height: verticalScale(16),
      position: 'absolute',
      right: scale(15),
      width: verticalScale(16)
    },
    textinputStyle: {
      color: colors.black,
      fontFamily: Fonts.ThemeRegular,
      fontSize: moderateScale(12),
      textAlignVertical: 'top'
    }
  })
export default myStyles
