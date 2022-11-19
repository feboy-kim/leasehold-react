import PropTypes from 'prop-types'

function Fieldata({ fieldata, linage, onChanged }) {
    return <div className='flex flex-row w-full m-1 px-1'>
        <span className='flex-none w-fit py-1'>{fieldata.k}</span>
        {linage > 1
            ? <textarea value={fieldata.v} className='flex-1 px-2 py-1 text-slate-700'
                onChange={e => {
                    onChanged(e.target.value)
                }} rows={linage} placeholder={fieldata.p} />
            : <input type='text' value={fieldata.v} className='flex-1 rounded px-2 py-1 text-slate-700'
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
