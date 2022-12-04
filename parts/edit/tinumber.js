import PropTypes from 'prop-types'
import { useState } from 'react'

function Tinumber({ theNumber, caption, maxNumber, minNumber, title, postfix, theClass, onChanged }) {
    const [num, setNum] = useState(theNumber)

    return <div className={theClass}>
        <label>
            {caption}
            <input type="number" className='rounded p-1 foreground-base background-base text-center'
                value={num} onChange={e => {
                    const n = Number(e.target.value)
                    if (!isNaN(n) && n >= 0 && n <= maxNumber) setNum(n)
                }} min={minNumber} max={maxNumber} onBlur={() => {
                    if (num !== theNumber) onChanged(num)
                }} title={title} />
        </label>
        <span className='pl-1 self-center'>{postfix}</span>
    </div>
}

Tinumber.propTypes = {
    caption: PropTypes.string.isRequired,
    theNumber: PropTypes.number,
    maxNumber: PropTypes.number,
    title: PropTypes.string,
    theClass: PropTypes.string,
    postfix: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired
}
Tinumber.defaultProps = {
    maxNumber: 999999,
    minNumber: 0
}

export default Tinumber
