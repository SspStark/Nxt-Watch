import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideos from '../TrendingVideos'

import {
  SavedVideosContainer,
  NoVideos,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  VideosContainer,
  SavedHeadingCard,
  SavedIconBg,
  SavedHeading,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, savedVideos} = value

      return (
        <SavedVideosContainer data-testid="savedVideos" theme={isThemeLight}>
          {savedVideos.length === 0 ? (
            <NoVideos>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                alt="no saved videos"
              />
              <NoVideosHeading theme={isThemeLight}>
                No saved videos found
              </NoVideosHeading>
              <NoVideosNote theme={isThemeLight}>
                You can save your videos while watching them
              </NoVideosNote>
            </NoVideos>
          ) : (
            <>
              <SavedHeadingCard theme={isThemeLight}>
                <SavedIconBg theme={isThemeLight}>
                  <HiFire color="#ff0000" size={26} />
                </SavedIconBg>
                <SavedHeading theme={isThemeLight}>Saved Videos</SavedHeading>
              </SavedHeadingCard>
              <VideosContainer>
                {savedVideos.map(eachVideo => (
                  <TrendingVideos videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideosContainer>
            </>
          )}
        </SavedVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
