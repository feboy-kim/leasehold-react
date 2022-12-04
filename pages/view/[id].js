import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../parts/layout"
import { get } from "idb-keyval";
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import LeaseView from "../../parts/lease-view"
import ViewArticle from "../../parts/view/view-article";

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
    const alterLease = () => {
        router.push(`/edit/${id}`)
    }
    return <>
        <Head>
            <title>预览合同</title>
            <meta name="description" content="预览完整的房屋租约合同" />
        </Head>
        <Layout warning={warning} heading='浏览合同'
            lastent={{ title: '修改合同', onClick: () => alterLease(), picon: PencilSquareIcon, label: "修改" }}>
            {lease && <LeaseView lease={lease} />}
            <div className='p-1 max-w-4xl md:mx-auto'>
                <ViewArticle caption="签字处">
                    <div className='grid gap-1 grid-cols-2'>
                        <p className="col-span-2">本合同一式两份，甲乙双方各持一份，合同自双方签字并留指印之日起生效。</p>
                        <div>
                            <p className="py-1">甲方：</p>
                            <p className='flex flex-row gap-1'>
                                <span className='w-fit'>签于：</span>
                                <span className='w-16 text-right'>年</span>
                                <span className='w-8 text-right'>月</span>
                                <span className='w-8 text-right'>日</span>
                            </p>
                        </div>
                        <div>
                            <p className="py-1">乙方：</p>
                            <p className='flex flex-row gap-1'>
                                <span className='w-fit'>签于：</span>
                                <span className='w-16 text-right'>年</span>
                                <span className='w-8 text-right'>月</span>
                                <span className='w-8 text-right'>日</span>
                            </p>
                        </div>
                    </div>
                </ViewArticle>
            </div>
        </Layout>
    </>
}

export default View
