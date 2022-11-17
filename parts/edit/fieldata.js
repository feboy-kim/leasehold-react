import PropTypes from 'prop-types'

function Fieldata({ fieldata, linage, onChanged }) {
    return <div className='flex flex-row w-full p-1'>
        <span className='flex-none w-fit'>{fieldata.k}</span>
        {linage > 1
            ? <textarea value={fieldata.v} className='flex-1 my-text-editor w-full'
                onChange={e => {
                    onChanged(e.target.value)
                }} rows={linage} />
            : <input type='text' value={fieldata.v} className='flex-1 rounded w-full my-text-editor'
                onChange={e => {
                    onChanged(e.target.value)
                }} />
        }
    </div>
}

Fieldata.propTypes = {
    fieldata: PropTypes.object.isRequired,
    linage: PropTypes.number,
    onChanged: PropTypes.func.isRequired
}
Fieldata.defaultProps = {
    linage: 1
}

export default Fieldata
