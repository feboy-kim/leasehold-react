import PropTypes from 'prop-types'

function Shortext({ shortext, onChanged }) {
    return <div className='flex flex-row w-fit p-1'>
        <span className='flex-none w-fit'>{shortext.k}</span>
        <input type='text' value={shortext.v} className='flex-1 rounded w-full max-w-sm my-text-editor'
            onChange={e => {
                onChanged(e.target.value)
            }} />
    </div>
}

Shortext.propTypes = {
    shortext: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default Shortext
