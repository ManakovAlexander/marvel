// @flow
import React, { Component } from 'react'
import { Content, Text, Thumbnail, Tab, Tabs, H3, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux'

import { Comics } from './Comics'
import { Events } from './Events'
import { Series } from './Series'

import { characterSelector } from '../../selectors/characters'

class CharacterClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Character'
  })
  constructor(props) {
    super(props)
  }

  render() {
    const { character } = this.props
    const { navigate } = this.props.navigation
    return (
      <Content>
        <Grid style={{ padding: 8 }}>
          <Col style={{ width: 100 }}>
            <Thumbnail square source={{ uri: thumbnailUri(character) }} style={{ width: 100, height: 100 }}/>
          </Col>
          <Col style={{ paddingLeft: 8 }}>
            <H3>{ character.name }</H3>
          </Col>
        </Grid>
        <Text style={{ padding: 8 }}>
          { character.description }
        </Text>
        <Button block onPress={() => navigate('Comics', { characterId: character.id })}>
          <Text>Comics</Text>
        </Button>
        <Tabs initialPage={0}>
          <Tab heading="Comics">
            <Comics comics={character.comics.items} />
          </Tab>
          <Tab heading="Events">
            <Comics comics={character.events.items} />
          </Tab>
          <Tab heading="Series">
            <Comics comics={character.series.items} />
          </Tab>
          <Tab heading="Stories">
            <Comics comics={character.stories.items} />
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

const thumbnailUri = (character) => `${character.thumbnail.path}.${character.thumbnail.extension}`

const mapStateToProps = (state, ownProps) => {
  const characterId = ownProps.navigation.state.params.id
  return {
    character: characterSelector(state, characterId)
  }
}

export const Character = connect(
  mapStateToProps
)(CharacterClass)