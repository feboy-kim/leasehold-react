import PropTypes from 'prop-types'
import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { monthSundays, weekDayNames } from '../../models/date-helper'
import { Popover } from '@headlessui/react'
import { format, addMonths, subMonths } from 'date-fns'

function ArrowButton({ onClicked, disabled, children }) {
    return <button className='flex-none p-2 hover:bg-stone-200 disabled:hover:bg-stone-200/10 disabled:text-slate-600/50'
        onClick={onClicked} disabled={disabled}>
        {children}
    </button>
}

function Calendar({ selectedate, onSelected }) {
    const [ymdate, setYmdate] = useState(selectedate)
    return <div className='bg-stone-100 text-slate-700 shadow-lg p-6 rounded-lg'>
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
                        <span className='p-2 inline-block opacity-70'>{wd}</span>
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
                        const tdClass = useless ? '' : 'text-center hover:bg-stone-200'
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
    return <div className='flex flex-row w-fit p-1'>
        <span className='flex-none w-fit p-1'>{caption}</span>
        <div className='flex-1 border hover:border-2 rounded'>
            <Popover className='relative'>
                <Popover.Button className='px-2 py-1 rounded w-40'>{format(ymdate, 'yyyy年MM月dd日')}</Popover.Button>
                <Popover.Overlay className='fixed inset-1 bg-slate-600/80' />
                <Popover.Panel className='absolute z-10 w-80'>
                    {({ close }) =>
                        <Calendar selectedate={ymdate} onSelected={d => {
                            onChanged(d)
                            close()
                        }} />
                    }
                </Popover.Panel>
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
