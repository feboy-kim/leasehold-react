import PropTypes from 'prop-types'
import { useState } from 'react'

function TextEdit({ shortext, caption, maxLen, theClass, placeholder, onChanged }) {
    const [text, setext] = useState(shortext)
    return <div className={theClass}>
        <label className='flex flex-row sm:flex-col'>
            <span className='flex-none self-center'>{caption}</span>
            <input type='text' className='flex-1 min-w-0 rounded p-1 foreground-base background-base text-center placeholder:italic'
                onChange={e => {
                    setext(e.target.value)
                }} value={text} placeholder={placeholder} maxLength={maxLen} onBlur={() => {
                    if (text.trim() !== shortext) onChanged(text.trim())
                }} />
        </label>
    </div>
}

TextEdit.propTypes = {
    shortext: PropTypes.string.isRequired,
    maxLen: PropTypes.number,
    caption: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    theClass: PropTypes.string,
    onChanged: PropTypes.func.isRequired
}
TextEdit.defaultProps = {
    maxLen: 8,
    shortext: '',
    placeholder: ''
}

export default TextEdit
