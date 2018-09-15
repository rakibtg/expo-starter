import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Font } from 'expo'
import RootStack from './screens/AllScreens'

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'noto-serif-bold': require('./assets/fonts/NotoSerif-Bold.ttf'),
      'noto-serif-bold-italic': require('./assets/fonts/NotoSerif-BoldItalic.ttf'),
      'noto-serif-italic': require('./assets/fonts/NotoSerif-Italic.ttf'),
      'noto-serif-regular': require('./assets/fonts/NotoSerif-Regular.ttf')
    });
    this.setState({fontLoaded: true})
  }

  render() {
    if(this.state.fontLoaded) {
      return <RootStack/>
    } else {
      return <View style={styles.container}>
        <Text>Please wait</Text>
      </View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
