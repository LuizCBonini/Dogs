import React from 'react'
import { PHOTO_DELETE } from '../../../api'

import styles from './PhotoDelete.module.css'

import useFetch from '../../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PhotoDelete = ({id}) => {

    const {loading, request} = useFetch();
    const navigate = useNavigate()

    async function handleDeleteClick() {
        const confirm = window.confirm('Tem certeza de que deseja deletar esta foto?')
        if(confirm) {
            const {url, options} = PHOTO_DELETE(id);
            await request(url, options)
            navigate('/')
        }
    }


  return (
    <>
    {loading ?
        <button className={`${styles.delete} ${styles.carregando}`} disabled>Deletando...</button>
        :
        <button className={styles.delete} onClick={handleDeleteClick}>Deletar</button>
    }
    </>
  )
}

export default PhotoDelete