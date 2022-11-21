import PropTypes from 'prop-types'

function GroupLine({ titlead }) {
    return <div className='flex flex-row items-center'>
        <span className='flex-none font-semibold p-1'>{titlead}</span>
        <span className='flex-auto h-px bg-accent-translucent px-1'></span>
    </div>
}

GroupLine.propTypes = {
    titlead: PropTypes.string.isRequired
}

export default GroupLine
