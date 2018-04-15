// @flow
import React, { PureComponent } from 'react'
import { List, ListItem, Text } from 'native-base'

export class Series extends PureComponent {
  render() {
    return (
      <List
        dataArray={this.props.series}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(serie) {
    return (
      <ListItem key={serie.name}>
        <Text>{serie.name}</Text>
      </ListItem>
    )
  }
}