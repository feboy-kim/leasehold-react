import PropTypes from 'prop-types'

function BorderlessBox({ picon, label, title, disabled }) {
    const Picon = picon

    return <div title={disabled ? '' : title} className={disabled
        ? 'p-1 w-fit opacity-50'
        : 'p-1 w-fit hover:text-bg-accent active:rounded-xl'}>
        {picon && <Picon className='w-5 h-5 inline' />}
        {label && <div className='inline align-middle pl-1'>{label}</div>}
    </div>
}

BorderlessBox.propTypes = {
    picon: PropTypes.object,
    label: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool
}

export default BorderlessBox
