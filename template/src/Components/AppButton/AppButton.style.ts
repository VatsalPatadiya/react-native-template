import {StyleSheet} from 'react-native'

import Fonts from '@/Helpers/Fonts'
import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: moderateScale(8),
      flexDirection: 'row',
      height: verticalScale(40),
      justifyContent: 'center',
      paddingHorizontal: scale(20)
    },
    disableButtonBackground: {
      backgroundColor: colors.grayShade7E
    },
    leftButtonContainer: {
      // marginRight: scale(8)
    },
    leftImageContainer: {
      alignItems: 'center',
      height: verticalScale(20),
      justifyContent: 'center',
      width: verticalScale(20)
    },
    leftImageStyle: {
      height: '90%',
      width: '90%'
    },
    lineButton: {
      backgroundColor: colors.transparent,
      borderColor: colors.grayShade5D,
      borderWidth: 1
    },
    lineButtonText: {
      color: colors.textPrimary,
      fontFamily: Fonts.ThemeBold
    },
    rightButtonContainer: {
      marginLeft: scale(5)
    },
    textStyle: {
      color: colors.white,
      fontFamily: Fonts.ThemeSemiBold,
      fontSize: moderateScale(13)
    },
    whiteTintColor: {
      tintColor: colors.white
    }
  })
export default myStyles
