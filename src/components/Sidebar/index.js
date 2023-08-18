import {AiFillHome} from 'react-icons/ai'
import {withRouter} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavSidebar,
  SidebarOptions,
  MenuLink,
  MenuItem,
  OptionName,
  ContactSection,
  ContactHeading,
  ContactLogos,
  Contact,
  ContactsCaption,
} from './styledComponents'

const Sidebar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value

      const {location} = props

      const activePageColor = isThemeLight ? '#e2e8f0' : '#424242'
      const activeOptionColor = isThemeLight ? '#000000' : '#ffffff'
      const optionColor = isThemeLight ? '#64748b' : '#e2e8f0'

      return (
        <NavSidebar theme={isThemeLight}>
          <SidebarOptions>
            <MenuLink to="/">
              <MenuItem
                bgColor={location.pathname === '/' ? activePageColor : 'none'}
              >
                <AiFillHome
                  color={location.pathname === '/' ? '#ff0000' : '#64748b'}
                />
                <OptionName
                  textColor={
                    location.pathname === '/' ? activeOptionColor : optionColor
                  }
                >
                  Home
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/trending">
              <MenuItem
                bgColor={
                  location.pathname === '/trending' ? activePageColor : 'none'
                }
              >
                <HiFire
                  color={
                    location.pathname === '/trending' ? '#ff0000' : '#64748b'
                  }
                />
                <OptionName
                  textColor={
                    location.pathname === '/trending'
                      ? activeOptionColor
                      : optionColor
                  }
                >
                  Trending
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/gaming">
              <MenuItem
                bgColor={
                  location.pathname === '/gaming' ? activePageColor : 'none'
                }
              >
                <SiYoutubegaming
                  color={
                    location.pathname === '/gaming' ? '#ff0000' : '#64748b'
                  }
                />
                <OptionName
                  textColor={
                    location.pathname === '/gaming'
                      ? activeOptionColor
                      : optionColor
                  }
                >
                  Gaming
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/saved-videos">
              <MenuItem
                bgColor={
                  location.pathname === '/saved-videos'
                    ? activePageColor
                    : 'none'
                }
              >
                <MdPlaylistAdd
                  color={
                    location.pathname === '/saved-videos'
                      ? '#ff0000'
                      : '#64748b'
                  }
                />
                <OptionName
                  textColor={
                    location.pathname === '/saved-videos'
                      ? activeOptionColor
                      : optionColor
                  }
                >
                  Saved Videos
                </OptionName>
              </MenuItem>
            </MenuLink>
          </SidebarOptions>
          <ContactSection>
            <ContactHeading theme={isThemeLight}>CONTACT US</ContactHeading>
            <ContactLogos>
              <a
                href="https://www.facebook.com/sspchowdary.sspchowdary"
                target="_blank"
                rel="noreferrer"
              >
                <Contact
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </a>
              <a
                href="https://twitter.com/ssp_stark"
                target="_blank"
                rel="noreferrer"
              >
                <Contact
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sspstark/"
                target="_blank"
                rel="noreferrer"
              >
                <Contact
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </a>
            </ContactLogos>
            <ContactsCaption theme={isThemeLight}>
              Enjoy! Now to see your channels and recommendations!
            </ContactsCaption>
          </ContactSection>
        </NavSidebar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Sidebar)
