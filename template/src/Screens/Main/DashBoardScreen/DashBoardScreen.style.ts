import {StyleSheet} from 'react-native'

import {moderateScale, verticalScale} from '@/Helpers'
import Fonts from '@/Helpers/Fonts'
import type {ColorType} from '@/Theme/Colors'

const myStyles = (colors: ColorType) =>
  StyleSheet.create({
    avatar: {
      borderRadius: moderateScale(50),
      height: verticalScale(100),
      width: verticalScale(100)
    },
    avatarInitials: {
      color: colors.white,
      fontFamily: Fonts.ThemeBold,
      fontSize: moderateScale(40)
    },
    avatarPlaceholder: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: moderateScale(50),
      height: verticalScale(100),
      justifyContent: 'center',
      width: verticalScale(100)
    },
    container: {},
    email: {
      color: colors.white,
      fontFamily: Fonts.ThemeRegular,
      fontSize: moderateScale(16),
      marginTop: verticalScale(4)
    },

    name: {
      color: colors.black,
      fontFamily: Fonts.ThemeBold,
      fontSize: moderateScale(24),
      marginTop: verticalScale(16)
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: verticalScale(40)
    }
  })
export default myStyles
