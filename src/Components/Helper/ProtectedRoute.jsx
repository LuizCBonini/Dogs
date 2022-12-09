import React from 'react'
import { Navigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../../UserContext'

const ProtectedRoute = ({children}) => {

    // const {login} = useContext(UserContext)
    const token = window.localStorage.getItem('token')

  return token ? children : <Navigate to="/login"/>;
}

export default ProtectedRoute