import PropTypes from 'prop-types'

function InputNum({ inumber, postfix, widthClass, onChanged }) {
    return <div className='flex flex-row w-fit p-1'>
        <span className='flex-none w-fit p-1'>{inumber.k}</span>
        <input type="number" className={`flex-none rounded ${widthClass} p-1 text-slate-700`}
            value={inumber.v} onChange={e => {
                const n = Number(e.target.value)
                if (!isNaN(n) && n >= 0 && n <= 999999999) onChanged(n)
            }} min='1' />
        <span className='flex-none w-fit p-1'>{postfix}</span>
    </div>
}

InputNum.propTypes = {
    inumber: PropTypes.object.isRequired,
    widthClass: PropTypes.string,
    postfix: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired
}
InputNum.defaultProps = {
    widthClass: 'w-20'
}

export default InputNum
