import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BsMoon} from 'react-icons/bs'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  NavContent,
  NavLink,
  NavLogo,
  NavOptions,
  ChangeTheme,
  MenuIcon,
  LogoutIcon,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalNote,
  ModalButtons,
  CloseButton,
  ConfirmButton,
  SidebarOptions,
  MenuLink,
  MenuItem,
  OptionName,
  TabsContainer,
  TabsClose,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, toggleTheme} = value

      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const {location} = props
      const path = location.pathname

      const activePageColor = isThemeLight ? '#e2e8f0' : '#424242'
      const activeOptionColor = isThemeLight ? '#000000' : '#ffffff'
      const optionColor = isThemeLight ? '#64748b' : '#e2e8f0'
      return (
        <Navbar theme={isThemeLight}>
          <NavContent>
            <NavLink to="/">
              <NavLogo
                src={
                  isThemeLight
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </NavLink>
            <NavOptions>
              <ChangeTheme
                onClick={() => toggleTheme()}
                type="button"
                data-testid="theme"
              >
                {isThemeLight ? (
                  <BsMoon color="black" size={25} />
                ) : (
                  <FiSun color="white" size={25} />
                )}
              </ChangeTheme>
              <Popup
                modal
                trigger={
                  <MenuIcon theme={isThemeLight}>
                    <GiHamburgerMenu size={25} />
                  </MenuIcon>
                }
              >
                {close => (
                  <TabsContainer theme={isThemeLight}>
                    <TabsClose type="button" onClick={() => close()}>
                      <AiOutlineClose size={16} />
                    </TabsClose>
                    <SidebarOptions>
                      <MenuLink to="/">
                        <MenuItem
                          bgColor={path === '/' ? activePageColor : 'none'}
                        >
                          <AiFillHome
                            color={path === '/' ? '#ff0000' : '#64748b'}
                          />
                          <OptionName
                            textColor={
                              path === '/' ? activeOptionColor : optionColor
                            }
                          >
                            Home
                          </OptionName>
                        </MenuItem>
                      </MenuLink>
                      <MenuLink to="/trending">
                        <MenuItem
                          bgColor={
                            path === '/trending' ? activePageColor : 'none'
                          }
                        >
                          <HiFire
                            color={path === '/trending' ? '#ff0000' : '#64748b'}
                          />
                          <OptionName
                            textColor={
                              path === '/trending'
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
                            path === '/gaming' ? activePageColor : 'none'
                          }
                        >
                          <SiYoutubegaming
                            color={path === '/gaming' ? '#ff0000' : '#64748b'}
                          />
                          <OptionName
                            textColor={
                              path === '/gaming'
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
                            path === '/saved-videos' ? activePageColor : 'none'
                          }
                        >
                          <MdPlaylistAdd
                            color={
                              path === '/saved-videos' ? '#ff0000' : '#64748b'
                            }
                          />
                          <OptionName
                            textColor={
                              path === '/saved-videos'
                                ? activeOptionColor
                                : optionColor
                            }
                          >
                            Saved Videos
                          </OptionName>
                        </MenuItem>
                      </MenuLink>
                    </SidebarOptions>
                  </TabsContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIcon theme={isThemeLight} type="button">
                    <FiLogOut size={25} />
                  </LogoutIcon>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer theme={isThemeLight}>
                    <ModalNote theme={isThemeLight}>
                      Are you sure, you want to logout?
                    </ModalNote>
                    <ModalButtons>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={logout}>
                        Confirm
                      </ConfirmButton>
                    </ModalButtons>
                  </ModalContainer>
                )}
              </Popup>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" theme={isThemeLight}>
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer theme={isThemeLight}>
                    <ModalNote theme={isThemeLight}>
                      Are you sure, you want to logout?
                    </ModalNote>
                    <ModalButtons>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={logout}>
                        Confirm
                      </ConfirmButton>
                    </ModalButtons>
                  </ModalContainer>
                )}
              </Popup>
            </NavOptions>
          </NavContent>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
