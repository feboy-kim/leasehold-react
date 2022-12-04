import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../parts/layout'
import LeaseList from '../parts/lease-list'
import { del, entries } from "idb-keyval"
import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BorderedBlock from '../parts/edit/bordered-block'

export default function Home() {
  const [warning, setWarning] = useState("")
  const [leases, setLeases] = useState([])
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
    <Layout warning={warning} heading={process.env.mainTitle}>
      {leases && leases.length > 0
        ? <LeaseList leases={leases} onRemove={d => {
          del(d).then(() => {
            setLeases(prev => prev.filter(item => item[0] !== d))
          }).catch(e => {
            setWarning("Failed to delete a lease")
          })
        }} />
        : <div className='flex flex-col items-center'>
          <div className='p-2 mx-3 text-lg w-fit'>
            <div className='inline align-middle'>目前没有合同</div>
            <FaceFrownIcon className='w-5 h-5 inline' />
          </div>
          <Link href='/edit' className='text-lg'>
            <BorderedBlock picon={FaceSmileIcon} label='新建一个！' />
          </Link>
        </div>
      }
      <div className='m-1'>
      </div>
    </Layout>
  </>
}
