import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoResults,
  NoResultsImage,
  NoResultsHeading,
  NoResultsNote,
  RetryButton,
  VideosContainer,
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

const HomeVideosView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const {videosList, retry} = props

      return videosList.length === 0 ? (
        <NoResults>
          <NoResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultsHeading theme={isThemeLight}>
            No Search Results Found
          </NoResultsHeading>
          <NoResultsNote theme={isThemeLight}>
            Try different key words or remove search filter
          </NoResultsNote>
          <RetryButton type="button" onClick={() => retry()}>
            Retry
          </RetryButton>
        </NoResults>
      ) : (
        <VideosContainer>
          {videosList.map(eachVideo => {
            const {
              id,
              title,
              thumbnailUrl,
              profileImageUrl,
              channelName,
              viewCount,
              publishedAt,
            } = eachVideo

            const date = new Date(publishedAt)
            const formatDate = formatDistanceToNow(date).split(' ').splice(1)
            const publishedDate = formatDate.join(' ')
            return (
              <VideoItem key={id}>
                <VideoLink to={`/videos/${id}`}>
                  <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                  <VideoDetails>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    <TextContainer>
                      <Title theme={isThemeLight}>{title}</Title>
                      <ChannelName>{channelName}</ChannelName>
                      <ViewCountPublished>
                        {viewCount} views
                        <Dot> &#8226; </Dot>
                        {publishedDate} ago
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
                </VideoLink>
              </VideoItem>
            )
          })}
        </VideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideosView
