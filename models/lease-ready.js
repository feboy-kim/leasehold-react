export const leaseTitles = [
    '个人租房合同', '房屋租赁合同'
]
export function initialease() {
    return {
        tIndex: 0,    // 标题
        lessor: {
            name: "",
            identity: "",
            contact: "",
            receipt: '',    // 收款方式及账号
            charges: '',
            provides: ""
        },     // 甲方: 姓名，身份证号码， 联系电话以及负责维修的设施、负责支付的款项。
        lessee: {
            name: "",
            identity: "",
            contact: "",
            payment: '',        // 付款方式及账号
            alteright: false,   // 改造与装修
            charges: '',
            sublet: false,      // 转租
        },     // 乙方: 姓名，身份证号码， 联系电话、负责支付的款项。
        aboutent: {
            city: "",
            district: "",
            address: "",
            tent: ""    // 产权证编号、面积或其他
        },      // 城市、区县与详细地址
        rentFee: {
            amount: 1,
            sinote: "",
        },      // 月租金、中文大写金额
        payPeriod: 1,       // 付款周期（月）
        percentage: 1,      // 年度调价百分比
        lateFee: {
            amount: 1,
            sinote: "",
        },      // 滞纳金（日）及中文大写金额、
        lateDays: 7, // 滞纳期限
        foregift: {
            amount: 1,
            sinote: ""
        },      // 押金及中文大写金额
        tenancy: {
            start: new Date(),
            sumonth: 12,
            peopless: 3,        // 限住人数
            restrict: "",       // 限制
            share: false
        },        // 租期（开始日期与时长）、整租或者合租
        remarks: ""         // 附加备注
    }
}
