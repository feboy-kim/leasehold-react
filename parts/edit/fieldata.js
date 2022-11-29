import PropTypes from 'prop-types'
import { useState } from 'react'

function Fieldata({ fieldata, linage, onChanged }) {
    const [text, setext] = useState(fieldata.v)

    return <div className='flex flex-row w-full'>
        <span className='flex-none w-fit self-center'>{fieldata.k}</span>
        {linage > 1
            ? <textarea value={text} className='flex-1 px-3 py-2 text-bg-primary placeholder:italic'
                onChange={e => {
                    setext(e.target.value.trim())
                }} rows={linage} placeholder={fieldata.p} maxLength={999} onBlur={() => {
                    if(text !== fieldata.v) onChanged(text)
                }} />
            : <input type='text' value={text} className='flex-1 rounded px-3 py-2 text-bg-primary text-center placeholder:italic'
                onChange={e => {
                    setext(e.target.value.trim())
                }} placeholder={fieldata.p} maxLength={99} onBlur={() => {
                    if(text !== fieldata.v) onChanged(text)
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
