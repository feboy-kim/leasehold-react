import PropTypes from 'prop-types'
import { useState } from 'react'

function Shortext({ shortext, widthClass, placeholder, onChanged }) {
    const [text, setext] = useState(shortext.v)

    return <div className='flex flex-row w-fit items-center'>
        <span className='flex-none w-fit'>{shortext.k}</span>
        <input type='text' className={`flex-none rounded ${widthClass} px-3 py-2 text-bg-primary text-center placeholder:italic`}
            onChange={e => {
                setext(e.target.value.trim())
            }} value={text} placeholder={placeholder} maxLength={99} onBlur={() => {
                if(text !== shortext.v) onChanged(text)
            }} />
    </div>
}

Shortext.propTypes = {
    shortext: PropTypes.object.isRequired,
    widthClass: PropTypes.string,
    placeholder: PropTypes.string,
    onChanged: PropTypes.func.isRequired
}
Shortext.defaultProps = {
    widthClass: 'w-52',
    placeholder: ''
}

export default Shortext
