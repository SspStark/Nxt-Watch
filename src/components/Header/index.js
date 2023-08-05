import {BsMoon, BsSun} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  NavContent,
  NavLink,
  NavLogo,
  MobileOptions,
  ChangeTheme,
  MenuButton,
  LogoutButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, toggleTheme} = value

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
            <MobileOptions>
              <ChangeTheme onClick={() => toggleTheme()}>
                {isThemeLight ? (
                  <BsMoon color="black" size={25} />
                ) : (
                  <BsSun color="white" />
                )}
              </ChangeTheme>
              <MenuButton theme={isThemeLight}>
                <GiHamburgerMenu size={25} />
              </MenuButton>
              <LogoutButton theme={isThemeLight}>
                <FiLogOut size={25} />
              </LogoutButton>
            </MobileOptions>
          </NavContent>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
