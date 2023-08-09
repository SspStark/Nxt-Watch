import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
`
export const VideoImage = styled.img`
  width: 300px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`
export const Title = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-weight: 500;
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
