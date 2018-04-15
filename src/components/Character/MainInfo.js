// @flow

import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { Thumbnail, H3, Text } from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';

export class MainInfo extends PureComponent {
  render() {
    const {character} = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8 }}>
        <Thumbnail source={{ uri: thumbnailUri(character) }} style={{ width: 150, height: 150, borderRadius: 75 }} />
        <H3 style={{ padding: 8, paddingTop: 16 }}>{ character.name }</H3>
        <Text style={{ padding: 8 }}>
          { character.description }
        </Text>
      </View>
    )
  }
}

const thumbnailUri = (character) => `${character.thumbnail.path}.${character.thumbnail.extension}`