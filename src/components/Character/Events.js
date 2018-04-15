// @flow
import React, { PureComponent } from 'react'
import { List, ListItem, Text } from 'native-base'

export class Events extends PureComponent {
  render() {
    return (
      <List
        dataArray={this.props.events}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(event) {
    return (
      <ListItem key={event.name}>
        <Text>{event.name}</Text>
      </ListItem>
    )
  }
}