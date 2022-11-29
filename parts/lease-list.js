import Link from "next/link"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { useRef, useState } from "react"
import PropTypes from 'prop-types'
import { leaseTitles } from '../models/lease-ready'
import AccentIcon from "./edit/accent-icon"
import { useRouter } from "next/router"
import ActionIcon from "./edit/action-icon"

function Confirm({ item, onConfirmed }) {
    const confirmation = useRef(null)
    return <div>
        {item && <Dialog open={item !== null}
            onClose={() => onConfirmed(null)} className='relative z-30' initialFocus={confirmation}>
            <div className="fixed inset-0 bg-primary-translucent p-4" aria-hidden='true' />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className='w-full max-w-sm rounded text-bg-accent'>
                    <Dialog.Title className='p-2 m-1 text-lg font-semibold'>删除合同</Dialog.Title>
                    <Dialog.Description className='px-2 m-1'>这将彻底删除相关的合同数据</Dialog.Description>
                    <p className="p-2 m-1 font-medium">
                        确定要删除合同《{`${item[1].lessor?.name} + ${item[1].lessee?.name}`}》吗？
                    </p>
                    <div className="flex justify-end gap-2 p-2 m-1">
                        <button className='px-2 py-1 focus:text-bg-secondary hover:text-bg-primary'
                            onClick={() => onConfirmed(item[0])} ref={confirmation}>确定</button>
                        <button className="px-2 py-1 focus:text-bg-secondary hover:text-bg-primary"
                            onClick={() => onConfirmed(null)}>取消</button>
                    </div>
                </Dialog.Panel></div>
        </Dialog>}
    </div>
}

function LeaseList({ leases, onRemove }) {
    const router = useRouter()
    const [selectedItem, setSelectedItem] = useState(null)

    return <div className='w-full xl:w-fit'>
        <h3 className="p-3 m-1 heading-3">现有合同</h3>
        <ul className="p-1 2xl:pr-48">
            {leases.map(lease => <li key={lease[0]} className='p-1 flex flex-row justify-between items-center space-x-2'>
                <Link href={`/view/${lease[0]}`} className='flex-1 lg:flex-none'>
                    <div className='px-2 py-1 hover:text-bg-accent w-full lg:w-fit'>
                        <span className="w-full lg:w-80 lg:inline-block">
                            {leaseTitles[lease[1].tIndex]}, {lease[1].lessor.name} + {lease[1].lessee.name}
                        </span>
                        <span className="hidden w-full lg:w-40 lg:inline-block">
                            &nbsp;{lease[1].aboutent?.city}
                        </span>
                        {` 》`}
                    </div>
                </Link>
                <div className="min-w-fit flex-none p-0 xl:pl-64 2xl:pl-72 xl:pr-96">
                    <button onClick={() => { router.push(`/edit/${lease[0]}`) }}>
                        <ActionIcon picon={PencilSquareIcon} title='修改'/>
                    </button>
                    <button onClick={() => { setSelectedItem(lease) }}>
                        <ActionIcon picon={TrashIcon} title='删除'/>
                    </button>
                </div>
            </li>)}
        </ul>
        <Confirm item={selectedItem} onConfirmed={d => {
            if (d !== null && !isNaN(d)) {
                onRemove(d)
            }
            setSelectedItem(null)
        }} />
    </div>
}

LeaseList.propTypes = {
    leases: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default LeaseList
