import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export class tab2First extends Component {
  render() {
    console.log(this.props)
    return <TouchableOpacity onPress={()=> this.props.navigator.push({screen: 'navigation.FirstTabScreen'})}><View><Text>Passou</Text></View></TouchableOpacity>
      }
}