import ListCombox from "./list-combox"
import PropTypes from 'prop-types'

function percentages(firstext) {
    return [
        `${firstext}`,
        '百分之一',
        '百分之二',
        '百分之三',
        '百分之四',
        '百分之五',
        '百分之六',
        '百分之七',
        '百分之八',
        '百分之九',
        '百分之十'
    ]
}

function PercentList({ caption, firstext, selectedIndex, onSelectIndex, theClass }) {
    const items = percentages(firstext)
    return <div className={theClass}>
        <ListCombox items={items} caption={caption} selected={items[selectedIndex]} onSelect={it => {
            onSelectIndex(items.indexOf(it))
        }} />
    </div>
}

PercentList.propTypes = {
    caption: PropTypes.string,
    firstext: PropTypes.string,
    theClass: PropTypes.string,
    selectedIndex: PropTypes.number,
    onSelectIndex: PropTypes.func.isRequired
}

export default PercentList
