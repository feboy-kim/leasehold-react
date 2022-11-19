import PropTypes from 'prop-types'

function VectorFeboy({ factor }) {
    const dimension = factor * 24
    const pathData = `M 4 4 Q 12 12 4 20 M 8 12 L 16 12 M 20 4 Q 12 12 20 20`

    return <svg width={dimension} height={dimension} viewBox='0,0,24,24' xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id='lg'>
                <stop stopColor='#93c5fd' offset="0%" />
                <stop stopColor='#2563eb' offset="100%" />
            </linearGradient>
        </defs>
        <title>Feboy</title>
        <path d={pathData} stroke='url(#lg)' strokeWidth={factor} fill='transparent' />
        <circle cx={12} cy={12} r='11' stroke='url(#lg)' strokeWidth={factor} fill='transparent' />
    </svg>
}

VectorFeboy.propTypes = {
    factor: PropTypes.number.isRequired
}

export default VectorFeboy
