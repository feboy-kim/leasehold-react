import PropTypes from 'prop-types'
import DatePicker from './edit/date-picker'
import GroupBox from './edit/group-box'
import Tinumber from './edit/tinumber'
import Shortext from './edit/shortext'
import { addMonths, format } from 'date-fns'
import ListCombox from './edit/list-combox'
import { leaseTitles } from '../models/lease-ready'
import BoolRadios from './edit/bool-radios'
import TextEdit from './edit/textedit'

function LeaseEdit({ lease, onChanged }) {
    return <div className='p-1 max-w-4xl md:mx-auto'>
        <div className='p-1'>
            <ListCombox items={leaseTitles} caption="合同标题：" selected={leaseTitles[lease.tIndex]} onSelect={it => {
                onChanged({ tIndex: leaseTitles.indexOf(it) })
            }} />
        </div>
        <GroupBox titlead='出租方（甲方）'>
            <Shortext shortext={lease.lessor.name} caption="甲方姓名：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, name: d } })
            }} maxLen={6} theClass='self-center sm:self-end basis-full sm:basis-2/7' />
            <TextEdit shortext={lease.lessor.identity} caption="身份证号：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, identity: d } })
            }} placeholder='身份证号码' maxLen={20} theClass='basis-full sm:basis-3/7' />
            <TextEdit shortext={lease.lessor.contact} caption="甲方电话：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, contact: d } })
            }} placeholder='电话号码' maxLen={12} theClass='basis-full sm:basis-2/7' />
        </GroupBox>
        <GroupBox titlead='承租方（乙方）'>
            <Shortext shortext={lease.lessee.name} caption="乙方姓名：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, name: d } })
            }} maxLen={6} theClass='self-center sm:self-end basis-full sm:basis-2/7' />
            <TextEdit shortext={lease.lessee.identity} caption="身份证号：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, identity: d } })
            }} placeholder='身份证号码' maxLen={20} theClass='basis-full sm:basis-3/7' />
            <TextEdit shortext={lease.lessee.contact} caption="乙方电话：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, contact: d } })
            }} placeholder='电话号码' maxLen={12} theClass='basis-full sm:basis-2/7' />
        </GroupBox>
        <GroupBox titlead='房屋情况'>
            <Shortext shortext={lease.aboutent.city} caption="所在城市：" onChanged={d => {
                onChanged({ aboutent: { ...lease.aboutent, city: d } })
            }} maxLen={6} theClass='self-center sm:self-end basis-full sm:basis-2/7' />
            <TextEdit shortext={lease.aboutent.district} caption='所在区县：' onChanged={d => {
                onChanged({ aboutent: { ...lease.aboutent, district: d } })
            }} placeholder='区县名称' maxLen={8} theClass='basis-full sm:basis-2/7' />
            <TextEdit shortext={lease.aboutent.address} caption='详细地址：' onChanged={d => {
                onChanged({ aboutent: { ...lease.aboutent, address: d } })
            }} placeholder='路街、门牌' maxLen={20} theClass='basis-full sm:basis-3/7' />
        </GroupBox>
        <GroupBox titlead='租赁类型及限制'>
            <div className='basis-full sm:basis-1/2 flex flex-row gap-1'>
                <Tinumber theNumber={lease.peopless} caption="限住人数：" onChanged={d => {
                    onChanged({ peopless: d })
                }} postfix='人' maxNumber={99} />
                <BoolRadios trueLabel='合租' falseLabel='整租' onSelect={d => {
                    onChanged({ tenancy: { ...lease.tenancy, share: d } })
                }} selected={lease.tenancy.share} />
            </div>
            <Shortext shortext={lease.restrict} caption="其他限制：" onChanged={d => {
                onChanged({ restrict: d })
            }} placeholder='禁养宠物或仅限居住' maxLen={20} theClass='basis-full sm:basis-1/2' />
        </GroupBox>
        <GroupBox titlead='租金（￥）'>
            <Tinumber theNumber={lease.rentFee.monthAmount} caption="每月金额：" onChanged={d => {
                onChanged({ rentFee: { ...lease.rentFee, monthAmount: d } })
            }} postfix='元' maxNumber={999999} theClass='basis-full sm:basis-4/12 self-end flex flex-nowrap' />
            <TextEdit shortext={lease.rentFee.sinote} caption="大写租金：" onChanged={d => {
                onChanged({ rentFee: { ...lease.rentFee, sinote: d } })
            }} placeholder='中文数字' maxLen={16} theClass='basis-full sm:basis-5/12 text-center' />
            <Tinumber theNumber={lease.rentFee.payPeriod} caption="付款周期：" onChanged={d => {
                onChanged({ rentFee: { ...lease.rentFee, payPeriod: d } })
            }} postfix='月' title={`每${lease.rentFee.payPeriod}个月付一次租金`}
                maxNumber={99} theClass='basis-full sm:basis-3/12 text-left sm:text-right self-end' />
        </GroupBox>
        <GroupBox titlead='滞纳金（￥）'>
            <Tinumber theNumber={lease.lateFee.dailyAmount} caption="每日金额：" onChanged={d => {
                onChanged({ lateFee: { ...lease.lateFee, dailyAmount: d } })
            }} postfix='元' maxNumber={9999} theClass='basis-full sm:basis-4/12 self-end flex flex-nowrap' />
            <TextEdit shortext={lease.lateFee.sinote} caption="大写数目：" onChanged={d => {
                onChanged({ lateFee: { ...lease.lateFee, sinote: d } })
            }} placeholder='中文数字' maxLen={12} theClass='basis-full sm:basis-5/12 text-center' />
            <Tinumber theNumber={lease.lateFee.laterDays} caption="滞纳期限：" onChanged={d => {
                onChanged({ lateFee: { ...lease.lateFee, laterDays: d } })
            }} postfix='日' title='期限过后甲方有权收回房屋' maxNumber={99}
                theClass='basis-full sm:basis-3/12 text-left sm:text-right self-end' />
        </GroupBox>
        <GroupBox titlead='押金（￥）'>
            <Tinumber theNumber={lease.foregift.amount} caption="押金金额：" onChanged={d => {
                onChanged({ foregift: { ...lease.foregift, amount: d } })
            }} postfix='元' maxNumber={999999} />
            <Shortext shortext={lease.foregift.sinote} caption="大写押金：" onChanged={d => {
                onChanged({ foregift: { ...lease.foregift, sinote: d } })
            }} placeholder='中文数字' maxLen={16} />
        </GroupBox>
        <GroupBox titlead='收付款方式及账号'>
            <Shortext shortext={lease.lessor.receipt} caption="甲方收款：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, receipt: d } })
            }} placeholder='收款方' maxLen={24} theClass='basis-full sm:basis-1/2' />
            <Shortext shortext={lease.lessee.payment} caption="乙方付款：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, payment: d } })
            }} placeholder='付款方' maxLen={24} theClass='basis-full sm:basis-1/2' />
        </GroupBox>
        <GroupBox titlead='租期'>
            <DatePicker caption='开始日期：' ymdate={lease.tenancy.start} onChanged={d => {
                onChanged({ tenancy: { ...lease.tenancy, start: d } })
            }} />
            <Tinumber theNumber={lease.tenancy.sumonth} caption="租赁期限：" onChanged={d => {
                onChanged({ tenancy: { ...lease.tenancy, sumonth: d } })
            }} postfix='月' theClass='self-center' maxNumber={9999} />
            <div className='p-1 m-1 hidden md:block'>
                {`截止日期：${format(addMonths(lease.tenancy.start, lease.tenancy.sumonth), 'yyyy年MM月dd日')}`}
            </div>
        </GroupBox>
        <GroupBox titlead='杂项费用（支付方及款项）'>
            <Shortext shortext={lease.lessor.charges} caption="甲方支付：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, charges: d } })
            }} placeholder='甲方负责支付的款项' maxLen={24} theClass='basis-full sm:basis-1/2' />
            <Shortext shortext={lease.lessee.charges} caption="乙方支付：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, charges: d } })
            }} placeholder='乙方负责支付的款项' maxLen={24} theClass='basis-full sm:basis-1/2' />
        </GroupBox>
        <p className='p-1'>水电费由乙方支付，未明确列出的费用由甲方支付。</p>
        <GroupBox titlead='维护（负责方及设施）'>
            <div className='basis-full sm:basis-1/3'>
                <BoolRadios caption="乙方改造:" trueLabel='允许' falseLabel='禁止' onSelect={d => {
                    onChanged({ lessee: { ...lease.lessee, alteright: d } })
                }} selected={lease.lessee.alteright} />
            </div>
            <TextEdit shortext={lease.lessor.maint} caption="甲方维修：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, maint: d } })
            }} placeholder='甲方负责维修的设施' maxLen={24} theClass='basis-full sm:basis-1/3' />
            <TextEdit shortext={lease.lessee.maint} caption="乙方维修：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, maint: d } })
            }} placeholder='乙方负责维修的设施' maxLen={24} theClass='basis-full sm:basis-1/3' />
        </GroupBox>
        {lease.lessee.alteright && <p className='p-1'>如乙方需要装修改造，应保证房屋的功能分区不变。</p>}
        <div className='m-1'>
            <Shortext shortext={lease.remarks} caption='补充事项：' onChanged={d => {
                onChanged({ remarks: d })
            }} placeholder="补充或备注" maxLen={50} theClass='w-full' />
        </div>
    </div>
}

LeaseEdit.propTypes = {
    lease: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default LeaseEdit
