import PropTypes from 'prop-types'
import DatePicker from './edit/date-picker'
import Fieldata from './edit/fieldata'
import GroupLine from './edit/group-line'
import InputNum from './edit/input-num'
import Shortext from './edit/shortext'
import { addMonths, format } from 'date-fns'
import ListCombox from './edit/list-combox'
import { leaseTitles } from '../models/lease-ready'
import BoolRadios from './edit/bool-radios'

function LeaseEdit({ lease, onChanged }) {
    return <div className='p-1 text-bg-partion'>
        <div className='mx-1 flex flex-row items-center'>
            <ListCombox items={leaseTitles} caption="合同标题：" selected={leaseTitles[lease.tIndex]} onSelect={it => {
                onChanged({ tIndex: leaseTitles.indexOf(it) })
            }} />
            <span className='invisible md:visible px-2'>字段可以留空用于手写（姓名除外）, 勿填入“无”等内容。</span>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='出租方（甲方）' />
            <div className='flex flex-wrap'>
                <Shortext shortext={{ k: "甲方姓名：", v: lease.lessor.name }} onChanged={d => {
                    onChanged({ lessor: { ...lease.lessor, name: d } })
                }} widthClass='w-28' />
                <Shortext shortext={{ k: "证件号码：", v: lease.lessor.identity }} onChanged={d => {
                    onChanged({ lessor: { ...lease.lessor, identity: d } })
                }} placeholder='身份证号码或其他' widthClass='w-60' />
                <Shortext shortext={{ k: "联络信息：", v: lease.lessor.contact }} onChanged={d => {
                    onChanged({ lessor: { ...lease.lessor, contact: d } })
                }} placeholder='电话号码或其他方式' widthClass='w-60' />
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='承租方（乙方）' />
            <div className='flex flex-wrap'>
                <Shortext shortext={{ k: "乙方姓名：", v: lease.lessee.name }} onChanged={d => {
                    onChanged({ lessee: { ...lease.lessee, name: d } })
                }} widthClass='w-28' />
                <Shortext shortext={{ k: "证件号码：", v: lease.lessee.identity }} onChanged={d => {
                    onChanged({ lessee: { ...lease.lessee, identity: d } })
                }} placeholder='身份证号码或其他' widthClass='w-60' />
                <Shortext shortext={{ k: "联络信息：", v: lease.lessee.contact }} onChanged={d => {
                    onChanged({ lessee: { ...lease.lessee, contact: d } })
                }} placeholder='电话号码或其他方式' widthClass='w-60' />
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='房屋情况' />
            <div className='flex flex-wrap'>
                <Shortext shortext={{ k: "所在城市：", v: lease.aboutent.city }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, city: d } })
                }} widthClass='w-28' />
                <Shortext shortext={{ k: "房屋地址：", v: lease.aboutent.address }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, address: d } })
                }} widthClass='w-80 md:w-72 lg:w-96' placeholder='路街、门牌等详细地址' />
                <Shortext shortext={{ k: "其他信息：", v: lease.aboutent.others }} onChanged={d => {
                    onChanged({ aboutent: { ...lease.aboutent, others: d } })
                }} placeholder='产权证或房屋面积等信息' />
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='租赁类型' />
            <BoolRadios trueLabel='合租' falseLabel='整租' onSelect={d => {
                onChanged({ tenancy: { ...lease.tenancy, share: d } })
            }} selected={lease.tenancy.share} />
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='租金（￥）' />
            <div className='flex flex-wrap'>
                <InputNum theNumber={lease.rentFee.monthAmount} caption="每月金额：" onChanged={d => {
                    onChanged({ rentFee: { ...lease.rentFee, monthAmount: d } })
                }} postfix='元' widthClass='w-28' />
                <Shortext shortext={{ k: "大写数目：", v: lease.rentFee.sinote }} onChanged={d => {
                    onChanged({ rentFee: { ...lease.rentFee, sinote: d } })
                }} placeholder='中文数字' />
                <div title={`每${lease.rentFee.payPeriod}个月付一次租金`}>
                    <InputNum theNumber={lease.rentFee.payPeriod} caption="付款周期：" maxNumber={99}
                        onChanged={d => {
                            onChanged({ rentFee: { ...lease.rentFee, payPeriod: d } })
                        }} postfix='月' />
                </div>
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='滞纳金（￥）' />
            <div className='flex flex-wrap'>
                <InputNum theNumber={lease.lateFee.dailyAmount} caption="每日金额：" maxNumber={999}
                    onChanged={d => {
                        onChanged({ lateFee: { ...lease.lateFee, dailyAmount: d } })
                    }} postfix='元' widthClass='w-28' />
                <Shortext shortext={{ k: "大写数目：", v: lease.lateFee.sinote }} onChanged={d => {
                    onChanged({ lateFee: { ...lease.lateFee, sinote: d } })
                }} placeholder='中文数字' />
                <div title='期限过后甲方有权收回房屋'>
                    <InputNum theNumber={lease.lateFee.laterDays} caption="滞纳期限：" maxNumber={99}
                        onChanged={d => {
                            onChanged({ lateFee: { ...lease.lateFee, laterDays: d } })
                        }} postfix='日' />
                </div>
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='租期' />
            <div className='flex flex-wrap'>
                <DatePicker caption='开始日期：' ymdate={lease.tenancy.start} onChanged={d => {
                    onChanged({ tenancy: { ...lease.tenancy, start: d } })
                }} />
                <InputNum theNumber={lease.tenancy.sumonth} caption="租赁期限：" maxNumber={999}
                    onChanged={d => {
                        onChanged({ tenancy: { ...lease.tenancy, sumonth: d } })
                    }} postfix='月' widthClass='w-28' />
                <div className='p-1 m-1'>
                    {`截止日期：${format(addMonths(lease.tenancy.start, lease.tenancy.sumonth), 'yyyy年MM月dd日')}`}
                </div>
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='押金（￥）' />
            <div className='flex flex-wrap'>
                <InputNum theNumber={lease.foregift.amount} caption="预付金额："
                    onChanged={d => {
                        onChanged({ foregift: { ...lease.foregift, amount: d } })
                    }} postfix='元' widthClass='w-28' />
                <Shortext shortext={{ k: "大写数目：", v: lease.foregift.sinote }} onChanged={d => {
                    onChanged({ foregift: { ...lease.foregift, sinote: d } })
                }} placeholder='中文数字' />
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='杂项费用（支付方及款项）' />
            <p className='px-2 py-1'>租赁期间，水电费由乙方支付，其他款项约定如下（未列出的费用由甲方支付）：</p>
            <div className='flex flex-wrap'>
                <Shortext shortext={{ k: "甲方支付：", v: lease.lessor.payment }} onChanged={d => {
                    onChanged({ lessor: { ...lease.lessor, payment: d } })
                }} placeholder='甲方负责支付的款项' widthClass='w-80 md:w-72 lg:w-96' />
                <Shortext shortext={{ k: "乙方支付：", v: lease.lessee.payment }} onChanged={d => {
                    onChanged({ lessee: { ...lease.lessee, payment: d } })
                }} placeholder='乙方负责支付的款项' widthClass='w-80 md:w-72 lg:w-96' />
            </div>
        </div>
        <div className='w-fit mx-1'>
            <GroupLine titlead='房屋维修（负责方及设施）' />
            <div className='flex flex-wrap'>
                <Shortext shortext={{ k: "甲方维修：", v: lease.lessor.maint }} onChanged={d => {
                    onChanged({ lessor: { ...lease.lessor, maint: d } })
                }} placeholder='甲方负责维修的设施' widthClass='w-80 md:w-72 lg:w-96' />
                <Shortext shortext={{ k: "乙方维修：", v: lease.lessee.maint }} onChanged={d => {
                    onChanged({ lessee: { ...lease.lessee, maint: d } })
                }} placeholder='乙方负责维修的设施' widthClass='w-80 md:w-72 lg:w-96' />
            </div>
        </div>
        <div className='mx-1'>
            <GroupLine titlead='其他' />
            <div className='flex flex-wrap'>
                <div className='flex-none'>
                    <InputNum theNumber={lease.peopless} caption="限住人数：" maxNumber={99} onChanged={d => {
                        onChanged({ peopless: d })
                    }} postfix='人' />
                </div>
                <div className='flex-auto'>
                    <Fieldata fieldata={{ k: "特殊要求：", v: lease.special, p: '禁养宠物' }} onChanged={d => {
                        onChanged({ special: d })
                    }} />
                </div>
            </div>
            <Fieldata fieldata={{ k: "附加备注：", v: lease.remarks, p: '补充事项' }} linage={3} onChanged={d => {
                onChanged({ remarks: d })
            }} />
        </div>
    </div>
}

LeaseEdit.propTypes = {
    lease: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
}

export default LeaseEdit
