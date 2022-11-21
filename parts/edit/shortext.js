import PropTypes from 'prop-types'

function Shortext({ shortext, widthClass, placeholder, onChanged }) {
    return <div className='flex flex-row w-fit p-1'>
        <span className='flex-none w-fit p-1'>{shortext.k}</span>
        <input type='text' className={`flex-none rounded ${widthClass} px-3 py-2 text-bg-primary text-center placeholder:italic`}
            onChange={e => {
                onChanged(e.target.value)
            }} value={shortext.v} placeholder={placeholder} />
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
