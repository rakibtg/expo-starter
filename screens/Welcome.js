import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../components/Text'
import Layout from '../components/Layout'

export default class Welcome extends React.Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Text inline>Hello</Text>
      </Layout>
    )
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
