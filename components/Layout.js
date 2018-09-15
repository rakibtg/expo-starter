import React from 'react'
import { SafeAreaView } from 'react-native'

export default class ParentScreen extends React.Component {
  render() {
    const {style} = this.props
    const layoutStyle = {
      flex: 1
    }
    return <SafeAreaView style={[layoutStyle, style]}>{this.props.children}</SafeAreaView>
  }

}