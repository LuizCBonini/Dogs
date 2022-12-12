import React from 'react'

// components
import Feed from '../../Components/Feed/Feed'
import Head from '../../Components/Helper/Head'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Home" desciption="Uma rede social pra cachorro!"/>
      <Feed/>
    </section>
  )
}

export default Home