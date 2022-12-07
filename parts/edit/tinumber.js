import PropTypes from 'prop-types'

function Tinumber({ theNumber, caption, maxNumber, minNumber, title, postfix, theClass, onChanged }) {

    return <div className={theClass}>
        <label className=' flex flex-nowrap items-center'>
            <span className='pr-1'>{caption}</span>
            <input type="number" className='rounded p-1 foreground-base background-base text-center'
                value={theNumber} onChange={e => {
                    const n = Number(e.target.value)
                    if (!isNaN(n) && n >= 0 && n <= maxNumber) onChanged(n)
                }} min={minNumber} max={maxNumber} title={title} />
            <span className='pl-1'>{postfix}</span>
        </label>
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
