import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'

import {
  GamingPage,
  GamingHeadingCard,
  GamingIconBg,
  GamingHeading,
  LoaderContainer,
  GamesContainer,
  GameItem,
  GameLink,
  GameImage,
  Title,
  ViewCount,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamesList: [],
  }

  componentDidMount() {
    this.getGamesList()
  }

  getGamesList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamesList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retry = () => this.getGamesList()

  renderGamesList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {gamesList} = this.state

        return (
          <>
            <GamingHeadingCard theme={isThemeLight}>
              <GamingIconBg theme={isThemeLight}>
                <SiYoutubegaming color="#ff0000" size={26} />
              </GamingIconBg>
              <GamingHeading theme={isThemeLight}>Gaming</GamingHeading>
            </GamingHeadingCard>
            <GamesContainer>
              {gamesList.map(eachGame => {
                const {id, title, thumbnailUrl, viewCount} = eachGame

                return (
                  <GameItem key={id}>
                    <GameLink to={`/videos/${id}`}>
                      <GameImage src={thumbnailUrl} alt="video thumbnail" />
                      <Title theme={isThemeLight}>{title}</Title>

                      <ViewCount>{viewCount} Watching Worldwide</ViewCount>
                    </GameLink>
                  </GameItem>
                )
              })}
            </GamesContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView retry={this.retry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamesView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value

          return (
            <GamingPage data-testid="gaming" theme={isThemeLight}>
              {this.renderGamesView()}
            </GamingPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
