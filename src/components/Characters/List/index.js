// @flow
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { List } from 'native-base';
import { CharacterListItem } from '../ListItem';

export const CharactersList = ({ characters, onPress, onEndReached }) => (
  <List
    style={{ backgroundColor: '#fff' }}
    dataArray={characters}
    renderRow={character => <CharacterListItem character={character} onPress={id => onPress(id)} key={String(character.id)} />}
    onEndReached={() => onEndReached()}
  />
)