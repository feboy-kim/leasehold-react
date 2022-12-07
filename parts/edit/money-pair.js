import Shortext from "./shortext"
import Tinumber from "./tinumber"
import PropTypes from 'prop-types'

function MoneyPair({ caption, money, theClass, onChanged }) {
    return <div className={theClass}>
        <div className="flex flex-nowrap gap-1 items-center w-full">
            <Tinumber theNumber={money.amount} caption={caption} onChanged={d => {
                onChanged({ ...money, amount: d })
            }} postfix='元' maxNumber={999999} theClass='basis-1/2' />
            <Shortext shortext={money.sinote} caption="大写金额" onChanged={d => {
                onChanged({ ...money, sinote: d })
            }} placeholder='中文大写金额' maxLen={16} theClass='basis-1/2 max-w-sm text-center' />
        </div>
    </div>
}

MoneyPair.propTypes = {
    caption: PropTypes.string,
    theClass: PropTypes.string,
    money: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default MoneyPair
