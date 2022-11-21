import Layout from "../../parts/layout";
import Head from "next/head";
import { initialease } from "../../models/data-helper";
import { useEffect, useState } from "react";
import LeaseEdit from "../../parts/lease-edit";
import { set } from "idb-keyval";
import { useRouter } from "next/router";
import { CheckIcon } from '@heroicons/react/24/solid'

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
            <title>新建租约</title>
            <meta name="description" content="新建房屋租约" />
        </Head>
        <Layout warning={warning}>
            <div className="flex justify-between items-center">
                <h1 className="m-2 heading-1">新建租约（租房合同）</h1>
                <div className="m-2" title="至少双方姓名都填写后才能保存">
                    <button className="px-2 py-1 rounded text-bg-secondary 
                    disabled-hover-secondary disabled:border-0 active:border-2"
                        disabled={!savable} onClick={() => createLease()}>
                        <CheckIcon className='w-6 h-6 stroke-2 inline' />
                        <span className='inline-block font-semibold align-middle'>保存</span>
                    </button>
                </div>
            </div>
            {lease && <LeaseEdit lease={lease} onChanged={d => {
                setLease(prev => ({ ...prev, ...d }))
            }} />}
        </Layout>
    </>
}

export default NewLease
