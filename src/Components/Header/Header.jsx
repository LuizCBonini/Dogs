import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className='styles.header'>
      <Link to="/">Home</Link>
      <Link to="/login">Login / Criar</Link>
    </div>
  )
}

export default Header