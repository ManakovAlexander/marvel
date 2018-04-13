// @flow
import React, { PureComponent } from 'react';
import { Platform } from 'react-native'
import { Container, Header, Content, Text, Item, Icon, Input, Button, Spinner } from 'native-base';
import { connect } from 'react-redux'

import { CharactersList } from './List'
import { fetchCharacters, clearCharacters } from '../../actions-creators/characters'
import { charactersSelector } from '../../selectors/characters'

class CharactersClass extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Characters'
  })
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onChangeText = (text) => {
    this.props.clearCharacters()
    this.setState({ text })
    this.handleSearch(text)
  }

  onCharactersListPress = (id) => {
    const { navigate } = this.props.navigation;
    navigate('Character', { id })
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.text}
              onChangeText={this.onChangeText}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <CharactersList
            characters={this.props.characters}
            onPress={this.onCharactersListPress}
            onEndReached={this.onEndReached}
          />
          {
            this.props.isFetching ? <Spinner color='blue' /> : null
          }
        </Content>
      </Container>
    )
  }

  handleSearch(nameStartsWith = this.state.text) {
    if (nameStartsWith.length < 3) {
      return
    }
    const offset = this.props.characters.length
    this.props.fetchCharacters({ nameStartsWith, offset })
  }

  onEndReached = () => {
    const characters = this.props.characters
    if (
      this.props.isFetching ||
      !characters ||
      (characters && characters.length === 0) ||
      this.props.canLoadMoreCharacters === false
    ) {
      return
    }
    this.handleSearch()
  }
}

const mapStateToProps = (state, ownProps) => {
  const characters = charactersSelector(state)
  const total = state.characters.total
  return {
    characters,
    total,
    canLoadMoreCharacters: characters && total && characters.length < total,
    isFetching: state.characters.isFetching,
    error: state.characters.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCharacters: ({ nameStartsWith, offset }) => {
      dispatch(fetchCharacters({ nameStartsWith, offset }))
    },
    clearCharacters: () => {
      dispatch(clearCharacters())
    }
  }
}

export const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersClass)