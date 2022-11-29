import { Combobox, Transition } from "@headlessui/react"
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"
import PropTypes from 'prop-types'

function ListCombox({ items, caption, selected, onSelect }) {
    return <div className='flex flex-row w-fit items-center'>
        <span className='flex-none w-fit px-2 py-1'>{caption}</span>
        <Combobox value={selected} onChange={onSelect}>
            {({ open }) => <div className="relative">
                <Combobox.Button className='px-3 py-2 border-accent-translucent rounded hover:bg-primary-translucent'>
                    <div className='inline align-middle pr-1'>{selected}</div>
                    {open ? <ChevronUpIcon className="h-5 w-5 inline" aria-hidden='true' />
                        : <ChevronRightIcon className="h-5 w-5 inline" aria-hidden='true' />}
                </Combobox.Button>
                {open && <>
                    <div className="fixed inset-1 bg-primary-translucent z-10"></div>
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Combobox.Options className='absolute text-bg-popover rounded p-1 w-full z-20'>
                            {items.map(it => <Combobox.Option key={it} value={it}
                                className='w-full rounded p-1 text-center ui-active:text-bg-accent'>
                                {it}
                            </Combobox.Option>)}
                        </Combobox.Options>
                    </Transition>
                </>}
            </div>}
        </Combobox>
    </div>
}

ListCombox.propTypes = {
    items: PropTypes.array.isRequired,
    caption: PropTypes.string.isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired
}

export default ListCombox
