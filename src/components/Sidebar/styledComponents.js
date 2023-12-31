import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  width: 250px;
  height: 90%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? 'white' : '#231f20')};
  @media (max-width: 767px) {
    display: none;
  }
`
export const SidebarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
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
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  margin-bottom: 20px;
`
export const ContactHeading = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.theme === true ? ' #1e293b' : ' #f1f5f9')};
`
export const ContactLogos = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0px;
`
export const Contact = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 12px;
`
export const ContactsCaption = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 200px;
  color: ${props => (props.theme === true ? ' #1e293b' : ' #f1f5f9')};
`
