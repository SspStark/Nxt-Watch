import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 230px;
  background-size: cover;
  @media (max-width: 767px) {
    height: 180px;
    padding: 20px;
  }
`
export const BannerDetails = styled.div`
  width: 50%;
`
export const BannerLogo = styled.img`
  width: 130px;
  @media (max-width: 767px) {
    width: 100px;
  }
`
export const BannerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #424242;
  @media (max-width: 767px) {
    font-size: 15px;
  }
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
  @media (max-width: 767px) {
    font-size: 12px;
    margin-top: 12px;
  }
`
export const BannerCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerClose = styled.button`
  border: none;
  background: none;
  height: 25px;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 40%;
  border: 1px solid ${props => (props.theme === true ? '#1e293b' : '#64748b')};
  border-radius: 5px;
  margin-bottom: 24px;
  @media (max-width: 1140px) {
    width: 65%;
  }
  @media (max-width: 576px) {
    width: 92%;
    align-self: center;
  }
`
export const SearchInput = styled.input`
  height: 100%;
  background-color: transparent;
  color: ${props => (props.theme === true ? '#000000' : 'white')};
  font-size: 14px;
  border: none;
  padding-left: 16px;
  width: 85%;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.theme === true ? '#cccccc' : '#272727')};
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  width: 15%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: ${props => (props.theme === true ? 'black' : 'white')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
