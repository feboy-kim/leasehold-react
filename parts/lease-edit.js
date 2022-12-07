import PropTypes from 'prop-types'
import DatePicker from './edit/date-picker'
import GroupBox from './edit/group-box'
import Tinumber from './edit/tinumber'
import Shortext from './edit/shortext'
import ListCombox from './edit/list-combox'
import { leaseTitles, percentages } from '../models/lease-ready'
import BoolRadios from './edit/bool-radios'
import TextEdit from './edit/textedit'
import PercentList from './edit/percent-list'
import PersonInfo from './edit/person-info'
import MoneyPair from './edit/money-pair'

function LeaseEdit({ lease, onChanged }) {
    return <div className='p-1 max-w-4xl md:mx-auto'>
        <div className='p-1'>
            <ListCombox items={leaseTitles} caption="合同标题：" selected={leaseTitles[lease.tIndex]} onSelect={it => {
                onChanged({ tIndex: leaseTitles.indexOf(it) })
            }} />
        </div>
        <PersonInfo titlead='出租方' textail='甲方' person={lease.lessor} onChanged={p => {
            onChanged({ lessor: p })
        }} />
        <PersonInfo titlead='承租方' textail='乙方' person={lease.lessee} onChanged={p => {
            onChanged({ lessee: p })
        }} />
        <GroupBox titlead='标的房屋'>
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
        <div className='m-1'>
            <Shortext shortext={lease.aboutent.tent} caption='其他信息：' onChanged={d => {
                onChanged({ aboutent: { ...lease.aboutent, tent: d } })
            }} placeholder="产权证号、房屋面积或其他" maxLen={72} theClass='w-full sm:w-2/3' />
        </div>
        <GroupBox titlead='租赁约定'>
            <div className='basis-full sm:basis-1/2 flex flex-row gap-1'>
                <Tinumber theNumber={lease.tenancy.peopless} caption="限住人数：" onChanged={d => {
                    onChanged({ tenancy: { ...lease.tenancy, peopless: d } })
                }} postfix='人' maxNumber={99} theClass='self-end' />
                <BoolRadios caption='租赁类型' trueLabel='合租' falseLabel='整租' onSelect={d => {
                    onChanged({ tenancy: { ...lease.tenancy, share: d } })
                }} selected={lease.tenancy.share} />
            </div>
            <Shortext shortext={lease.tenancy.restrict} caption="其他限制：" onChanged={d => {
                onChanged({ tenancy: { ...lease.tenancy, restrict: d } })
            }} placeholder='禁养宠物或仅限居住' maxLen={20} theClass='basis-full sm:basis-1/2' />
        </GroupBox>
        <GroupBox titlead='租期'>
            <DatePicker caption='开始日期：' ymdate={lease.tenancy.start} onChanged={d => {
                onChanged({ tenancy: { ...lease.tenancy, start: d } })
            }} />
            <Tinumber theNumber={lease.tenancy.sumonth} caption="租赁期限：" onChanged={d => {
                onChanged({ tenancy: { ...lease.tenancy, sumonth: d } })
            }} postfix='月' theClass='self-center' maxNumber={9999} />
            <BoolRadios caption='乙方转租' trueLabel='允许' falseLabel='禁止' onSelect={d => {
                onChanged({ lessee: { ...lease.lessee, sublet: d } })
            }} selected={lease.lessee.sublet} />
        </GroupBox>
        <GroupBox titlead='租金' textail='￥'>
            <MoneyPair caption="每月金额" money={lease.rentFee} onChanged={m =>
                onChanged({ rentFee: m })
            } theClass='basis-full sm:basis-2/3' />
            {(lease.tenancy.sumonth > 1) &&
                <Tinumber theNumber={lease.payPeriod} caption="付款周期" onChanged={d => {
                    onChanged({ payPeriod: d })
                }} postfix='月' title={`每${lease.payPeriod}个月付一次租金`}
                    maxNumber={99} theClass='basis-full sm:basis-1/3 text-left sm:text-right' />
            }
        </GroupBox>
        {(lease.tenancy.sumonth > 12) &&
            <PercentList firstext='免调租金' caption="年度租金调整上限：" selectedIndex={lease.percentage} onSelectIndex={ti => {
                onChanged({ percentage: ti })
            }} theClass='p-1 w-full' />
        }
        <GroupBox titlead='滞纳金' textail='￥'>
            <MoneyPair caption="每日金额" money={lease.lateFee} onChanged={m =>
                onChanged({ lateFee: m })
            } theClass='basis-full sm:basis-2/3' />
            <Tinumber theNumber={lease.lateDays} caption="滞纳期限" onChanged={d => {
                onChanged({ lateDays: d })
            }} postfix='日' title='期限过后甲方有权收回房屋' maxNumber={99} theClass='basis-full sm:basis-1/3 text-left sm:text-right' />
        </GroupBox>
        <GroupBox titlead='押金' textail='￥'>
            <MoneyPair caption="押金金额" money={lease.foregift} onChanged={m => {
                onChanged({ foregift: m })
            }} theClass='basis-full sm:basis-2/3' />
        </GroupBox>
        <GroupBox titlead='收付款方式及账号'>
            <Shortext shortext={lease.lessor.receipt} caption="甲方收款：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, receipt: d } })
            }} placeholder='收款方式及账号' maxLen={24} theClass='basis-full sm:basis-1/2' />
            <Shortext shortext={lease.lessee.payment} caption="乙方付款：" onChanged={d => {
                onChanged({ lessee: { ...lease.lessee, payment: d } })
            }} placeholder='付款方式及账号' maxLen={24} theClass='basis-full sm:basis-1/2' />
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
        <GroupBox titlead='设施与维护'>
            <div className='sm:basis-1/3'>
                <BoolRadios caption="装修改造:" trueLabel='允许' falseLabel='禁止' onSelect={d => {
                    onChanged({ lessee: { ...lease.lessee, alteright: d } })
                }} selected={lease.lessee.alteright} title='乙方对房屋进行装修改造'/>
            </div>
            <Shortext shortext={lease.lessor.provides} caption="家电设施：" onChanged={d => {
                onChanged({ lessor: { ...lease.lessor, provides: d } })
            }} placeholder='甲方提供并负责维护的家电与设施' maxLen={24} theClass='basis-2/3' />
        </GroupBox>
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
