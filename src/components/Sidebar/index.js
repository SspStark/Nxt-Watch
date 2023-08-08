import {AiFillHome} from 'react-icons/ai'
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

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, activePage, changeActivePage} = value

      const activePageColor = isThemeLight ? '#e2e8f0' : '#424242'
      const activeOptionColor = isThemeLight ? '#000000' : '#ffffff'
      const optionColor = isThemeLight ? '#64748b' : '#e2e8f0'

      return (
        <NavSidebar theme={isThemeLight}>
          <SidebarOptions>
            <MenuLink to="/">
              <MenuItem
                bgColor={activePage === 'Home' ? activePageColor : 'none'}
                onClick={() => changeActivePage('Home')}
              >
                <AiFillHome
                  color={activePage === 'Home' ? '#ff0000' : '#64748b'}
                />
                <OptionName
                  textColor={
                    activePage === 'Home' ? activeOptionColor : optionColor
                  }
                >
                  Home
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/trending">
              <MenuItem
                bgColor={activePage === 'Trending' ? activePageColor : 'none'}
                onClick={() => changeActivePage('Trending')}
              >
                <HiFire
                  color={activePage === 'Trending' ? '#ff0000' : '#64748b'}
                />
                <OptionName
                  textColor={
                    activePage === 'Trending' ? activeOptionColor : optionColor
                  }
                >
                  Trending
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/gaming">
              <MenuItem
                bgColor={activePage === 'Gaming' ? activePageColor : 'none'}
                onClick={() => changeActivePage('Gaming')}
              >
                <SiYoutubegaming
                  color={activePage === 'Gaming' ? '#ff0000' : '#64748b'}
                />
                <OptionName
                  textColor={
                    activePage === 'Gaming' ? activeOptionColor : optionColor
                  }
                >
                  Gaming
                </OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink to="/saved-videos">
              <MenuItem
                bgColor={activePage === 'Saved' ? activePageColor : 'none'}
                onClick={() => changeActivePage('Saved')}
              >
                <MdPlaylistAdd
                  color={activePage === 'Saved' ? '#ff0000' : '#64748b'}
                />
                <OptionName
                  textColor={
                    activePage === 'Saved' ? activeOptionColor : optionColor
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
              <Contact
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Contact
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Contact
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
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

export default Sidebar
