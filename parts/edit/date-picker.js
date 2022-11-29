import PropTypes from 'prop-types'
import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { monthSundays, weekDayNames } from '../../models/date-helper'
import { Popover } from '@headlessui/react'
import { format, addMonths, subMonths } from 'date-fns'

function ArrowButton({ onClicked, disabled, children }) {
    return <button className='flex-none p-2 hover:bg-translucent disabled:text-bg-disabled'
        onClick={onClicked} disabled={disabled}>
        {children}
    </button>
}

function Calendar({ selectedate, onSelected }) {
    const [ymdate, setYmdate] = useState(selectedate)
    return <div className='text-bg-popover p-6 rounded-lg'>
        <div className='flex justify-between'>
            <ArrowButton onClicked={() => { setYmdate(prev => subMonths(prev, 1)) }} disabled={ymdate < subMonths(new Date(), 2)}>
                <ArrowLeftIcon className='w-5 h-5' />
            </ArrowButton>
            <span className='flex-1 text-center p-2'>{format(ymdate, 'yyyy年MM月')}</span>
            <ArrowButton onClicked={() => { setYmdate(prev => addMonths(prev, 1)) }} disabled={ymdate > addMonths(new Date(), 2)}>
                <ArrowRightIcon className='w-5 h-5' />
            </ArrowButton>
        </div>
        <table className='table-auto'>
            <thead>
                <tr>
                    {weekDayNames.map((wd, i) => <th key={i}>
                        <span className='p-2 inline-block opacity-75'>{wd}</span>
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {monthSundays(ymdate).map(sd => <tr key={sd}>
                    {weekDayNames.map((d, i) => new Date(sd.valueOf() + i * 24 * 3600000)).reduce((prev, current) => {
                        prev.push(current)
                        return prev
                    }, []).map((d, i) => {
                        const useless = d.getMonth() !== ymdate.getMonth()
                        const tdClass = useless ? '' : 'text-center hover:bg-translucent'
                        const dtClass = d.getTime() !== selectedate.getTime() ? 'p-2' : 'p-2 outline outline-1'
                        return <td className={tdClass} key={i}>
                            <div hidden={useless} onClick={() => {
                                onSelected(d)
                            }} className='cursor-pointer'>
                                <div className={dtClass}>
                                    {d.getDate()}
                                </div>
                            </div>
                        </td>
                    })}
                </tr>)}
            </tbody>
        </table>
    </div>
}

function DatePicker({ caption, ymdate, onChanged }) {
    return <div className='flex flex-row w-fit'>
        <span className='flex-none w-fit px-1 py-2'>{caption}</span>
        <div className='flex-1'>
            <Popover className='relative'>
                {({ open }) => <>
                    <Popover.Button className='px-3 py-2 rounded w-fit hover:bg-primary-translucent border-accent-translucent'>
                        <div className='inline align-middle pr-1'>{format(ymdate, 'yyyy年MM月dd日')}</div>
                        {open ? <ChevronUpIcon className="h-5 w-5 inline" aria-hidden='true' />
                            : <ChevronRightIcon className="h-5 w-5 inline" aria-hidden='true' />}
                    </Popover.Button>
                    <Popover.Overlay className='fixed inset-1 bg-primary-translucent z-10' />
                    <Popover.Panel className='absolute z-20 w-80'>
                        {({ close }) =>
                            <Calendar selectedate={ymdate} onSelected={d => {
                                onChanged(d)
                                close()
                            }} />
                        }
                    </Popover.Panel>
                </>}
            </Popover>
        </div>
    </div>
}

DatePicker.propTypes = {
    caption: PropTypes.string.isRequired,
    ymdate: PropTypes.instanceOf(Date).isRequired,
    onChanged: PropTypes.func.isRequired
}

export default DatePicker
