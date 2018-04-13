// @flow
import React, { PureComponent } from 'react';
import { ListItem, Left, Body, Thumbnail, Text } from 'native-base';

export class CharacterListItem extends PureComponent {
  onPress = () => {
    return this.props.onPress(String(this.props.character.id))
  }

  render() {
    const uri = thumbnailUri(this.props.character)
    return (
      <ListItem avatar onPress={this.onPress} button>
      <Left>
        <Thumbnail source={{ uri }} />
      </Left>
      <Body>
        <Text numberOfLines={1} ellipsizeMode="tail">{ this.props.character.name }</Text>
        <Text note numberOfLines={1} ellipsizeMode="tail">{ this.props.character.description || ' ' }</Text>
      </Body>
    </ListItem>
    )
  }
}

const thumbnailUri = (character) => `${character.thumbnail.path}.${character.thumbnail.extension}`