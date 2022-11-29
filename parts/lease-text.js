import PropTypes from 'prop-types'
import { leaseTitles } from '../models/lease-ready'
import GroupLine from './edit/group-line'

function LeaseText({ lease }) {
    return <div className='p-1 text-bg-partion'>
        <h1 className='p-1 heading-1'>{leaseTitles[lease.tIndex]}</h1>
        <div>
            <div className='flex m-1 gap-1'>
                <p className='w-64'>出租方（甲方）：{lease.lessor?.name}</p>
                <p className='w-96'>甲方证件：{lease.lessor?.identity}</p>
            </div>
            <div className='flex m-1 gap-1'>
                <p className='w-64'>承租方（乙方）：{lease.lessee?.name}</p>
                <p className='w-96'>乙方证件：{lease.lessee?.identity}</p>
            </div>
        </div>
        <p className='m-1'>依据《中华人民共和国合同法》等相关法律，甲乙双方在平等、自愿、协商一致的基础上，就房屋租赁达成以下协议：</p>
        <GroupLine titlead='一 标的房屋' />
        <div>
            甲方将坐落在<span className='w-20 inline-block text-center'>{lease.aboutent?.city}</span>市，
            位于<span className='w-64 inline-block text-center'>{lease.aboutent?.address}</span>的房屋出租给乙方。
            <span className='inline-block'>{lease.aboutent?.others ? `其他信息：${lease.aboutent.others}。` : ''}</span>
        </div>
        <GroupLine titlead='二 租赁类型及要求' />
        <div className='mx-2 p-1'>
            <span>{lease.tenancy.share ? '合租' : '整租'}, </span>
            <span>{lease.special ? `${lease.special}, ` : ''}</span>
            限住<span className='w-8 inline-block text-center'>{lease.peopless}</span>人。
        </div>
        <GroupLine titlead='三 租赁期限' />
        <GroupLine titlead='四 租金' />
        <GroupLine titlead='五 押金' />
        <GroupLine titlead='六 滞纳金' />
        <GroupLine titlead='七 杂费' />
        <div className='mx-2 p-1'>
            <p>
                <span>租赁期间，租赁税费由甲方支付，水电费由乙方支付。</span>
                <span>{(lease.lessor?.payment || lease.lessee?.payment) ? `其他款项约定如下：` : ''}</span>
            </p>
            <p>{lease.lessor?.payment ? `甲方支付：${lease.lessor.payment}` : ''}</p>
            <p>{lease.lessee?.payment ? `乙方支付：${lease.lessee.payment}` : ''}</p>
        </div>

        <GroupLine titlead='八 维修' />
        <GroupLine titlead='九' />
        <GroupLine titlead='签字处' />
        <div className='m-2 p-1 grid gap-1 grid-cols-2'>
            <div>
                <p>甲方：</p>
                <p className='py-1'>联络：{lease.lessor?.contact}</p>
                <p className='flex flex-row gap-1'>
                    <span className='w-fit'>签于：</span>
                    <span className='w-20 text-right'>年</span>
                    <span className='w-10 text-right'>月</span>
                    <span className='w-10 text-right'>日</span>
                </p>
            </div>
            <div>
                <p>乙方：</p>
                <p className='py-1'>联络：{lease.lessee?.contact}</p>
                <p className='flex flex-row gap-1'>
                    <span className='w-fit'>签于：</span>
                    <span className='w-20 text-right'>年</span>
                    <span className='w-10 text-right'>月</span>
                    <span className='w-10 text-right'>日</span>
                </p>
            </div>
        </div>
    </div>
}

LeaseText.propTypes = {
    lease: PropTypes.object.isRequired
}

export default LeaseText
