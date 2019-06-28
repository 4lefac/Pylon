import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home } from './app/screens';

const AppNavigator = createStackNavigator({
  Home: Home,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: { header: null }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
