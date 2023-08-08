import styled from 'styled-components'

export const LoginPage = styled.div`
  background-color: ${props => (props.theme === true ? 'white' : '#212121')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginForm = styled.form`
  background-color: ${props => (props.theme === true ? 'white' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 350px;
  padding: 35px 16px;
  font-family: 'Roboto';
  border-radius: 8px;
  box-shadow: ${props =>
    props.theme === true ? '0px 0px 20px 5px #e2e8f0' : 'none'};
  @media (min-width: 768px) {
    padding: 40px;
    max-width: 400px;
  }
`
export const FormLogo = styled.img`
  width: 120px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 150px;
    margin-bottom: 25px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
`
export const Label = styled.label`
  color: ${props => (props.theme === true ? '#64748b' : '#e2e8f0')};
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 5px;
`
export const Input = styled.input`
  font-size: 15px;
  height: 36px;
  background-color: transparent;
  color: ${props => (props.theme === true ? '#475569' : '#e2e8f0')};
  border-radius: 4px;
  border: 1px solid ${props => (props.theme === true ? '#cbd5e1' : '#606060')};
  outline: none;
  padding-left: 14px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`

export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`
export const CheckBoxLabel = styled.label`
  color: ${props => (props.theme === true ? 'black' : ' #e2e8f0')};
  font-size: 14px;
`

export const LoginButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #3b82f6;
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 26px;
  margin-bottom: 5px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
  align-self: flex-start;
  margin: 0;
`
