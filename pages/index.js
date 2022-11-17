import Head from 'next/head'
import Layout from '../parts/layout'
import LeaseList from '../parts/lease-list'

export default function Home() {
  return <>
    <Head>
      <title>{process.env.mainTitle}</title>
      <meta name="description" content="房屋租赁及注意事项" />
    </Head>
    <Layout>
      <LeaseList />
      
      <div></div>
    </Layout>
  </>
}
