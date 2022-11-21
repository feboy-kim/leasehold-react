import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import VectorBrand from './svgs/vector-brand'
import { PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import VectorFeboy from './svgs/vector-feboy'

function Layout({ children, warning }) {
    const router = useRouter()
    return <div className='container'>
        <header className='m-1 print:hidden'>
            <nav className='flex flex-row justify-between items-end'>
                <div className='flex-none'>
                    <Link href="/">
                        <VectorBrand factor={2} />
                    </Link>
                </div>
                <p className='flex-1 p-1 text-red-600 dark:text-red-300 text-center align-middle'>{warning}</p>
                <div className='flex-none'>
                    <Link href='/edit' hidden={router.pathname.startsWith('/edit')}>
                        <div className='px-2 py-1 rounded hover:text-bg-accent active:border-2'>
                            <PlusIcon className='w-6 h-6 stroke-2 inline' />
                            <span className='inline-block font-semibold align-middle'>合同</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
        <main className='m-1 text-bg-secondary'>
            {children}
        </main>
        <footer className='m-1 print:hidden'>
            <div className='p-1 flex flex-row gap-2'>
                <VectorFeboy factor={1} />
                {format(new Date(), 'yyyy')}
            </div>
        </footer>
    </div>
}

Layout.propTypes = {
    children: PropTypes.array.isRequired,
    warning: PropTypes.string
}

export default Layout
