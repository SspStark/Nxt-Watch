import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginPage,
  LoginForm,
  FormLogo,
  InputContainer,
  Label,
  Input,
  LoginButton,
  CheckBox,
  CheckBoxLabel,
  CheckBoxContainer,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  getUsername = event => this.setState({username: event.target.value})

  getPassword = event => this.setState({password: event.target.value})

  togglePassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  submitFailure = errorMsg => this.setState({showError: true, errorMsg})

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, showError, errorMsg} = this.state
    const showOrHidePassword = showPassword ? 'text' : 'password'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value

          return (
            <LoginPage>
              <LoginForm onSubmit={this.submitForm}>
                <FormLogo
                  src={
                    isThemeLight
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.getUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    id="password"
                    type={showOrHidePassword}
                    placeholder="Password"
                    value={password}
                    onChange={this.getPassword}
                  />
                </InputContainer>
                <CheckBoxContainer>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    value={showPassword}
                    onChange={this.togglePassword}
                  />

                  <CheckBoxLabel htmlFor="checkbox">
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
