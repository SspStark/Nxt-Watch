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
      const {isThemeLight, toggleTheme, activePage, changeActivePage} = value

      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

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
                          bgColor={
                            activePage === 'Home' ? activePageColor : 'none'
                          }
                          onClick={() => changeActivePage('Home')}
                        >
                          <AiFillHome
                            color={
                              activePage === 'Home' ? '#ff0000' : '#64748b'
                            }
                          />
                          <OptionName
                            textColor={
                              activePage === 'Home'
                                ? activeOptionColor
                                : optionColor
                            }
                          >
                            Home
                          </OptionName>
                        </MenuItem>
                      </MenuLink>
                      <MenuLink to="/trending">
                        <MenuItem
                          bgColor={
                            activePage === 'Trending' ? activePageColor : 'none'
                          }
                          onClick={() => changeActivePage('Trending')}
                        >
                          <HiFire
                            color={
                              activePage === 'Trending' ? '#ff0000' : '#64748b'
                            }
                          />
                          <OptionName
                            textColor={
                              activePage === 'Trending'
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
                            activePage === 'Gaming' ? activePageColor : 'none'
                          }
                          onClick={() => changeActivePage('Gaming')}
                        >
                          <SiYoutubegaming
                            color={
                              activePage === 'Gaming' ? '#ff0000' : '#64748b'
                            }
                          />
                          <OptionName
                            textColor={
                              activePage === 'Gaming'
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
                            activePage === 'Saved' ? activePageColor : 'none'
                          }
                          onClick={() => changeActivePage('Saved')}
                        >
                          <MdPlaylistAdd
                            color={
                              activePage === 'Saved' ? '#ff0000' : '#64748b'
                            }
                          />
                          <OptionName
                            textColor={
                              activePage === 'Saved'
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
