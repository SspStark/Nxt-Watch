import {Component} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {HomePage} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value

          return (
            <HomePage>
              <h1>SSP</h1>
            </HomePage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
