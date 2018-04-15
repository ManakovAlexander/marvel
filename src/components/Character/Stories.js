// @flow
import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export class Stories extends PureComponent {
  render() {
    return (
      <List
        dataArray={this.props.stories}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(story) {
    return (
      <ListItem key={story.name}>
        <Text>{story.name}</Text>
      </ListItem>
    )
  }
}