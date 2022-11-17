import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import VectorBrand from './vector-brand'
import { PlusIcon } from '@heroicons/react/24/solid'

function Layout({ children }) {
    const router = useRouter()
    return <div className='container dark:text-neutral-200 text-neutral-800'>
        <header className='p-2 bg-slate-200 dark:bg-slate-800 print:hidden'>
            <nav className='flex flex-row justify-between items-end'>
                <div className='flex-none'>
                    <Link href="/">
                        <VectorBrand factor={2} />
                    </Link>
                </div>
                <div className='flex-none'>
                    <Link href='/edit' hidden={router.pathname === '/edit'}>
                        <div className='my-box-primary'>
                            <PlusIcon className='w-6 h-6 inline' />
                            <span className='inline-block align-middle'>租约</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
        <main className='p-2'>{children}</main>
        {/* <footer className='p-2 bg-slate-200 dark:bg-slate-800 print:hidden'></footer> */}
    </div>
}

Layout.propTypes = {
    children: PropTypes.array.isRequired
}

export default Layout
