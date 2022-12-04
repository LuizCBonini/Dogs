import React from 'react'
import UserHeaderNav from './UserHeaderNav/UserHeaderNav'

import styles from './UserHeader.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const UserHeader = () => {

  const [title, setTitle] = useState('');
  const location = useLocation()
  
  useEffect(() => {
    if(location.pathname === '/conta/estatisticas') {
      setTitle('Estatísticas')
    } else if (location.pathname === '/conta/postar') {
      setTitle('Poste Sua Foto')
    } else {setTitle('Minha Conta')}
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader