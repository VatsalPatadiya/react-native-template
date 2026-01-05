import {StyleSheet} from 'react-native'

import Fonts from '@/Helpers/Fonts'
import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    backButtonContainer: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 100,
      height: verticalScale(36),
      justifyContent: 'center',
      marginRight: scale(10),
      width: verticalScale(36)
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: verticalScale(15)
    },
    mainTitleStyle: {
      color: colors.black,
      fontFamily: Fonts.ThemeBold,
      fontSize: moderateScale(16),
      textAlign: 'center'
    },
    shadow: {
      backgroundColor: colors.white,
      elevation: 3,
      shadowColor: colors.grayShade91,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    }
  })
export default myStyles
