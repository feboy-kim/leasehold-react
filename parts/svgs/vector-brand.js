import PropTypes from 'prop-types'

function VectorBrand({ factor }) {
    const dimension = factor * 24
    const pathData = `M 0 0 Q 20 0 0 24 H 20 Q 0 24 20 0 Z`

    return <svg width={dimension} height={dimension} viewBox='0,0,24,24' xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id='lg1'>
                <stop stopColor='#a5b4fc' offset="0%" />
                <stop stopColor='#6366f1' offset="100%" />
            </linearGradient>
            <linearGradient id='lg2'>
                <stop stopColor='#a855f7' offset="0%" />
                <stop stopColor='#d8b4fe' offset="100%" />
            </linearGradient>
        </defs>
        <title>Brand</title>
        <path d={pathData} fill='url(#lg1)' />
        <circle cx={20 - factor / 2} cy={20 - factor / 2} r='4' stroke='url(#lg2)' strokeWidth={factor} fill='transparent' />
    </svg>
}

VectorBrand.propTypes = {
    factor: PropTypes.number.isRequired
}

export default VectorBrand
