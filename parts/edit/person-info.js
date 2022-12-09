import GroupBox from "./group-box"
import Shortext from "./shortext"
import TextEdit from "./textedit"
import PropTypes from 'prop-types'

function PersonInfo({ titlead, textail, person, onChanged }) {
    return <GroupBox titlead={titlead} textail={textail}>
        <Shortext shortext={person.name} caption={`${textail}姓名`} onChanged={d => {
            onChanged({ ...person, name: d })
        }} maxLen={6} theClass='self-end basis-full sm:basis-2/7' />
        <TextEdit shortext={person.identity} caption="身份证号" onChanged={d => {
            onChanged({ ...person, identity: d })
        }} placeholder='身份证件号码' maxLen={20} theClass='basis-full sm:basis-3/7' />
        <TextEdit shortext={person.contact} caption={`${textail}电话`} onChanged={d => {
            onChanged({ ...person, contact: d })
        }} placeholder='联系电话号码' maxLen={12} theClass='basis-full sm:basis-2/7' />
    </GroupBox>
}

PersonInfo.propTypes = {
    titlead: PropTypes.string,
    textail: PropTypes.string,
    person: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default PersonInfo
