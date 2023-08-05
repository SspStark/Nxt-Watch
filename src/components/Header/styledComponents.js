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
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLogo = styled.img`
  width: 90px;
  margin: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 120px;
  }
`
export const NavOptions = styled.div`
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
  margin: 0;
  outline: none;
  cursor: pointer;
  margin-right: 7px;
  margin-left: 7px;
  @media (min-width: 768px) {
    margin-right: 10px;
    margin-left: 12px;
  }
`
export const MenuIcon = styled(ChangeTheme)`
  color: ${props => (props.theme ? 'black' : 'white')};
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutIcon = styled(MenuIcon)``

export const ProfileImage = styled.img`
  width: 25px;
  margin: 0;
  margin-right: 16px;
  margin-left: 16px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled(ChangeTheme)`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  border-radius: 4px;
  padding: 5px 18px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 767px) {
    display: none;
  }
`
