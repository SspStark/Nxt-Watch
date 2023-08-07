import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: #f9f9f9;
`
export const BannerContainer = styled.div`
  display: ${props => (props.display ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  width: 100%;
  height: 230px;
  background-size: cover;
`
export const BannerDetails = styled.div`
  width: 50%;
`
export const BannerLogo = styled.img`
  width: 130px;
`
export const BannerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #424242;
`
export const BannerButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  color: #424242;
  border: 1px solid #424242;
  padding: 8px 12px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const BannerClose = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
  @media (min-width: 1130px) {
    width: 80px;
  }
  @media (min-width: 1230px) {
    margin-right: 100px;
  }
  @media (min-width: 1290px) {
    margin-right: 200px;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 40%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 24px;
`
export const SearchInput = styled.input`
  height: 100%;
  background-color: transparent;
  color: #383838;
  font-size: 14px;
  border: none;
  padding-left: 16px;
  flex: 1;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: #cccccc;
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  width: 60px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
