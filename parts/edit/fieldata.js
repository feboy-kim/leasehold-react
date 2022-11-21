import PropTypes from 'prop-types'

function Fieldata({ fieldata, linage, onChanged }) {
    return <div className='flex flex-row w-full m-1 px-1'>
        <span className='flex-none w-fit py-1'>{fieldata.k}</span>
        {linage > 1
            ? <textarea value={fieldata.v} className='flex-1 px-3 py-2 m-1 text-bg-primary placeholder:italic'
                onChange={e => {
                    onChanged(e.target.value)
                }} rows={linage} placeholder={fieldata.p} />
            : <input type='text' value={fieldata.v} className='flex-1 rounded px-3 py-2 mx-1 text-bg-primary text-center placeholder:italic'
                onChange={e => {
                    onChanged(e.target.value)
                }} placeholder={fieldata.p} />
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
