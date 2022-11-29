import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../parts/layout"
import LeaseText from "../../parts/lease-text"
import { get } from "idb-keyval";
import Link from "next/link"
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { rentPoints } from "../../models/rent-points"
import TopicsSide from "../../parts/topics-side"

function View() {
    const router = useRouter()
    const { id } = router.query
    const [warning, setWarning] = useState("")
    const [lease, setLease] = useState()

    useEffect(() => {
        const nId = Number(id)
        if (isNaN(nId)) {
            setWarning('Route query id must be a number')
        } else {
            setWarning('')
            get(nId).then(d => {
                setLease(d)
            }).catch(e => {
                setWarning('Failed to get the lease')
            })
        }
    }, [id])

    return <>
        <Head>
            <title>预览合同</title>
            <meta name="description" content="预览完整的房屋租约合同" />
        </Head>
        <Layout warning={warning}>
            <div className="relative max-w-full xl:max-w-3xl print:hidden">
                <h2 className="p-1 heading-2">浏览合同</h2>
                <Link href={`/edit/${id}`} className='px-2 py-1 rounded hover:text-bg-accent active:border-2 absolute top-1 right-1'>
                    <PencilSquareIcon className='w-5 h-5 inline' />
                    <div className="inline align-middle">修改</div>
                </Link>
            </div>
            <div className="relative">
                {lease && <div className="max-w-3xl">
                    <LeaseText lease={lease} />
                </div>}
                <div className="hidden xl:block absolute top-8 right-2 text-bg-primary w-72 2xl:w-80">
                    <TopicsSide points={rentPoints} />
                </div>
            </div>
        </Layout>
    </>
}

export default View
