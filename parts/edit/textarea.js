import PropTypes from 'prop-types'
import { useState } from 'react'

function TextArea({ inputext, caption, placeholder, linage, onChanged }) {
    const [text, setext] = useState(inputext)

    return <div className='flex flex-row w-full'>
        <span className='flex-none'>{caption}</span>
        <textarea value={text} className='flex-1 p-1 foreground-base background-base placeholder:italic'
            onChange={e => {
                setext(e.target.value)
            }} rows={linage} placeholder={placeholder} maxLength={999} onBlur={() => {
                if (text.trim() !== inputext) onChanged(text.trim())
            }} />
    </div>
}

TextArea.propTypes = {
    inputext: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    linage: PropTypes.number,
    onChanged: PropTypes.func.isRequired
}
TextArea.defaultProps = {
    linage: 2
}

export default TextArea
