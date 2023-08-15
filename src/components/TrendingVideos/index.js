import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  VideoLink,
  VideoImage,
  VideoDetails,
  ChannelLogo,
  TextContainer,
  Title,
  ChannelName,
  ViewCountPublished,
  Dot,
  MobileView,
} from './styledComponents'

const TrendingVideos = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        channelName,
        viewCount,
        publishedAt,
        profileImageUrl,
      } = videoDetails

      const date = new Date(publishedAt)
      const formatDate = formatDistanceToNow(date).split(' ').splice(1)
      const publishedDate = formatDate.join(' ')

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoItem>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetails>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <TextContainer>
                <Title theme={isThemeLight}>{title}</Title>
                <ChannelName>{channelName}</ChannelName>
                <ViewCountPublished>
                  {viewCount} views
                  <Dot> &#8226; </Dot>
                  {publishedAt}
                </ViewCountPublished>
                <MobileView>
                  {channelName}
                  <Dot> &#8226; </Dot>
                  {viewCount} views
                  <Dot> &#8226; </Dot>
                  {publishedDate} ago
                </MobileView>
              </TextContainer>
            </VideoDetails>
          </VideoItem>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideos
