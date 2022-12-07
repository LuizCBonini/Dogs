import React, { useState } from 'react'
import { useContext } from 'react'

import {UserContext} from '../../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'

import styles from './PhotoComments.module.css'
import { useRef } from 'react'
import { useEffect } from 'react'

const PhotoComments = (props) => {

  const [comments, setComments] = useState(() => props.comments)

  const commentsSection = useRef()

  const {login} = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map(comment => 
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}

export default PhotoComments