import Link from "next/link"
import { format } from 'date-fns'

function LeaseList({ leases }) {
    return <div className='p-1'>
        {leases && leases.length > 0 ? <div>
            <h2 className="p-1 m-1 text-lg text-semibold">现有合同</h2>
            <ul>
                {leases.map(lease => <li key={lease[0]}>
                    <Link href={`/edit/${lease[0]}`}>
                        <span
                            className='px-2 py-1 rounded hover:text-bg-accent active:border-2'>
                            {lease[1].lessor.name} + {lease[1].lessee.name},&nbsp; 
                            {format(new Date(lease[0]), 'yyyy年MM月dd日')} 》
                        </span>
                    </Link>
                </li>)}
            </ul></div> : <div className="m-2 flex justify-center">
            <Link href='/edit' className='w-fit'>
                <span className='px-3 py-2 rounded font-semibold hover:text-bg-accent active:border-2'>
                    新建一个租房合同 》
                </span>
            </Link>
        </div>}
    </div>
}

export default LeaseList
