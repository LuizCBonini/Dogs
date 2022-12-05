import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../../UserContext'

// imagens
import {ReactComponent as IconeMinhasFotos} from '../../../../Assets/feed.svg'
import {ReactComponent as IconeEstatisticas} from '../../../../Assets/estatisticas.svg'
import {ReactComponent as IconeAddFoto} from '../../../../Assets/adicionar.svg'
import {ReactComponent as IconeSair} from '../../../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'
import useMedia from '../../../../Hooks/useMedia'

const UserHeaderNav = () => {

  const {userLogout} = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const {pathname} = useLocation();
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile &&
        <button 
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' 
          onClick={() => setMobileMenu(!mobileMenu)}></button>
      }
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
          <NavLink to='/conta' end><IconeMinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
          <NavLink to='/conta/estatisticas'><IconeEstatisticas/>{mobile && 'Estatísticas'}</NavLink>
          <NavLink to='/conta/postar'><IconeAddFoto/>{mobile && 'Adicionar Foto'}</NavLink>
          <button onClick={userLogout}><IconeSair/>{mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav