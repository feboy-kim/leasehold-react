import PropTypes from 'prop-types'

function VectorFeboy({ factor }) {
    const dimension = factor * 24
    const pathData = `M 6 6 Q 12 12 6 18 M 10 12 L 16 12 M 16 4 L 16 20`

    return <svg width={dimension} height={dimension} viewBox='0,0,24,24' xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id='lg1'>
                <stop stopColor='#4f46e5' offset="0%" />
                <stop stopColor='#6366f1' offset="100%" />
            </linearGradient>
            <linearGradient id='lg2'>
                <stop stopColor='#a855f7' offset="0%" />
                <stop stopColor='#9333ea' offset="100%" />
            </linearGradient>
        </defs>
        <title>J.H</title>
        <path d={pathData} stroke='url(#lg2)' strokeWidth={factor + 2} fill='transparent' strokeLinecap='round' />
        <circle cx={12} cy={12} r='10' stroke='url(#lg1)' strokeWidth={factor + 1} fill='transparent' />
    </svg>
}

VectorFeboy.propTypes = {
    factor: PropTypes.number.isRequired
}

export default VectorFeboy
