// @flow
import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export const Comics = ({ comics }) => (
  <List>
    {
      comics.map(comic => (
        <ListItem key={comic.name}>
          <Text>{ comic.name }</Text>
        </ListItem>
      ))
    }
  </List>
)