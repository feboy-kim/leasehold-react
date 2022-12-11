// import PropTypes from 'prop-types'
import { leaseTitles } from '../models/lease-ready'
import ViewArticle from './view/view-article'
import { addMonths, format } from 'date-fns'
import { forwardRef } from 'react'

function LeaseView({ lease }, ref) {
    return <div className='p-1 max-w-4xl md:mx-auto' ref={ref}>
        <h2 className='p-1 m-1 heading-2 print:heading-3'>{leaseTitles[lease.tIndex]}</h2>
        <p className='px-2 py-1 print:text-sm'>出租方为甲方，承租方为乙方。</p>
        <div className='flex flex-row pl-2 py-1 gap-1 print:text-sm'>
            <p className='basis-4/12'>甲方姓名：{lease.lessor?.name}</p>
            <p className='basis-5/12'>身份证号：{lease.lessor?.identity}</p>
            <p className='basis-3/12'>联系电话：{lease.lessor?.contact}</p>
        </div>
        <div className='flex flex-row pl-2 py-1 gap-1 print:text-sm'>
            <p className='basis-4/12'>乙方姓名：{lease.lessee?.name}</p>
            <p className='basis-5/12'>身份证号：{lease.lessee?.identity}</p>
            <p className='basis-3/12'>联系电话：{lease.lessee?.contact}</p>
        </div>
        <p className='pl-2 py-1 print:text-sm'>
            依据《中华人民共和国民法典》等相关法律，甲乙双方在平等、自愿的基础上，就房屋租赁达成以下协议：
        </p>
        <ViewArticle caption='一. 标的房屋'>
            <p>
                甲方将自有（或具有处置权）的, 位于<span className='px-1'>{lease.aboutent?.city}</span>,
                坐落在<span className='px-1'>{lease.aboutent?.district}</span>,
                <span className='px-1'>{lease.aboutent?.address}</span>的房屋出租给乙方。
                {lease.aboutent?.tent && <span>{`${lease.aboutent.tent}。`}</span>}
            </p>
            <p>
                甲方保证该房屋无产权纠纷, 且房屋状况良好, 适合租住。
            </p>
        </ViewArticle>
        <ViewArticle caption='二. 租住及约定'>
            <p>
                <span>{lease.tenancy.share ? '本合同限定为合租, 乙方租用指定房间，与他人共用公共设施' : '本合同限定为整租, 乙方独用整套房屋'}, </span>
                <span>{lease.tenancy.restrict ? `${lease.tenancy.restrict}, ` : ''}</span>
                限住<span className='px-1'>{lease.tenancy.peopless}</span>人。
            </p>
            <p className='py-1'>
                租赁期内, 乙方不得在厨房、卫生间等非居住空间安排他人住宿。
            </p>
        </ViewArticle>
        <ViewArticle caption='三. 租赁期限'>
            <p>
                租赁期为<span className='px-1'>{lease.tenancy.sumonth}</span>个月，
                自<span className='px-1'>{format(lease.tenancy.start, 'yyyy年MM月dd日')}</span>起（合同生效日），
                至<span className='px-1'>{format(addMonths(lease.tenancy.start, lease.tenancy.sumonth), 'yyyy年MM月dd日')}</span>。
                甲方应于合同生效之日起将房屋交付给乙方使用。
            </p>
            <p>
                如双方在租赁期满后有意续约而不签新约，乙方应提前一个月知会甲方并约定续约期限。
            </p>
        </ViewArticle>
        <ViewArticle caption='四. 租金与押金'>
            <p>
                双方议定月租金为<span className='px-1'>{lease.rentFee.amount}</span>元
                (<span className='px-1'>{lease.rentFee.sinote}</span>)
                {lease.tenancy.sumonth > 1
                    ? `，租金每${lease.payPeriod}个月缴纳一次（期），每期合计${lease.payPeriod * lease.rentFee.amount}元，
                每期首月${format(lease.tenancy.start, 'dd日')}前交付。`
                    : '，租金应在入住前交付。'}
            </p>
            {lease.foregift?.amount ? <p className='py-1'>
                为保证租约的正常履行，甲方将在乙方入住前收取押金，双方议定押金金额为<span className='px-1'>{lease.foregift.amount}</span>元
                (<span className='px-1'>{lease.foregift.sinote}</span>)，押金在租期正常结束时退还乙方。
            </p> : ''}
            {lease.lateDays && <span className='px-1'>如乙方无法按期及时支付租金，甲方可宽限几日，
                {`最多${lease.lateDays}天（滞纳期限）后，如乙方仍然无法支付租金，甲方有权解约，收回房屋，而且不退押金。`}
            </span>}
            {lease.tenancy && lease.tenancy.sumonth > 12 && lease.percentage >= 1 &&
                <p>租住一年以上，甲方可以要求下一年度少许涨价，乙方也可以要求下一年度少许降价，但幅度都不能超过租金的
                    <span className='px-1'>{lease.percentage}%</span>。如双方协商不成，可以解除租约，并由甲方退还乙方剩余房租及押金。
                </p>
            }
        </ViewArticle>
        <ViewArticle caption='五. 收付方式或账号'>
            <p>
                甲方收款：<span className='px-1'>{lease.lessor?.receipt}</span>
            </p>
            <p>
                乙方付款：<span className='px-1'>{lease.lessee?.payment}</span>
            </p>
        </ViewArticle>
        <ViewArticle caption='六. 设施与维护'>
            <p>
                租赁期间，<span>{lease.lessee?.alteright ? '甲方允许乙方对房屋进行装修改造，但是不能改变室内的功能分区，装修改造费用由乙方自负。'
                    : '甲方负责房屋装修及水电管线的维护，对于出现的问题，甲方应及时处理，以不影响乙方生活为标准，不允许乙方对房屋进行任何装修改造。'}</span>
            </p>
            <p className='py-1'>
                {lease.lessor?.provides
                    ? `甲方提供并负责维护的设备和家电包括：${lease.lessor.provides}，如果甲方不能对故障设备或家电及时提供维修，
                    乙方有权自行解决问题，费用由甲方支付。`
                    : '各种生活设施（包括电器）由乙方自行维护。'}
            </p>
        </ViewArticle>
        <ViewArticle caption='七. 杂费支付'>
            租赁期间，水电费由乙方支付，其他款项约定如下：
            {lease.lessor?.charges &&
                <p>甲方负责支付的款项： {lease.lessor.charges}</p>
            }
            {lease.lessee?.charges &&
                <p>乙方负责支付的款项： {lease.lessee.charges}</p>
            }
            <p className='py-1'>乙方入住前，甲方应结清此前房屋所涉及的而以后将由乙方在租赁期内负责支付的水电费等费用项，租赁期间发生的其他未明确的费用由甲方支付。</p>
        </ViewArticle>
        <ViewArticle caption='八. 转让与转租'>
            <p>
                租赁期内，如房屋产权发生变更或转让，甲乙双方应会同新房主协商解决租约接续问题，如无法解决，甲方应无条件退还乙方剩余房租及押金，
                另外支付与押金等额的赔偿作为对乙方的补偿，否则，乙方有权按应得退款、应得赔偿、月租金重估剩余租期，继续占用房屋，直至租期结束。
            </p>
            <p className='py-1'>租赁期间，甲方{lease.sublet
                ? '允许乙方分租、转租所承租的房屋（需知会甲方），原租期不变，乙方可自行处理与新租户的租约，且不得违反本合同所约定的条款。'
                : '不允许乙方分租、转租所承租的房屋。'}
            </p>
        </ViewArticle>
        <ViewArticle caption='九. 合同的变更与解除'>
            <p>
                如果甲方或乙方在租赁期间不能遵守前述各项条款，则对方有权解约。
            </p>
            <p className='py-1'>
                租赁期内，如甲方收回房屋，或因甲方的原因造成租约无法履行，则需承担违约责任，无条件退还乙方剩余房租及押金。
                如果不是因为不可抗的原因（拆迁或灾难等原因）而收回房屋，甲方还需支付与押金等额的赔偿作为对乙方的补偿。
            </p>
            <p className='py-1'>
                如乙方提前解约（甲方无责），甲方应退还剩余已收取的租金，但押金作为乙方的违约赔偿，不予退还。
            </p>
            <p className='py-1'>
                租赁期结束后，如双方无意续约，则合同履行完毕，双方解约，甲方收回房屋。解约后，甲方有权处置乙方留存的物品，如乙方未对房屋设施造成损坏，
                甲方应在解约时退还全部押金给乙方, 如果部分设施因乙方的原因损毁（磨损除外），可以适当扣除部分押金。
                如果因乙方的原因造成房屋或设施的重大损毁，且评估的损失超出押金，则甲方有权向乙方提出额外索赔。
            </p>
        </ViewArticle>
        <ViewArticle caption='十. 违约与免责'>
            <p className='py-1'>
                租赁期内，乙方（租客）是房屋的实际管理人，负责防火安全，人身安全事项，该房屋内发生的安全事故（包括高空抛物、水电与燃气事故，人身伤亡等），
                责任全部由乙方自行承担。
            </p>
            <p className='py-1'>
                租赁期内，乙方如果在周边滋事扰民、在房屋内从事违法犯罪活动，甲方有权解约、收回房屋并没收押金。
            </p>
        </ViewArticle>
        {lease.remarks && <ViewArticle caption='其他事项'>
            <p>{lease.remarks}</p>
        </ViewArticle>}
        <ViewArticle caption="签字处">
            <div className='grid gap-1 grid-cols-2'>
                <p className="col-span-2">本合同一式两份，甲乙双方各执一份，合同自双方签字之日起生效。</p>
                <div>
                    <p className="py-1">甲方：</p>
                    <p className='px-1 flex flex-row gap-1 justify-end'>
                        <span className='w-20 text-right'>年</span>
                        <span className='w-10 text-right'>月</span>
                        <span className='w-10 text-right'>日</span>
                    </p>
                </div>
                <div>
                    <p className="py-1">乙方：</p>
                    <p className='px-1 flex flex-row gap-1 justify-end'>
                        <span className='w-20 text-right'>年</span>
                        <span className='w-10 text-right'>月</span>
                        <span className='w-10 text-right'>日</span>
                    </p>
                </div>
            </div>
        </ViewArticle>
    </div >
}

export default forwardRef(LeaseView)
