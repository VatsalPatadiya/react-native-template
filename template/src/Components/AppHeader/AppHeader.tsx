import {memo} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {SvgFromXml} from 'react-native-svg'

import {SVGByteCode, verticalScale} from '@/Helpers'
import {GoBack} from '@/Helpers/GlobalActions'
import useColor from '@/Hooks/useColor'

import myStyles from './AppHeader.style'

type AppHeaderProps = {
  title: string
  isBackIconVisible?: boolean
  onPressLeftImage?: any
}

export default memo((props: AppHeaderProps) => {
  const {title, isBackIconVisible, onPressLeftImage = GoBack} = props

  const colors = useColor()
  const styles = myStyles(colors)

  return (
    <View style={styles.container}>
      {isBackIconVisible && (
        <TouchableOpacity
          style={[styles.backButtonContainer, styles.shadow]}
          onPress={onPressLeftImage}
        >
          <SvgFromXml xml={SVGByteCode.back} height={verticalScale(18)} width={verticalScale(18)} />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.mainTitleStyle}>{title}</Text>}
    </View>
  )
})
