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

      return (
        <NavSidebar>
          <SidebarOptions>
            <MenuLink>
              <MenuItem
                bgColor={activePage === 'Home' ? '#e2e8f0' : 'none'}
                onClick={() => changeActivePage('Home')}
              >
                <AiFillHome />
                <OptionName>Home</OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink>
              <MenuItem
                bgColor={activePage === 'Trending' ? ' #cbd5e1' : 'none'}
                onClick={() => changeActivePage('Trending')}
              >
                <HiFire />
                <OptionName>Trending</OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink>
              <MenuItem
                bgColor={activePage === 'Gaming' ? ' #cbd5e1' : 'none'}
                onClick={() => changeActivePage('Gaming')}
              >
                <SiYoutubegaming />
                <OptionName>Gaming</OptionName>
              </MenuItem>
            </MenuLink>
            <MenuLink>
              <MenuItem
                bgColor={activePage === 'Saved' ? ' #cbd5e1' : 'none'}
                onClick={() => changeActivePage('Saved')}
              >
                <MdPlaylistAdd />
                <OptionName>Saved Videos</OptionName>
              </MenuItem>
            </MenuLink>
          </SidebarOptions>
          <ContactSection>
            <ContactHeading>CONTACT US</ContactHeading>
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
            <ContactsCaption>
              Enjoy! Now to see your channels and recommendations!
            </ContactsCaption>
          </ContactSection>
        </NavSidebar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
