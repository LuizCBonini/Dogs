import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'

import useFetch from '../../../Hooks/useFetch'
import Error from '../../../Components/Helper/Error'
import { useEffect } from 'react'
import { PHOTOS_GET } from '../../../api'
import Loading from '../../Helper/Loading/Loading'

import styles from './FeedPhotos.module.css'

const FeedPhotos = ({setInfinite,page, user, setModalPhoto}) => {

    const {data, loading, error, request} = useFetch()
    // console.log(user)

    useEffect(() => {
        async function fetchPhotos() {
          const total = 3;
            const {url, options} = PHOTOS_GET({page, total, user});
            const {response, json} = await request(url, options);
            console.log('request: ', json)
            if(response && response.ok && json.length < total) {
              setInfinite(false)
            }
        }
        fetchPhotos()
    }, [setInfinite, page, request, user])

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (<FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>))}
        
    </ul>
  );
  else return null;
}

export default FeedPhotos