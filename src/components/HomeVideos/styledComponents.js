import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin-bottom: 24px;
`
export const VideoImage = styled.img`
  width: 100%;
`
