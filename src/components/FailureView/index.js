import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {retry} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const FailureImageUrl = isThemeLight
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={FailureImageUrl} alt="failure view" />
            <FailureHeading theme={isThemeLight}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureNote theme={isThemeLight}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureNote>
            <RetryButton type="button" onClick={() => retry()}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
