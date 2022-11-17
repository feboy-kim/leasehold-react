import PropTypes from 'prop-types'

function GroupLine({ titlead }) {
    return <div className='flex flex-row items-center'>
        <span className='flex-none font-semibold pr-1'>{titlead}</span>
        <div className='flex-1 h-px bg-slate-500 px-1 opacity-30'></div>
    </div>
}

GroupLine.propTypes = {
    titlead: PropTypes.string.isRequired
}

export default GroupLine
