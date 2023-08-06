import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomePage,
  BannerContainer,
  BannerDetails,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerClose,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value

          return (
            <HomePage data-testid="Home">
              <BannerContainer data-testid="banner">
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
              <HomeVideosContainer>
                <SearchContainer>
                  <SearchInput type="search" placeholder="Search" />
                  <SearchButton type="button" data-testid="searchButton">
                    <BsSearch size={12} />
                  </SearchButton>
                </SearchContainer>
              </HomeVideosContainer>
            </HomePage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
