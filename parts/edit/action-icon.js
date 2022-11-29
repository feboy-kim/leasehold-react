import PropTypes from 'prop-types'

function ActionIcon({ picon, label, title }) {
    const Picon = picon

    return <div title={title} className='px-2 py-1 w-fit hover:text-bg-accent'>
        <Picon className='w-5 h-5 inline' />
        {label && <div className='inline align-middle pl-1'>{label}</div>}
    </div>
}

ActionIcon.propTypes = {
    picon: PropTypes.object.isRequired,
    label: PropTypes.string,
    title: PropTypes.string
}

export default ActionIcon
