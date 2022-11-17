import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../parts/layout"

function View() {
    const router = useRouter
    const { id } = router.query
    const [lease, setLease] = useState()

    useEffect(() => {

    }, [id])

    return <Layout>
        <Head>
            <title></title>
        </Head>
        <div></div>
    </Layout>
}

export default View
