import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isThemeLight: true}

  toggleTheme = () =>
    this.setState(prevState => ({isThemeLight: !prevState.isThemeLight}))

  render() {
    const {isThemeLight} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isThemeLight,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
