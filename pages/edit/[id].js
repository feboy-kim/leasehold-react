import { get, update } from "idb-keyval";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../parts/layout";
import LeaseEdit from "../../parts/lease-edit"

function Edit() {
    const router = useRouter()
    const { id } = router.query
    const [theId, setTheId] = useState()
    const [lease, setLease] = useState()
    const [warning, setWarning] = useState("")
    useEffect(() => {
        const nId = Number(id)
        if (isNaN(nId)) {
            setWarning('Route query id must be a number')
        } else {
            setWarning('')
            setTheId(nId)
        }
    }, [id])
    useEffect(() => {
        if (theId) {
            get(theId).then(d => {
                // setOrign(d)
                setLease(d)
            }).catch(e => {
                setWarning('Failed to get the lease')
            })
        }
    }, [theId])
    const putLease = d => {
        update(theId, prev => ({ ...prev, ...d })).then(() => {
            setLease(prev => ({ ...prev, ...d }))
        }).catch(ex => {
            setWarning("Failed to save the lease")
        })
    }
    return <>
        <Head>
            <title>修改合同</title>
            <meta name="description" content="修改房屋租约合同" />
        </Head>
        <Layout warning={warning}>
            <div className="relative">
                <h2 className="p-2 heading-2">修改租约（租房合同）</h2>
                {theId && <Link href={`/view/${theId}`}
                    className="px-3 py-2 rounded hover:text-bg-accent absolute top-0 right-0">
                    <span className='font-semibold'>预览 》</span>
                </Link>
                }
            </div>
            {lease && <LeaseEdit lease={lease} onChanged={d => {
                putLease(d)
            }} />}
        </Layout>
    </>
}

export default Edit
