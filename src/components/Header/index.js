import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BsMoon, BsSun} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
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
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, toggleTheme} = value

      const logOut = () => {
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
                  <BsSun color="white" size={25} />
                )}
              </ChangeTheme>
              <MenuIcon theme={isThemeLight}>
                <GiHamburgerMenu size={25} />
              </MenuIcon>
              <LogoutIcon theme={isThemeLight} type="button" onClick={logOut}>
                <FiLogOut size={25} />
              </LogoutIcon>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutButton type="button" onClick={logOut}>
                Logout
              </LogoutButton>
            </NavOptions>
          </NavContent>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
