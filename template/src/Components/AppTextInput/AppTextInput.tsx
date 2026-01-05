import type {ForwardedRef} from 'react'
import {forwardRef, memo} from 'react'
import type {ImageStyle, ReturnKeyTypeOptions, StyleProp, TextStyle, ViewStyle} from 'react-native'
import {TextInput, View} from 'react-native'
import {SvgFromXml} from 'react-native-svg'

import {verticalScale} from '@/Helpers/Responsive'
import useColor from '@/Hooks/useColor'

import myStyles from './AppTextInput.style'

type AppTextInputProps = {
  value: string
  onChange?: (text: any) => void
  containerStyle?: StyleProp<ViewStyle>
  placeholder?: string
  placeholderTextColor?: string
  textinputStyle?: StyleProp<TextStyle>
  isEditable?: boolean
  leftImage?: any
  rightImage?: any
  leftImageContainerStyle?: StyleProp<ViewStyle>
  leftImageStyle?: StyleProp<ImageStyle>
  rightImageContainerStyle?: StyleProp<ViewStyle>
  rightImageStyle?: StyleProp<ImageStyle>
  returnKeyType?: ReturnKeyTypeOptions
  isMultiLine?: boolean
}

const AppTextInput = forwardRef((props: AppTextInputProps, ref: ForwardedRef<TextInput>) => {
  const {
    value,
    onChange,
    containerStyle,
    placeholder,
    placeholderTextColor,
    textinputStyle,
    isEditable = true,
    leftImage,
    rightImage,
    leftImageContainerStyle,
    rightImageContainerStyle,
    returnKeyType,
    isMultiLine = false
  } = props
  const colors = useColor()
  const styles = myStyles(colors)

  return (
    <View style={[styles.container, containerStyle]}>
      {leftImage && (
        <View style={[styles.leftImageContainer, leftImageContainerStyle]}>
          <SvgFromXml xml={leftImage} height={verticalScale(16)} width={verticalScale(16)} />
        </View>
      )}
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? colors.textSecondary}
        style={[styles.textinputStyle, textinputStyle]}
        editable={isEditable}
        returnKeyType={returnKeyType}
        multiline={isMultiLine}
      />
      {rightImage && (
        <View style={[styles.rightImageContainer, rightImageContainerStyle]}>
          <SvgFromXml xml={rightImage} height={verticalScale(16)} width={verticalScale(16)} />
        </View>
      )}
    </View>
  )
})

export default memo(AppTextInput)
