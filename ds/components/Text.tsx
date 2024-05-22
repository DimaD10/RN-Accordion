import React from 'react'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  TextStyle
} from 'react-native'
import { SchemeColors, colors } from '../colors'

export type Typeface = 'H4' | 'P3' | 'P3-Medium'

type TextProps = {
  typeface?: Typeface
  color?: keyof SchemeColors['text']
  style?: StyleProp<TextStyle>
} & RNTextProps

export const Text: React.FC<TextProps> = ({ typeface, color, style, children }) => {
  const textStyles = StyleSheet.flatten([
    styles.base,
    typeface ? styles[typeface] : undefined,
    { color: color ? colors.text[color] : colors.text.primary },
    style
  ])
  return <RNText style={textStyles}>{children}</RNText>
}

const styles = StyleSheet.create({
  base: {},
  H4: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24
  },
  P3: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#c2c3c7',
    lineHeight: 18
  },
  'P3-Medium': {
    fontSize: 12,
    fontWeight: 'medium'
  }
})

export default Text
