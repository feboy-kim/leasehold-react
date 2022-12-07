import PropTypes from 'prop-types'

function ViewArticle({ caption, children }) {
    return <div>
        <p className='text-lg font-medium print:text-base'>{caption}</p>
        <div className='pl-2 pr-1 py-1 print:text-sm'>
            {children}
        </div>
    </div>
}

ViewArticle.propTypes = {
    caption: PropTypes.string.isRequired,
}

export default ViewArticle
