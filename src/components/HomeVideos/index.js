import {VideoLink, VideoItem, VideoImage} from './styledComponents'

const HomeVideos = props => {
  const {videoDetails} = props
  const {
    title,
    thumbnailUrl,
    profileImageUrl,
    channelName,
    videosCount,
    publishedAt,
  } = videoDetails

  return (
    <VideoItem>
      <VideoLink>
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      </VideoLink>
    </VideoItem>
  )
}

export default HomeVideos
