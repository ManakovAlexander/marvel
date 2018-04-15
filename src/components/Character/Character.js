// @flow
import React, { PureComponent } from 'react'
import { Content, Text, Tab, Tabs, Button } from 'native-base'

import { connect } from 'react-redux'

import { Comics } from './Comics'
import { Events } from './Events'
import { MainInfo } from './MainInfo'
import { Series } from './Series'

import { characterSelector } from '../../selectors/characters'

class CharacterClass extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Character'
  })
  constructor(props) {
    super(props)
  }

  render() {
    const { character } = this.props
    return (
      <Content>
        <MainInfo character={this.props.character} />
        <Button block onPress={this.navigateToComics}>
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

  navigateToComics = () => {
    const { character } = this.props
    this.props.navigation.navigate('Comics', { characterId: character.id })
  }
}

const mapStateToProps = (state, ownProps) => {
  const characterId = ownProps.navigation.state.params.id
  return {
    character: characterSelector(state, characterId)
  }
}

export const Character = connect(
  mapStateToProps
)(CharacterClass)