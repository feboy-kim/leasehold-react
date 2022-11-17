import PropTypes from 'prop-types'

function InputNum({ inumber, onChanged }) {
    return <div className='flex flex-row w-fit p-1'>
        <span className='flex-none w-fit'>{inumber.k}</span>
        <input type="number" className='flex-1 rounded w-full max-w-sm my-text-editor'
            value={inumber.v} onChange={e => {
                onChanged(Number(e.target.value))
            }} />
    </div>
}

InputNum.propTypes = {
    inumber: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default InputNum
