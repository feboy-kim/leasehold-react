import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../parts/layout'
import LeaseList from '../parts/lease-list'
import { entries } from "idb-keyval"

export default function Home() {
  const [warning, setWarning] = useState("")
  const [leases, setLeases] = useState()
  useEffect(() => {
    entries().then(data => { setLeases(data) }).catch(e => {
      setWarning("Failed to load leases")
    })
  }, [])
  return <>
    <Head>
      <title>{process.env.mainTitle}</title>
      <meta name="description" content="房屋租赁及注意事项" />
    </Head>
    <Layout warning={warning}>
      <h1 className="m-2 text-center heading-1">{process.env.mainTitle}</h1>
      <LeaseList leases={leases} />
    </Layout>
  </>
}
