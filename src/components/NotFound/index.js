import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value

      const notFoundImage = isThemeLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer theme={isThemeLight}>
            <NotFoundImage src={notFoundImage} alt="not found" />
            <NotFoundHeading theme={isThemeLight}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription theme={isThemeLight}>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
