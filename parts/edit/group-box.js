import PropTypes from 'prop-types'

function GroupBox({ titlead, children }) {
    return <div className='m-1'>
        <div className='py-1 flex flex-row items-center gap-1'>
            {titlead && <span className='flex-none font-semibold'>{titlead}</span>}
            <span className='flex-1 h-px bg-slate-500/50'></span>
        </div>
        <div className='flex flex-row flex-wrap sm:flex-nowrap items-center gap-1 justify-between'>
            {children}
        </div>
    </div>
}

GroupBox.propTypes = {
    titlead: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

export default GroupBox
