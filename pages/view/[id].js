import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Layout from "../../parts/layout"
import { get } from "idb-keyval";
import { InformationCircleIcon, PencilSquareIcon, PrinterIcon } from '@heroicons/react/24/outline'
import LeaseView from "../../parts/lease-view"
import { useReactToPrint } from "react-to-print";

function View() {
    const router = useRouter()
    const { id } = router.query
    const [warning, setWarning] = useState("")
    const [lease, setLease] = useState()
    const viewRef = useRef(null)
    const onPrint = useReactToPrint({
        content: () => viewRef.current
    })

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
            <p className="p-2 m-2 border-b text-sm print:hidden opacity-75 max-w-4xl md:mx-auto">
                <InformationCircleIcon className="w-5 h-5 inline" />
                <span className="inline align-middle pl-1">以下为合同正文：</span>
            </p>
            {lease && <div>
                <LeaseView lease={lease} ref={viewRef} />
                <button onClick={onPrint}>Print PDF</button>
            </div>}
            <p className="p-2 m-2 border-t text-sm print:hidden opacity-75 max-w-4xl md:mx-auto">
                <PrinterIcon className="w-5 h-5 inline" />
                <span className="inline align-middle pl-1">使用浏览器中的打印功能或其他工具可以导出合同的PDF文件。</span>
            </p>
        </Layout>
    </>
}

export default View
