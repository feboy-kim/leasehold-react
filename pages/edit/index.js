import Layout from "../../parts/layout";
import Head from "next/head";
import { initialease } from "../../models/lease-ready";
import { useEffect, useState } from "react";
import LeaseEdit from "../../parts/lease-edit";
import { set } from "idb-keyval";
import { useRouter } from "next/router";
import { CheckIcon } from '@heroicons/react/24/solid'
import AccentIcon from "../../parts/edit/accent-icon";

function NewLease() {
    const router = useRouter()
    const [warning, setWarning] = useState("")
    const [savable, setSavable] = useState(false)
    const [lease, setLease] = useState(initialease())
    useEffect(() => {
        setSavable(lease.lessor?.name && lease.lessee?.name)
    }, [lease])
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
        <Layout warning={warning}>
            <div className="relative">
                <h2 className="p-2 heading-2">新建租约（租房合同）</h2>
                <button title="至少双方姓名都填写后才能保存" className="absolute top-0 right-0"
                    disabled={!savable} onClick={() => createLease()}>
                    <AccentIcon picon={CheckIcon} label="保存" disabled={!savable} />
                </button>
            </div>
            {lease && <LeaseEdit lease={lease} onChanged={d => {
                setLease(prev => ({ ...prev, ...d }))
            }} />}
        </Layout>
    </>
}

export default NewLease
