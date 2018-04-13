// @flow
import React, { Component, PureComponent } from 'react';
import { FlatList } from 'react-native';
import { List } from 'native-base';
import { CharacterListItem } from './ListItem';

export class CharactersList extends PureComponent {
  renderRow = (character) => {
    return (
      <CharacterListItem character={character} onPress={this.onRowPress} key={String(character.id)} />
    )
  }

  onRowPress = (id) => {
    return this.props.onPress(id)
  }

  onEndReached = () => {
    return this.props.onEndReached()
  }

  render() {
    return (
      <List
        style={{ backgroundColor: '#fff' }}
        dataArray={this.props.characters}
        renderRow={this.renderRow}
        onEndReached={this.onEndReached}
      />
    )
  }
}