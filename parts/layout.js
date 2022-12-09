import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import VectorBrand from './svgs/vector-brand'
import { PlusIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import VectorFeboy from './svgs/vector-feboy'
import BorderedBlock from './edit/bordered-block'
import TopicsSide from '../parts/topics-side'
import { rentPoints } from '../models/rent-points'

function Layout({ children, warning, heading, lastent }) {
    const router = useRouter()
    return <div className='mx-auto max-w-7xl'>
        <header className='m-1 print:hidden grid grid-cols-4 gap-2 items-center'>
            <nav className='col-span-4 lg:col-span-3 flex flex-row gap-1 justify-between items-center'>
                <div className='flex-none'>
                    <Link href="/">
                        <VectorBrand factor={2} />
                    </Link>
                </div>
                {warning
                    ? <p className='flex-1 p-1 text-border-error text-center'>{warning}</p>
                    : <h2 className="flex-1 p-1 heading-2 text-center">{heading}</h2>
                }
                <div className='flex-none flex flex-row gap-2'>
                    <Link href='/edit' hidden={router.pathname.startsWith('/edit')} title='添加新合同'>
                        <BorderedBlock picon={PlusIcon} label='合同' />
                    </Link>
                    {lastent && <button title={lastent.title} onClick={lastent.onClick} disabled={lastent.disabled} className='group'>
                        <BorderedBlock picon={lastent.picon} label={lastent.label} />
                    </button>}
                </div>
            </nav>
            <h3 className='hidden lg:block lg:col-span-1 px-2 m-1 heading-3'>旁注</h3>
        </header>
        <main className='m-1 grid grid-cols-4 gap-2'>
            <div className='col-span-4 lg:col-span-3 text-bg-primary'>
                {children}
            </div>
            <div className="hidden lg:block lg:col-span-1 background-base">
                <TopicsSide points={rentPoints} />
            </div>
        </main>
        <footer className='m-1 print:hidden'>
            <div className='p-1 flex flex-row gap-1'>
                <VectorFeboy factor={1} />
                <span className='px-1 inline align-middle'>Seant</span>
                <span className='inline align-middle'>{format(new Date(), 'yyyy')}</span>
            </div>
        </footer>
    </div>
}

Layout.propTypes = {
    warning: PropTypes.string,
    heading: PropTypes.string,
    lastent: PropTypes.object
}

export default Layout
