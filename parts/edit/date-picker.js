import PropTypes from 'prop-types'
import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { chineseYmdate, decreaseMonth, increaseMonth, monthSundays, weekDayNames } from '../../models/date-helper'
import { Popover } from '@headlessui/react'

function Calendar({ selectedate, onSelected }) {
    const [ymdate, setYmdate] = useState(selectedate)
    return <div className='bg-indigo-200 dark:bg-indigo-800 shadow-lg p-6'>
        <div className='flex justify-between'>
            <button className='flex-none p-2 hover:bg-slate-200 dark:hover:bg-slate-800'
                onClick={() => { setYmdate(prev => decreaseMonth(prev)) }}>
                <ArrowLeftIcon className='w-5 h-5' />
            </button>
            <span className='flex-1 text-center p-2'>{chineseYmdate(ymdate)}</span>
            <button className='flex-none p-2 hover:bg-slate-200 dark:hover:bg-slate-800'
                onClick={() => { setYmdate(prev => increaseMonth(prev)) }}>
                <ArrowRightIcon className='w-5 h-5' />
            </button>
        </div>
        <table className='table-auto'>
            <thead>
                <tr>
                    {weekDayNames.map((wd, i) => <th key={i}>
                        <span className='p-2 inline-block'>{wd}</span>
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
                        const tdClass = useless ? '' : 'text-center hover:bg-slate-200 dark:hover:bg-slate-800'
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
        <span className='flex-none w-fit'>{caption}</span>
        <div className='flex-1 border rounded border-slate-500 hover:border-purple-500 bg-slate-200 dark:bg-slate-800'>
            <Popover className='relative'>
                <Popover.Button className='px-2 py-1 rounded'>{chineseYmdate(ymdate, true)}</Popover.Button>
                <Popover.Overlay className='fixed inset-0 bg-slate-200 dark:bg-slate-800 opacity-80' />
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
