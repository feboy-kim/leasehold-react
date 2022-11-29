import PropTypes from 'prop-types'
import { useState } from 'react'

function InputNum({ theNumber, caption, maxNumber, postfix, widthClass, onChanged }) {
    const [num, setNum] = useState(theNumber)

    return <div className='flex flex-row w-fit items-center'>
        <span className='flex-none w-fit'>{caption}</span>
        <input type="number" className={`flex-none rounded ${widthClass} px-3 py-2 text-bg-primary text-center`}
            value={num} onChange={e => {
                const n = Number(e.target.value)
                if (!isNaN(n) && n >= 0 && n <= maxNumber) setNum(n)
            }} min={0} max={maxNumber} onBlur={() => {
                if (num !== theNumber) onChanged(num)
            }} />
        <span className='flex-none w-fit'>{postfix}</span>
    </div>
}

InputNum.propTypes = {
    caption: PropTypes.string.isRequired,
    theNumber: PropTypes.number.isRequired,
    widthClass: PropTypes.string,
    maxNumber: PropTypes.number,
    postfix: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired
}
InputNum.defaultProps = {
    widthClass: 'w-20',
    maxNumber: 999999,
}

export default InputNum
