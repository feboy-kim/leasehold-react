import Layout from "../../parts/layout";
import Head from "next/head";
import { initialease } from "../../models/lease-ready";
import { useState } from "react";
import LeaseEdit from "../../parts/lease-edit";
import { set } from "idb-keyval";
import { useRouter } from "next/router";
import { CheckIcon } from '@heroicons/react/24/outline'

function NewLease() {
    const router = useRouter()
    const [warning, setWarning] = useState("")
    const [lease, setLease] = useState(initialease())
    const createLease = () => {
        set(Date.now(), lease).then(() => {
            router.push('/')
        }).catch(ex => {
            setWarning("Failed to save the lease")
        })
    }
    return <>
        <Head>
            <title>新建合同</title>
            <meta name="description" content="新建房屋租约合同" />
        </Head>
        <Layout warning={warning} heading='新建租约（租房合同）'
            lastent={{ title: '提交双方姓名后才能保存', onClick: () => createLease(), picon: CheckIcon, label: "保存" }}>
            {lease && <LeaseEdit lease={lease} onChanged={d => {
                setLease(prev => ({ ...prev, ...d }))
            }} />}
            <p className="p-2 text-center opacity-75">保存后数据留存于当前浏览器</p>
        </Layout>
    </>
}

export default NewLease
