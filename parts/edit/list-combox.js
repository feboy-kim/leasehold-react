import { Combobox, Transition } from "@headlessui/react"
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"
import PropTypes from 'prop-types'

function ListCombox({ items, caption, selected, onSelect }) {
    return <div className='flex flex-row items-center'>
        <p className='flex-none'>{caption}</p>
        <Combobox value={selected} onChange={onSelect}>
            {({ open }) => <div className="relative">
                <Combobox.Button className='px-2 py-1 border-translucent rounded hover:background-base'>
                    <div className='inline align-middle p-1'>{selected}</div>
                    {open ? <ChevronUpIcon className="h-5 w-5 inline" aria-hidden='true' />
                        : <ChevronRightIcon className="h-5 w-5 inline" aria-hidden='true' />}
                </Combobox.Button>
                {open && <>
                    <div className="fixed inset-1 bg-translucent z-10"></div>
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Combobox.Options className='absolute text-bg-popover rounded p-2 w-full z-20'>
                            {items.map(it => <Combobox.Option key={it} value={it}
                                className='rounded p-1 text-center ui-active:bg-translucent'>
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
