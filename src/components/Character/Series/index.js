// @flow
import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export const Series = ({ series }) => (
  <List>
    {
      series.map(serie => (
        <ListItem key={serie.name}>
          <Text>{ serie.name }</Text>
        </ListItem>
      ))
    }
  </List>
)