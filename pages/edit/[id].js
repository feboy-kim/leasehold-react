import { get, update } from "idb-keyval";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../parts/layout";
import LeaseEdit from "../../parts/lease-edit"
import { ShareIcon } from '@heroicons/react/24/outline'

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
    const exportLease = () => {
        router.push(`/view/${theId}`)
    }
    return <>
        <Head>
            <title>修改合同</title>
            <meta name="description" content="修改房屋租约合同" />
        </Head>
        <Layout warning={warning} heading='修改租约（租房合同）'
            lastent={{ title: '预览合同并导出PDF文件', disabled: !theId, onClick: () => exportLease(), picon: ShareIcon, label: "预览" }}>
            {lease && <LeaseEdit lease={lease} onChanged={d => {
                putLease(d)
            }} />}
            <p className="p-2 text-center opacity-75">每个字段的修改将立即得以保存</p>
        </Layout>
    </>
}

export default Edit
