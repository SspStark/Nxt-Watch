import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'
import TrendingVideos from '../TrendingVideos'

import {
  TrendingPage,
  TrendingHeadingCard,
  TrendingIconBg,
  TrendingHeading,
  LoaderContainer,
  VideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retry = () => this.getTrendingVideos()

  renderTrendingVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {trendingVideos} = this.state

        return (
          <>
            <TrendingHeadingCard theme={isThemeLight}>
              <TrendingIconBg theme={isThemeLight}>
                <HiFire color="#ff0000" size={26} />
              </TrendingIconBg>
              <TrendingHeading theme={isThemeLight}>Trending</TrendingHeading>
            </TrendingHeadingCard>
            <VideosContainer>
              {trendingVideos.map(eachVideo => (
                <TrendingVideos videoDetails={eachVideo} key={eachVideo.id} />
              ))}
            </VideosContainer>
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

  renderVideosList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
            <TrendingPage data-testid="trending" theme={isThemeLight}>
              {this.renderVideosList()}
            </TrendingPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
