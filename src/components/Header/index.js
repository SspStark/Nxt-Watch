import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BsMoon} from 'react-icons/bs'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

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
              <MenuIcon theme={isThemeLight}>
                <GiHamburgerMenu size={25} />
              </MenuIcon>
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
                  <ModalContainer>
                    <ModalNote>Are you sure, you want to logout?</ModalNote>
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
                  <ModalContainer>
                    <ModalNote>Are you sure, you want to logout?</ModalNote>
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
