import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isThemeLight: true, activePage: 'Home'}

  toggleTheme = () =>
    this.setState(prevState => ({isThemeLight: !prevState.isThemeLight}))

  changeActivePage = page => this.setState({activePage: page})

  render() {
    const {isThemeLight, activePage} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isThemeLight,
          toggleTheme: this.toggleTheme,
          activePage,
          changeActivePage: this.changeActivePage,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
