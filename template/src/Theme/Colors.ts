const DefaultTheme = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent'
}

export const LightTheme = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  primary: '#123456',
  grayShadeE3: '#E3E4E6',
  grayShade91: '#919EAB'
}

export const DarkTheme = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  primary: '#123456',
  grayShadeE3: '#E3E4E6',
  grayShade91: '#919EAB'
}

export type ColorType = {
  white?: string
  black?: string
  transparent?: string
  primary?: string
  grayShadeE3?: string
  grayShade91?: string
}

export const Theme = {
  DefaultTheme,
  DarkTheme,
  LightTheme
}
