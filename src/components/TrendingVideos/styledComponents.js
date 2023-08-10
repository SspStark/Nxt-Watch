import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 35px;
  }
`
export const VideoImage = styled.img`
  width: 300px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  @media (max-width: 576px) {
    flex-direction: row;
    margin-left: 0px;
    margin-top: 10px;
  }
`
export const ChannelLogo = styled.img`
  width: 30px;
  align-self: flex-start;
  @media (min-width: 577px) {
    display: none;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  @media (min-width: 577px) {
    margin-left: 0px;
  }
`
export const Title = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 7px;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`
export const ChannelName = styled.p`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 576px) {
    display: none;
  }
`
export const ViewCountPublished = styled(ChannelName)`
  margin-top: 8px;
`
export const Dot = styled.span`
  font-weight: 800;
  margin: 0px 5px;
`
export const MobileView = styled.p`
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  @media (min-width: 577px) {
    display: none;
  }
`
