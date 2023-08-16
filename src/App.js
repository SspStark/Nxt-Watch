import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoPage from './components/VideoPage'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isThemeLight: true,
    savedVideos: [],
  }

  toggleTheme = () =>
    this.setState(prevState => ({isThemeLight: !prevState.isThemeLight}))

  toggleSave = video => {
    const {savedVideos} = this.state
    const findVideo = savedVideos.findIndex(each => each.id === video.id)
    if (findVideo === -1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      const filteredVideos = savedVideos.filter(each => each.id !== video.id)
      this.setState({savedVideos: filteredVideos})
    }
  }

  render() {
    const {isThemeLight, savedVideos} = this.state
    document.title = 'Nxt Watch'
    return (
      <NxtWatchContext.Provider
        value={{
          isThemeLight,
          toggleTheme: this.toggleTheme,
          savedVideos,
          toggleSave: this.toggleSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPage} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
