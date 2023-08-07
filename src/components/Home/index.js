import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'

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
  }

  closeBanner = () => this.setState({showBanner: false})

  getSearchInput = event => this.setState({searchInput: event.target.value})

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
            <HomePage data-testid="Home">
              <BannerContainer data-testid="banner" display={showBanner}>
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
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.getSearchInput}
                  />
                  <SearchButton type="button" data-testid="searchButton">
                    <BsSearch size={12} />
                  </SearchButton>
                </SearchContainer>
                {this.renderFailureView()}
              </HomeContainer>
            </HomePage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
