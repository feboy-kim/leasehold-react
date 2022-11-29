import PropTypes from 'prop-types'

function AccentIcon({ picon, label, title, disabled }) {
    const Picon = picon

    return <div title={disabled ? title : ''} className={disabled
        ? 'px-3 py-2 w-fit text-bg-accent border-primary rounded opacity-50'
        : 'px-3 py-2 w-fit text-bg-accent border-primary rounded hover:rounded-2xl active:rounded-3xl'}>
        <Picon className='w-5 h-5 inline' />
        {label && <div className='inline align-middle pl-1'>{label}</div>}
    </div>
}

AccentIcon.propTypes = {
    picon: PropTypes.object.isRequired,
    label: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool
}

export default AccentIcon
