import PropTypes from 'prop-types'
import { leaseTitles } from '../models/lease-ready'
import ViewArticle from './view/view-article'
import { addMonths, format } from 'date-fns'

function LeaseView({ lease }) {
    return <div className='p-1 max-w-4xl md:mx-auto'>
        <h2 className='p-1 heading-2 print:heading-3'>{leaseTitles[lease.tIndex]}</h2>
        <p className='p-1 print:text-sm'>出租方为甲方，承租方为乙方。</p>
        <div className='flex flex-row p-1 gap-1 print:text-sm'>
            <p className='basis-4/12'>甲方姓名：{lease.lessor?.name}</p>
            <p className='basis-5/12'>身份证号：{lease.lessor?.identity}</p>
            <p className='basis-3/12'>联系电话：{lease.lessor?.contact}</p>
        </div>
        <div className='flex flex-row p-1 gap-1 print:text-sm'>
            <p className='basis-4/12'>乙方姓名：{lease.lessee?.name}</p>
            <p className='basis-5/12'>身份证号：{lease.lessee?.identity}</p>
            <p className='basis-3/12'>联系电话：{lease.lessee?.contact}</p>
        </div>
        <p className='p-1 print:text-sm'>
            依据《中华人民共和国民法典》等相关法律，甲乙双方在平等、自愿、协商一致的基础上，就房屋租赁达成以下协议：
        </p>
        <ViewArticle caption='一. 标的房屋'>
            甲方将坐落在<span className='px-1'>{lease.aboutent?.city}</span>,
            位于<span className='px-1'>{lease.aboutent?.district}</span>区/县
            <span className='px-1'>{lease.aboutent?.address}</span>的房屋出租给乙方。
        </ViewArticle>
        <p className='text-lg p-1 font-medium print:text-base'>二. 租赁类型及约定</p>
        <div className='p-1 print:text-sm'>
            <span>{lease.tenancy.share ? '合租' : '整租'}, </span>
            <span>{lease.restrict ? `${lease.restrict}, ` : ''}</span>
            限住<span className='px-1'>{lease.peopless}</span>人。
        </div>
        <ViewArticle caption='三. 租赁期限'>
            租赁期为<span className='px-1'>{lease.tenancy.sumonth}</span>个月，
            自<span className='px-1'>{format(lease.tenancy.start, 'yyyy年MM月dd日')}</span>起（合同生效日），
            至<span className='px-1'>{format(addMonths(lease.tenancy.start, lease.tenancy.sumonth), 'yyyy年MM月dd日')}</span>。
            甲方应于合同生效之日起将房屋交付给乙方使用。
        </ViewArticle>
        <ViewArticle caption='四. 租金、滞纳金与押金'>
            <p>
                双方议定月租金为<span className='px-1'>{lease.rentFee.monthAmount}</span>元
                (<span className='px-1'>{lease.rentFee.sinote}</span>),
                租金每<span className='px-1'>{lease.rentFee.payPeriod}</span>个月缴纳一次（期），
                每期首月<span className='px-1'>{format(lease.tenancy.start, 'dd日')}</span>前交付。
            </p>
            <p>
                租赁期间，乙方应尽心维护房内各种设施的完好无损，作为此项保障，甲方有权在乙方入住前收取租赁押金。
                双方议定押金金额为<span className='px-1'>{lease.foregift.amount}</span>元
                (<span className='px-1'>{lease.foregift.sinote}</span>)。
            </p>
            <p>
                如乙方无法按期及时支付租金，甲方有权收取滞纳金。金额为每日<span className='px-1'>{lease.lateFee?.dailyAmount}</span>元
                (<span className='px-1'>{lease.lateFee?.sinote}</span>), 
                最多收取<span className='px-1'>{lease.lateFee?.laterDays}</span>天后，如乙方仍然无法支付租金，甲方有权收回房屋，不退押金。
            </p>
        </ViewArticle>
        <ViewArticle caption='五. 收付方式'>
            <p>
                甲方收款：
            </p>
            <p>
                乙方付款：
            </p>
        </ViewArticle>
        <ViewArticle caption='六. '>

        </ViewArticle>
        <ViewArticle caption='七. 杂费支付'>
            <span>租赁期间，水电费由乙方支付。</span>
            <span>{(lease.lessor?.payment || lease.lessee?.payment) ? `其他款项约定如下：` : ''}</span>
            <ul className='list-disc list-inside'>
                <li>
                    {lease.lessor?.payment ? `甲方支付：${lease.lessor.payment}` : ''}
                </li>
                <li>
                    {lease.lessee?.payment ? `乙方支付：${lease.lessee.payment}` : ''}
                </li>
            </ul>
        </ViewArticle>
        <ViewArticle caption='八. 房屋维护'>

        </ViewArticle>
        <ViewArticle caption='九. 产权变动'>

        </ViewArticle>
        <ViewArticle caption='十. 违约与免责'>
            <ul className='list-disc list-inside'>
                <li>
                    租赁期内，如甲方收回房屋，则需承担违约责任，无条件退还乙方剩余房租及押金。
                    如果不是因为不可抗的原因（市政拆迁或灾难等原因）而收回房屋，甲方还需支付与押金等额的赔偿作为对乙方的补偿。
                </li>
                <li>
                    租赁期内，乙方不得在厨房、卫生间等非居住空间安排住宿，否则视为乙方违约，所涉责任由乙方承担，甲方因此有权收回房屋并没收押金。
                </li>
                <li>
                    租赁期内，乙方（租客）是房屋的实际管理人，该房屋内发生的安全事故（包括高空抛物、水电与燃气事故，人身伤害等），
                    责任由乙方自行承担，甲方不承担任何责任。
                </li>
                <li>
                    租赁期内，乙方不得在房屋内从事违法犯罪活动，否则甲方有权收回房屋并没收押金。
                </li>
                <li>
                    租赁期结束后，如双方无意续约，则合同履行完毕。甲方收回房屋，如乙方未对房屋造成损坏，甲方应退还全部押金给乙方。
                </li>
            </ul>
        </ViewArticle>
        <ViewArticle caption='其他事项'>
            <span className='px-1'>{lease.remarks}</span>
            <p className='p-1'>
            </p>
        </ViewArticle>
    </div>
}

LeaseView.propTypes = {
    lease: PropTypes.object.isRequired
}

export default LeaseView
