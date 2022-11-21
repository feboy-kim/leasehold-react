import { get, update } from "idb-keyval";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../parts/layout";
import LeaseEdit from "../../parts/lease-edit"
import { CheckIcon } from '@heroicons/react/24/solid'

function Edit() {
    const router = useRouter()
    const { id } = router.query
    const [theId, setTheId] = useState()
    const [lease, setLease] = useState()
    const [orign, setOrign] = useState()
    const [savable, setSavable] = useState(false)
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
                setOrign(d)
                setLease(d)
            }).catch(e => {
                setWarning('Failed to get the lease')
            })
        }
    }, [theId])
    useEffect(() => {
        let bool = lease && origin && lease?.lessor?.name && lease?.lessee?.name
        if (bool) {
            bool = lease.heading !== orign.heading
                || lease.lessor?.name !== orign.lessor?.name
                || lease.lessor?.identity !== orign.lessor?.identity
                || lease.lessor?.contact !== orign.lessor?.contact
                || lease.lessor?.payment !== orign.lessor?.payment
                || lease.lessor?.maint !== orign.lessor?.maint
                || lease.lessee?.name !== orign.lessee?.name
                || lease.lessee?.identity !== orign.lessee?.identity
                || lease.lessee?.contact !== orign.lessee?.contact
                || lease.lessee?.payment !== orign.lessee?.payment
                || lease.lessee?.maint !== orign.lessee?.maint
                || lease.aboutent?.city !== orign.aboutent?.city
                || lease.aboutent?.address !== orign.aboutent?.address
                || lease.aboutent?.cert !== orign.aboutent?.cert
                || lease.rentFee?.monthAmount !== orign.rentFee?.monthAmount
                || lease.rentFee?.sinote !== orign.rentFee?.sinote
                || lease.rentFee?.payPeriod !== orign.rentFee?.payPeriod
                || lease.lateFee?.dailyAmount !== orign.lateFee?.dailyAmount
                || lease.lateFee?.sinote !== orign.lateFee?.sinote
                || lease.lateFee?.laterDays !== orign.lateFee?.laterDays
                || lease.foregift?.amount !== orign.foregift?.amount
                || lease.foregift?.sinote !== orign.foregift?.sinote
                || lease.tenancy?.start !== orign.tenancy?.start
                || lease.tenancy?.sumonth !== orign.tenancy?.sumonth
                || lease.peopless !== orign.peopless
                || lease.special !== orign.special
                || lease.remarks !== orign.remarks
        }
        setSavable(bool)
    }, [lease, orign])
    const updateLease = () => {
        update(theId, prev => lease).then(() => {
            router.push('/')
        }).catch(ex => {
            setWarning("Failed to save the lease")
        })
    }
    return <>
        <Head>
            <title>修改租约</title>
            <meta name="description" content="修改房屋租约" />
        </Head>
        <Layout warning={warning}>
            <div className="flex justify-between items-center">
                <h1 className="m-2 heading-1">修改租约（租房合同）</h1>
                <div className="m-2" title="至少双方姓名都填写后才能保存">
                    <button className="px-2 py-1 rounded text-bg-secondary 
                    disabled-hover-secondary disabled:border-0 active:border-2"
                        disabled={!savable} onClick={() => updateLease()}>
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

export default Edit
