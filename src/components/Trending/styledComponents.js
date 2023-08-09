import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingHeadingCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 40px;
  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
`
export const TrendingIconBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#e2e8f0' : '#0f0f0f')};
  width: 70px;
  height: 70px;
  border-radius: 70px;
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  font-size: 25px;
  margin-left: 10px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 25px 45px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
