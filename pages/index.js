import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Results from './result'
import CommonContext from '../components/commonContext'
import { INIT_DATA } from '../components/constants'

export default function Home({ results }) {
  const { dispatch } = useContext(CommonContext) 
  
  useEffect(() => {
    dispatch({ type: INIT_DATA, payload: results })
  }, [])
  
  return (
    <div className="container">
      <Head>
       <title>Create Next App </title>
      </Head>
      <Results />
    </div>
  )
}

Home.getInitialProps = async () =>  {
  const res = await fetch(`${process.env.server}/api/hello`)
  const json = await res.json()
  return { results: json }
}