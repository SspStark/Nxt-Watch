import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NoResultsImage = styled.img`
  width: 350px;
`
export const NoResultsHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
`
export const NoResultsNote = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  color: ${props => (props.theme === true ? ' #606060' : ' #cccccc')};
`
export const RetryButton = styled.button`
  background-color: #3b82f6;
  font-size: 12px;
  font-weight: 500;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin-bottom: 50px;
`
export const VideoImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  align-self: flex-start;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`
export const Title = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 14px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 7px;
`
export const ChannelName = styled.p`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`
export const ViewCountPublished = styled(ChannelName)`
  margin-top: 8px;
`
export const Dot = styled.span`
  font-weight: 800;
  margin: 0px 5px;
`
