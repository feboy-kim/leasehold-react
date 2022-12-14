import { Disclosure, Transition } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types'

function TopicsSide({ points }) {
    return <aside className="p-1 rounded border-translucent print:hidden">
        {points?.map(point => <div key={point.k} className='first:pt-2 last:pb-2'>
            <Disclosure>
                <Disclosure.Button className='px-2 py-1 opacity-75'>
                    <div className="inline align-middle">{point.k}</div>
                    <ChevronRightIcon className='w-5 h-5 ui-open:rotate-90 ui-open:transform inline' />
                </Disclosure.Button>
                <Transition enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel className='px-6 opacity-75'>
                        {point.v}
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>)}
    </aside>
}

TopicsSide.propTypes = {
    points: PropTypes.array.isRequired
}

export default TopicsSide
