import React from 'react';
import { Asset, AppLoading } from 'expo'
import { Container } from 'native-base';
import { ReduxProvider } from './ReduxProvider'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
    <Container>
      <ReduxProvider />
    </Container>
    );
  }

  async _cacheResourcesAsync() {
    return Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
}
