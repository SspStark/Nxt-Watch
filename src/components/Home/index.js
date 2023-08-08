import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'
import HomeVideosView from '../HomeVideosView'

import {
  HomePage,
  BannerContainer,
  BannerDetails,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerClose,
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  searchVideos = () => this.getVideosList()

  closeBanner = () => this.setState({showBanner: false})

  getSearchInput = event => this.setState({searchInput: event.target.value})

  retry = () => this.getVideosList()

  renderVideosView = () => {
    const {videosList} = this.state
    return <HomeVideosView videosList={videosList} retry={this.retry} />
  }

  renderFailureView = () => <FailureView retry={this.retry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="Oval" color="#ff0b37" height="40" width="40" />
    </LoaderContainer>
  )

  renderVideosList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
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
          const {showBanner, searchInput} = this.state

          return (
            <HomePage data-testid="home" theme={isThemeLight}>
              <BannerContainer data-testid="banner" showBanner={showBanner}>
                <BannerDetails>
                  <BannerLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerText>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </BannerText>
                  <BannerButton type="button">GET IT NOW</BannerButton>
                </BannerDetails>

                <BannerClose
                  type="button"
                  data-testid="close"
                  onClick={this.closeBanner}
                >
                  <AiOutlineClose size={16} />
                </BannerClose>
              </BannerContainer>
              <HomeContainer>
                <SearchContainer theme={isThemeLight}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.getSearchInput}
                    theme={isThemeLight}
                  />
                  <SearchButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.searchVideos}
                    theme={isThemeLight}
                  >
                    <BsSearch size={12} />
                  </SearchButton>
                </SearchContainer>
                {this.renderVideosList()}
              </HomeContainer>
            </HomePage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
