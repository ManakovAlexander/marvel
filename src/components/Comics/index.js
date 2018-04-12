// @flow
import React, { Component } from 'react';
import { Content, Spinner, Text } from 'native-base';
import { connect } from 'react-redux'

import { fetchComics } from '../../actions-creators/comics'
import { comicsSelector } from '../../selectors/comics'
import { Comic } from './Comic'

class ComicsClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Comics'
  })
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchComics()
  }

  render() {
    return (
      <Content>
        {
          this.props.isFetching ? 
            <Spinner color='blue' /> :
            (
              <Content>
                {
                  this.props.comics.map(comic => <Comic comic={comic} key={comic.id} />)
                }
              </Content>
            )
        }
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comics: comicsSelector(state),
    isFetching: state.comics.isFetching,
    error: state.comics.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const characterId = ownProps.navigation.state.params.characterId
  return {
    fetchComics: () => {
      dispatch(fetchComics({ characterId }))
    }
  }
}

export const Comics = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicsClass)