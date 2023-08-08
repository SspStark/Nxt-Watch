import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const FailureImage = styled.img`
  width: 350px;
`
export const FailureHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
`
export const FailureNote = styled.p`
  color: ${props => (props.theme === true ? ' #606060' : ' #cccccc')};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
`
export const RetryButton = styled.button`
  background-color: #3b82f6;
  font-size: 12px;
  font-weight: 500;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
