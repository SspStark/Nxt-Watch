import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`

export const GamingHeadingCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 40px;
  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`
export const GamingIconBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#e2e8f0' : '#0f0f0f')};
  width: 70px;
  height: 70px;
  border-radius: 70px;
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`
export const GamingHeading = styled.h1`
  color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  font-size: 25px;
  margin-left: 10px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const GamesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 25px 45px;
  @media (max-width: 767px) {
    padding: 5px 15px;
  }
  }
  @media (max-width: 576px) {
    width: 95%;
    align-self: center;
  }
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 31%;
  margin-bottom: 50px;
  @media (max-width: 576px) {
    width: 48%;
    margin-bottom: 35px;
  }
`
export const GameImage = styled.img`
  width: 100%;
`

export const Title = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const ViewCount = styled.p`
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
