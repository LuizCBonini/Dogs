import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'

const Feed = ({user}) => {

  const [modalPhoto , setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {

    let wait = false;

    function infiniteScroll() {

      if (infinite) {
        const scroll = window.scrollY;
        const pageHeight = document.body.offsetHeight - window.innerHeight;

        if(scroll > pageHeight * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
        // console.log('foi')
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map(page => 
        <FeedPhotos 
          user={user} 
          key={page} 
          setModalPhoto={setModalPhoto} 
          page={page}
          setInfinite={setInfinite}
          infinite={infinite}
        />
      )}
    </div>
  )
}

export default Feed