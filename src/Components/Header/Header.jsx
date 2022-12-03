import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

import { UserContext } from '../../UserContext'

// IMGs
import {ReactComponent as Dogs} from '../../Assets/dogs.svg'

const Header = () => {

  const {data, userLogout} = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label='Dogs logo' className={styles.logo}>
          <Dogs/>
        </Link>
        {data ? (
          <>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
            <button onClick={userLogout}>logout</button>
          </>
        ) : (
          <Link to="/login" className={styles.login}>Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}

export default Header