// @flow
import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Text, Item, Icon, Input, Button, Spinner } from 'native-base';
import { connect } from 'react-redux'

import { CharactersList } from './List'
import { fetchCharacters, clearCharacters } from '../../actions-creators/characters'
import { charactersSelector } from '../../selectors/characters'

class CharactersClass extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.text}
              onChangeText={text => {
                this.props.clearCharacters()
                this.setState({ text })
                this.handleSearch(text)
              }}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <CharactersList
          characters={this.props.characters}
          onPress={id => navigate('Character', { id }) }
          onEndReached={() => this.onEndReached()}
        />
        {
          this.props.isFetching ? <Spinner color='blue' /> : null
        }
      </View>
    )
  }

  handleSearch(nameStartsWith = this.state.text) {
    if (nameStartsWith.length < 3) {
      return
    }
    const offset = this.props.characters.length
    this.props.fetchCharacters({ nameStartsWith, offset })
  }

  onEndReached() {
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