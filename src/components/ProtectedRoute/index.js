import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="app-container">
      <Header />
      <div className="nxt-watch-container">
        <Sidebar />
        <Route {...props} />
      </div>
    </div>
  )
}

export default ProtectedRoute
