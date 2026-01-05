import {StyleSheet} from 'react-native'

import {scale, verticalScale} from '@/Helpers/Responsive'

import {Theme} from './Colors'

export default StyleSheet.create({
  centerFlex: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  commonPadding: {
    paddingHorizontal: scale(24)
  },
  commonPaddingWithFlex: {
    flex: 1,
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(12)
  },
  flex: {
    backgroundColor: Theme.LightTheme.grayShadeF8,
    flex: 1
  },
  flexGrowOne: {
    flexGrow: 1
  },
  flexOne: {
    flex: 1
  },
  fullWidthHeight: {
    height: '100%',
    width: '100%'
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
