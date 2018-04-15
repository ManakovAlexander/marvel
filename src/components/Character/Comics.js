// @flow
import React, { PureComponent } from 'react'
import { List, ListItem, Text } from 'native-base'

export class Comics extends PureComponent {
  render() {
    return (
      <List
        dataArray={this.props.comics}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(comic) {
    return (
      <ListItem key={comic.name}>
        <Text>{comic.name}</Text>
      </ListItem>
    )
  }
}