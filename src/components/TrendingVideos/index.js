import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  VideoLink,
  VideoImage,
  VideoDetails,
  Title,
  ChannelName,
  ViewCountPublished,
  Dot,
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
      } = videoDetails

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoItem>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetails>
              <Title theme={isThemeLight}>{title}</Title>
              <ChannelName>{channelName}</ChannelName>
              <ViewCountPublished>
                {viewCount} views
                <Dot> &#8226; </Dot>
                {publishedAt}
              </ViewCountPublished>
            </VideoDetails>
          </VideoItem>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideos
