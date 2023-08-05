import styled from 'styled-components'

export const NotFoundRoute = styled.div`
  background-color: ${props => (props.isThemeLight ? '#f9f9f9' : '#000000')};
  height: 90vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  text-align:center;
  font-family:'Roboto'
  height: 100%;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme ? '#181818' : '#f9f9f9')};
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const NotFoundDescription = styled.p`
  color: ${props => (props.theme ? ' #606060' : ' #cccccc')};
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const NotFoundImage = styled.img`
  width: 90%;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
