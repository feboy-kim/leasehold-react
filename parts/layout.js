import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import VectorBrand from './svgs/vector-brand'
import { PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import VectorFeboy from './svgs/vector-feboy'

function Layout({ children }) {
    const router = useRouter()
    return <div className='container'>
        <header className='m-1 print:hidden'>
            <nav className='flex flex-row justify-between items-end'>
                <div className='flex-none'>
                    <Link href="/">
                        <VectorBrand factor={2} />
                    </Link>
                </div>
                <div className='flex-none'>
                    <Link href='/edit' hidden={router.pathname === '/edit'}>
                        <div className='group px-2 py-1 rounded hover:bg-slate-600 active:bg-stone-700                         '>
                            <PlusIcon className='w-6 h-6 stroke-2 inline 
                            group-hover:stroke-amber-200 group-active:stroke-amber-300' />
                            <span className='inline-block font-medium align-middle 
                            group-hover:text-amber-200 group-active:text-amber-300'>合同</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
        <main className='m-1 min-h-screen'>{children}</main>
        <footer className='m-1 print:hidden'>
            <div className='p-1 flex flex-row gap-1'>
                <VectorFeboy factor={1} />
                {format(new Date(), 'yyyy')} by Feboy
            </div>
        </footer>
    </div>
}

Layout.propTypes = {
    children: PropTypes.array.isRequired
}

export default Layout
