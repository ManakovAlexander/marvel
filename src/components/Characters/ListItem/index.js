// @flow
import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export const CharacterListItem = ({ character, onPress }) => {
  const uri = thumbnailUri(character)
  return (
    <ListItem avatar onPress={() => onPress(String(character.id))} >
      <Left>
        <Thumbnail source={{ uri }} />
      </Left>
      <Body>
        <Text numberOfLines={1} ellipsizeMode="tail">{ character.name }</Text>
        <Text note numberOfLines={1} ellipsizeMode="tail">{ character.description || ' ' }</Text>
      </Body>
    </ListItem>
  )
}

const thumbnailUri = (character) => `${character.thumbnail.path}.${character.thumbnail.extension}`