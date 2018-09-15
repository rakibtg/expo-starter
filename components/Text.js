import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Colors from '../constants/Colors'

const fontSizes = {
  xs  : 11,
  sm  : 12,
  md  : 14,
  lg  : 16,
  sl  : 20,
  xl  : 24
}

const fonts = {
  'ns-b'  : 'noto-serif-bold',
  'ns-bi' : 'noto-serif-bold-italic',
  'ns-i'  : 'noto-serif-italic',
  'ns-r'  : 'noto-serif-regular'
}

export default class MIText extends PureComponent {

  render() {
    const {bold, italic, size, color, height, 
      padding, paddingV, paddingH, style,
      center, left, right } = this.props

    const wrapperStyle = {
      width: (center || left || right) ? '100%' : null
    }

    const usersStyle = style ? style : {}

    const styles = {
      fontSize            : size      ? fontSizes[size] : fontSizes.md,
      color               : color     ? Colors[color] : Colors.black,
      lineHeight          : height    ? height : null,
      padding             : padding   ? padding : null,
      paddingVertical     : paddingV  ? paddingV : null,
      paddingHorizontal   : paddingH  ? paddingH : null,
      fontFamily          : (bold && italic) ? fonts['ns-bi'] : italic ? fonts['ns-i'] : bold ? fonts['ns-b'] : fonts['ns-r'],
      textAlign           : center ? 'center' : left ? 'left' : right ? 'right' : 'left'
    }

    return <View style={wrapperStyle}>
      <Text style={{...styles, ...usersStyle}}>{this.props.children}</Text>
    </View>
  }
}