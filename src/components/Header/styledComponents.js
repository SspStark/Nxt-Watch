import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  background-color: ${props => (props.theme ? 'white' : '#212121')};
  display: flex;
  justify-content: center;
`
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLogo = styled.img`
  width: 80px;
  margin: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100px;
  }
`
export const MobileOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin: 0;
`
export const ChangeTheme = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  margin: 10px;
`
export const MenuButton = styled(ChangeTheme)`
  color: ${props => (props.theme ? 'black' : 'white')};
`
export const LogoutButton = styled(MenuButton)``
