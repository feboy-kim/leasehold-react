import PropTypes from 'prop-types'

function BorderedBlock({ picon, label, title }) {
    const Picon = picon
    return <div title={title}
        className='p-1 w-fit border-accent rounded group-disabled:opacity-50 
        hover:text-bg-accent group-disabled:hover:text-bg-primary active:rounded-xl group-disabled:active:rounded'>
        {picon && <Picon className='w-6 h-6 inline' />}
        {label && <div className='inline align-middle pl-1'>{label}</div>}
    </div>
}

BorderedBlock.propTypes = {
    picon: PropTypes.object,
    label: PropTypes.string,
    title: PropTypes.string
}

export default BorderedBlock
