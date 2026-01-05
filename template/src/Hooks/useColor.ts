import {useContext} from 'react'

import type {ColorType} from '@/Theme/Colors'
import {Theme} from '@/Theme/Colors'
import {ThemeContext} from '@/Theme/ThemeProvider/ThemeContext'
const useColor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const context = useContext(ThemeContext)
  // const selectedTheme = context.theme === 0 ? 'DefaultTheme' : 'DarkTheme'
  const selectedTheme = 'LightTheme'
  const color: ColorType = Theme[selectedTheme]
  return color
}

export default useColor
