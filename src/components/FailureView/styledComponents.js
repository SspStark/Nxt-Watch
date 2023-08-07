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
  color: #1e293b;
  font-size: 22px;
  font-weight: 500;
`
export const FailureNote = styled.p`
  color: #64748b;
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
