import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {MdPlaylistAdd} from 'react-icons/md'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  VideoItemDetails,
  VideoPlayer,
  PlayerContainer,
  Title,
  VideoStats,
  ViewsAndDate,
  Dot,
  LikeAndSave,
  Button,
  ButtonText,
  HrLine,
  VideoDetails,
  ChannelLogo,
  TextContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  like = () =>
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))

  dislike = () =>
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))

  renderVideoItem = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight, savedVideos, toggleSave} = value
        const {videoData, isLiked, isDisliked} = this.state

        const onClickSave = () => toggleSave(videoData)

        const colorLiked = isLiked ? '#2563eb' : '#64748b'
        const colorDisliked = isDisliked ? '#2563eb' : '#64748b'

        let videoSaved = false

        const findVideo = savedVideos.findIndex(
          each => each.id === videoData.id,
        )

        if (findVideo !== -1) {
          videoSaved = true
        }

        const colorSaved = videoSaved ? '#2563eb' : '#64748b'

        return (
          <VideoPlayer>
            <PlayerContainer>
              <ReactPlayer
                url={videoData.videoUrl}
                controls
                width="100%"
                height="100%"
              />
            </PlayerContainer>
            <Title theme={isThemeLight}>{videoData.title}</Title>
            <VideoStats>
              <ViewsAndDate>
                {videoData.viewCount} views
                <Dot> &#8226; </Dot>
                {videoData.publishedAt}
              </ViewsAndDate>
              <LikeAndSave>
                <Button
                  type="button"
                  onClick={this.like}
                  textColor={colorLiked}
                >
                  <AiOutlineLike size={25} />
                  Like
                </Button>
                <Button
                  type="button"
                  onClick={this.dislike}
                  textColor={colorDisliked}
                >
                  <AiOutlineDislike size={22} />
                  Dislike
                </Button>
                <Button
                  type="button"
                  textColor={colorSaved}
                  onClick={onClickSave}
                >
                  <MdPlaylistAdd size={22} />
                  <ButtonText>{videoSaved ? 'Saved' : 'Save'}</ButtonText>
                </Button>
              </LikeAndSave>
            </VideoStats>
            <HrLine />
            <VideoDetails>
              <ChannelLogo src={videoData.profileImageUrl} alt="channel logo" />
              <TextContainer>
                <ChannelName theme={isThemeLight}>
                  {videoData.channelName}
                </ChannelName>
                <ChannelSubscribers theme={isThemeLight}>
                  {videoData.subscriberCount} Subscribers
                </ChannelSubscribers>
              </TextContainer>
            </VideoDetails>
            <ChannelDescription theme={isThemeLight}>
              {videoData.description}
            </ChannelDescription>
          </VideoPlayer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  retry = () => this.getVideoData()

  renderFailureView = () => <FailureView retry={this.retry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="Oval" color="red" height="40" width="40" />
    </LoaderContainer>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItem()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value
          return (
            <VideoItemDetails
              data-testid="videoItemDetails"
              theme={isThemeLight}
            >
              {this.renderVideoItemDetails()}
            </VideoItemDetails>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoPage
