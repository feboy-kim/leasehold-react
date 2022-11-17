import PropTypes from 'prop-types'
import DatePicker from './edit/date-picker'
import Fieldata from './edit/fieldata'
import GroupLine from './edit/group-line'
import InputNum from './edit/input-num'
import Shortext from './edit/shortext'

function LeaseEdit({ lease, onChanged }) {
    return <>
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "标题：", v: lease.heading }} onChanged={d => {
                    onChanged({ heading: d })
                }} />
            </div>
        </div>
        <GroupLine titlead='出租方（甲方）' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "姓名：", v: lease.lessor[0] }} onChanged={d => {
                    const person = [...lease.lessor]
                    person[0] = d
                    onChanged({ lessor: person })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "身份证号：", v: lease.lessor[1] }} onChanged={d => {
                    const person = [...lease.lessor]
                    person[1] = d
                    onChanged({ lessor: person })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "联系电话：", v: lease.lessor[2] }} onChanged={d => {
                    const person = [...lease.lessor]
                    person[2] = d
                    onChanged({ lessor: person })
                }} />
            </div>
        </div>
        <GroupLine titlead='承租方（乙方）' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "姓名：", v: lease.lessee[0] }} onChanged={d => {
                    const person = [...lease.lessee]
                    person[0] = d
                    onChanged({ lessee: person })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "身份证号：", v: lease.lessee[1] }} onChanged={d => {
                    const person = [...lease.lessee]
                    person[1] = d
                    onChanged({ lessee: person })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "联系电话：", v: lease.lessee[2] }} onChanged={d => {
                    const person = [...lease.lessee]
                    person[2] = d
                    onChanged({ lessee: person })
                }} />
            </div>
        </div>
        <GroupLine titlead='房屋情况' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "城市：", v: lease.aboutent.city }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, city: d } })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "详细地址：", v: lease.aboutent.address }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, address: d } })
                }} />
            </div>
            <div className='col-span-2'>
                <Fieldata fieldata={{ k: "产权证明：", v: lease.aboutent.cert }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, cert: d } })
                }} />
            </div>
        </div>
        <GroupLine titlead='租期' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <DatePicker caption='开始日期：' ymdate={lease.tenancy.start} onChanged={d => {
                    onChanged({ tenancy: { ...lease.tenancy, start: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "期限（月）：", v: lease.tenancy.sumonth }} onChanged={d => {
                    onChanged({ tenancy: { ...lease.tenancy, sumonth: d } })
                }} />
            </div>
        </div>
        <GroupLine titlead='租金（￥）' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "金额（月）：", v: lease.rentFee.monthAmount }} onChanged={d => {
                    onChanged({ rentFee: { ...lease.rentFee, monthAmount: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "大写数目：", v: lease.rentFee.sinote }} onChanged={d => {
                    onChanged({ rentFee: { ...lease.rentFee, sinote: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "付款周期（月）：", v: lease.rentFee.payPeriod }} onChanged={d => {
                    onChanged({ rentFee: { ...lease.rentFee, payPeriod: d } })
                }} />
            </div>
        </div>
        <GroupLine titlead='滞纳金（￥）' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "金额（日）：", v: lease.lateFee.dailyAmount }} onChanged={d => {
                    onChanged({ lateFee: { ...lease.lateFee, dailyAmount: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "大写数目：", v: lease.lateFee.sinote }} onChanged={d => {
                    onChanged({ lateFee: { ...lease.lateFee, sinote: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "最长延期（日）：", v: lease.lateFee.laterDays }} onChanged={d => {
                    onChanged({ lateFee: { ...lease.lateFee, laterDays: d } })
                }} />
            </div>
        </div>
        <GroupLine titlead='租赁押金（￥）' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "押金金额：", v: lease.foregift.amount }} onChanged={d => {
                    onChanged({ foregift: { ...lease.foregift, amount: d } })
                }} />
            </div>
            <div className='col-span-1'>
                <Shortext shortext={{ k: "大写数目：", v: lease.foregift.sinote }} onChanged={d => {
                    onChanged({ foregift: { ...lease.foregift, sinote: d } })
                }} />
            </div>
        </div>
        <GroupLine titlead='其他' />
        <div className='p-1 mx-1 grid-responsive'>
            <div className='col-span-1'>
                <InputNum inumber={{ k: "限住人数：", v: lease.peopless }} onChanged={d => {
                    onChanged({ peopless: d })
                }} />
            </div>
        </div>
        <div className='p-1 mx-1'>
            <Fieldata fieldata={{ k: "特殊规定：", v: lease.special }} onChanged={d => {
                onChanged({ special: d })
            }} />
        </div>
        <div className='p-1 mx-1'>
            <Fieldata fieldata={{ k: "备注：", v: lease.remarks }} linage={3} onChanged={d => {
                onChanged({ remarks: d })
            }} />
        </div>
    </>
}

LeaseEdit.propTypes = {
    lease: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default LeaseEdit
