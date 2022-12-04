import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../../UserContext'

// imagens
import {ReactComponent as IconeMinhasFotos} from '../../../../Assets/feed.svg'
import {ReactComponent as IconeEstatisticas} from '../../../../Assets/estatisticas.svg'
import {ReactComponent as IconeAddFoto} from '../../../../Assets/adicionar.svg'
import {ReactComponent as IconeSair} from '../../../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {

  const {mobile, setMobile} = useState(null)
    const {userLogout} = useContext(UserContext)

  return (
    <nav className={styles.nav}>
        <NavLink to='/conta' end><IconeMinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/conta/estatisticas'><IconeEstatisticas/>{mobile && 'Estatísticas'}</NavLink>
        <NavLink to='/conta/postar'><IconeAddFoto/>{mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={userLogout}><IconeSair/>{mobile && 'Sair'}</button>
    </nav>
  )
}

export default UserHeaderNav