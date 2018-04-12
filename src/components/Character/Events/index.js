// @flow
import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export const Events = ({ events }) => (
  <List>
    {
      events.map(event => (
        <ListItem key={event.name}>
          <Text>{ event.name }</Text>
        </ListItem>
      ))
    }
  </List>
)