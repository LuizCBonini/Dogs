import React from 'react'
import { useEffect } from 'react'
import { GET_STATS } from '../../../api'
import Head from '../../../Components/Helper/Head'
import useFetch from '../../../Hooks/useFetch'
import Loading from '../../../Components/Helper/Loading/Loading'
import Error from '../../../Components/Helper/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch()

  useEffect(() => {
    async function getData() {
      const {url,options} = GET_STATS();
      request(url, options)
    }
    getData()
  }, [request])

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title='Estatísticas'/>
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    )
  } else return null
}

export default UserStats