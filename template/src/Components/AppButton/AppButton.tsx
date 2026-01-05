import {memo} from 'react'
import type {StyleProp, TextStyle, ViewStyle} from 'react-native'
import {Text, TouchableOpacity} from 'react-native'

import useColor from '@/Hooks/useColor'

import myStyles from './AppButton.style'

type AppButtonProps = {
  title: string
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  isDisabled?: boolean
  onPress: () => void
  activeOpacity?: number
  buttonContainerColor?: any
  buttonTextColor?: any
  leftIcon?: any
  height?: any
  width?: any
  rightIcon?: any
  isLineButton?: boolean
}

export default memo((props: AppButtonProps) => {
  const colors = useColor()
  const {
    title,
    containerStyle,
    textStyle,
    isDisabled = false,
    onPress,
    activeOpacity = 1,
    buttonContainerColor,
    buttonTextColor = colors.white,
    isLineButton
  } = props

  const styles = myStyles(colors)

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: buttonContainerColor ?? colors.primary},
        isDisabled && styles.disableButtonBackground,
        isLineButton && styles.lineButton,
        containerStyle
      ]}
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {title !== '' && (
        <Text
          style={[
            styles.textStyle,
            {
              color: isDisabled ? colors.grayShadeE3 : buttonTextColor
            },
            isLineButton && styles.lineButtonText,
            textStyle
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
})
