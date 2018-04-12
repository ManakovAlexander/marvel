// @flow
import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export const Stories = ({ stories }) => (
  <List>
    {
      stories.map(story => (
        <ListItem key={story.name}>
          <Text>{ story.name }</Text>
        </ListItem>
      ))
    }
  </List>
)