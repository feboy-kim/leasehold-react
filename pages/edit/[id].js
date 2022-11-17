import { get } from "idb-keyval";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../parts/layout";
import LeaseEdit from "../../parts/lease-edit"

function Edit() {
    const router = useRouter()
    const { id } = router.query
    const [lease, setLease] = useState()
    const [warning, setWarning] = useState("")
    useEffect(() => {
        const nId = Number(id)
        if (isNaN(nId)) {
            setWarning('Route query id must be a number')
        } else {
            get(nId).then(d => {
                setLease(d)
            }).catch(e => {
                setWarning('Failed to get the lease')
            })
        }
    }, [id])
    return <Layout>
        <Head>
            <title>修改租约</title>
            <meta name="description" content="修改房屋租约" />
        </Head>
        {warning && <p>
            {warning}
        </p>}
        {lease && <LeaseEdit lease={lease} onChanged={d => {
            setLease(prev => ({ ...prev, ...d }))
        }} />}
    </Layout>
}

export default Edit
