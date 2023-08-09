import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
`

export const NoVideos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  text-align: center;
`
export const NoVideosImage = styled.img`
  width: 350px;
`
export const NoVideosHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
`
export const NoVideosNote = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  color: ${props => (props.theme === true ? ' #606060' : ' #cccccc')};
`
export const SavedHeadingCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 40px;
  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')};
`
export const SavedIconBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#e2e8f0' : '#0f0f0f')};
  width: 70px;
  height: 70px;
  border-radius: 70px;
`
export const SavedHeading = styled.h1`
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
