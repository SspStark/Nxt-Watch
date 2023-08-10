import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  background-color: ${props => (props.theme === true ? 'white' : '#231f20')};
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  height: 73px;
  @media (max-width: 767px) {
    height: 60px;
  }
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
  color: ${props => (props.theme === true ? 'black' : 'white')};
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
  color: ${props => (props.theme === true ? '#3b82f6' : '#f9f9f9')};
  border-radius: 4px;
  border: 1px solid ${props => (props.theme === true ? '#3b82f6' : '#f9f9f9')};
  padding: 5px 18px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 300px;
  background-color: ${props => (props.theme === true ? 'white' : '#212121')};
  border-radius: 10px;
  padding: 20px;
  @media (max-width: 400px) {
    width: 270px;
  }
`
export const ModalNote = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#00306e' : '#f1f1f1')};
  text-align: center;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`
export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-size: 13px;
  font-weight: bold;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  margin: 0px 8px;
  padding: 8px 16px;
`

export const ConfirmButton = styled(CloseButton)`
  background-color: #3b82f6;
  color: #f1f1f1;
  border: none;
`
export const SidebarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`
export const MenuLink = styled(Link)`
  text-decoration: none;
`
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 16px;
  height: 36px;
`

export const OptionName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  margin-left: 16px;
  color: ${props => props.textColor};
`
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme === true ? 'white' : '#212121')};
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  @media (max-width: 400px) {
    width: 270px;
  }
`
export const TabsClose = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
